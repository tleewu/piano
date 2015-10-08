(function(root){
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();

  var Note = root.Note = function (frequency) {
    this.oscillatorNode = function (freq) {
      var osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.detune.value = 0;
      osc.start(ctx.currentTime);
      return osc;
    }(frequency);
    this.gainNode = function () {
      var gainNode = ctx.createGain();
      gainNode.gain.value = 0;
      gainNode.connect(ctx.destination);
      return gainNode;
    }();
    this.frequency = frequency;
    this.oscillatorNode.connect(this.gainNode);
  };

  Note.prototype.start = function() {
    this.gainNode.gain.value = 0.3;
  };
  Note.prototype.stop = function() {
    this.gainNode.gain.value = 0;
  };

})(this);
