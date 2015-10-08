var Organ = React.createClass({
  render: function() {
    var keys = Object.keys(TONES);
    return (
      <div>
        {
          keys.map(function(key) {
            return <Key noteName={key}/>
          })
        }
        <Recorder />
      </div>
    );
  }
});
