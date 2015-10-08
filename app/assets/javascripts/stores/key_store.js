(function(root) {
  'use strict';
  var _data = [];
  var CHANGE_EVENT = "CHANGE";
  var addKey = function (key) {
    if (!_data.includes(key)){
      _data.push(key);
    }
    KeyStore.changed();
  };

  var removeKey = function (key) {
    _data.splice(KeyStore.all().indexOf(key), 1);
    KeyStore.changed();
  };

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _data.slice();
    },
    addChangeHandler: function(handler) {
      KeyStore.on(CHANGE_EVENT, handler);
    },
    removeChangeHandler: function(handler) {
      KeyStore.removeListener(CHANGE_EVENT, handler);
    },
    changed: function() {
      KeyStore.emit(CHANGE_EVENT);
    },
    dispatcherID: AppDispatcher.register(function (action) {
      switch (action.actionType){
        case OrganConstants.ADD_KEY:
          addKey(action.noteName);
          break;
        case OrganConstants.REMOVE_KEY:
          removeKey(action.noteName);
          break;
      }
    })

  });

}(this));
