var Key = React.createClass({
  // this.props.noteName
  getInitialState: function() {
    return {played: false};
  },
  _keyChanged: function() {
    if (KeyStore.all().includes(this.noteKey)) {
      this.note.start();
      this.setState({played: true});
    } else {
      this.note.stop();
      this.setState({played: false});
    }
  },
  componentDidMount: function() {
    this.note = new Note(TONES[this.props.noteName]);
    this.noteKey = this.props.noteName;
    KeyStore.addChangeHandler(this._keyChanged);
  },
  render: function () {
    var isPlaying = this.state.played ? "played" : "stopped";
    var keyType = "key";
    if (this.props.noteName.match("sharp")) {
      keyType += " sharp";
    }
    return (
      <div className={keyType} id={isPlaying}>
        {this.props.noteName}
      </div>
    );
  }
});
