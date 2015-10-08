$(document).keydown(function(e){
  e.preventDefault();
  OrganActions.addKey(String.fromCharCode(e.keyCode));
});

$(document).keyup(function(e){
  e.preventDefault();
  OrganActions.removeKey(String.fromCharCode(e.keyCode));
})
