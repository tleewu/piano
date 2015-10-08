Array.prototype.includes = function (el) {
  var isPresent = false;
  this.forEach(function(currentEl) {
    if (el === currentEl) {
      isPresent = true;
    }
  });

  return isPresent;
};
