(function(root) {
  'use strict';

  var Track = root.Track = function (attributes) {
    this.name = attributes.name;
    this.roll = attributes.roll || [];
  };

  Track.prototype.startRecording = function () {
    this.roll = [];
    this.currentTime = new Date();
  };

  Track.prototype.addNotes = function (object) {
    // object contains time (how much time has elapsed since we started) and notes
    // (which notes are being passed in).

    this.roll.push({
      time: new Date() - this.currentTime,
      notes: object
    });
  };

  Track.prototype.stopRecording = function () {
    this.addNotes([]);
  };

  Track.prototype.play = function () {
    var playBackStartTime = new Date();
    this.roll.forEach(function(noteObject) {
      if (noteObject.notes !== undefined) {
        var newNote = new Note(TONES[noteObject.notes]);
        var intervalId;
        var currentDate = new Date();
        while (currentDate - playBackStartTime < noteObject.time ) {
          intervalId = setInterval(newNote.start(), 100);
          currentDate = new Date();
          console.log(newNote);
        }
        clearInterval(intervalId);
        newNote.stop();
      }
    });

  };

}(this));
