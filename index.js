module.exports = function (p) {
  var Plugin = p.Plugin;

  return new Plugin('fuck-jsx', {
    JSXElement: function () {
      throw new Error('fuck jsx bruh');
    }
  });
};
