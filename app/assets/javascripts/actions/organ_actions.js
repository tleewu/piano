var OrganActions = {
  addKey: function (key) {
    AppDispatcher.dispatch({
      actionType: OrganConstants.ADD_KEY,
      noteName: KeyConstants[key]
    });
  },
  removeKey: function (key) {
    AppDispatcher.dispatch({
      actionType: OrganConstants.REMOVE_KEY,
      noteName: KeyConstants[key]
    });
  }
};
