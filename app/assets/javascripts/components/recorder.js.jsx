var Recorder = React.createClass({
  getInitialState: function () {
    return ({isRecording: false, track: new Track({}) });
  },
  _beginRecording: function () {
    if (this.state.isRecording){
      var that = this.state.track;
      KeyStore.all().forEach (function(el){
        that.addNotes(el);
        console.log(that.roll);
      });
    }
  },
  componentDidMount: function () {
    KeyStore.addChangeHandler(this._beginRecording);
  },
  startRecording: function() {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },
  stopRecording: function() {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
  },
  playRecording: function() {
    if (!this.state.isRecording) {
      this.state.track.play();
    }
  },
  render: function () {
    return (
      <div>
        <button onClick={this.startRecording}>
          Start Recording
        </button>
        <button onClick={this.stopRecording}>
          Stop Recording
        </button>
        <button onClick={this.playRecording}>
          Play Recording
        </button>
      </div>
    );
  }
});
