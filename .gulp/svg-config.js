module.exports = prefix => ({
  plugins: [{
      js2svg: {
        pretty: true
      }
    },
    {
      cleanupIDs: {
        prefix: prefix + '-',
        minify: true
      }
    },
    {
      cleanupNumericValues: {
        floatPrecision: 2
      }
    },
    {
      convertColors: {
        names2hex: true,
        rgb2hex: true
      }
    },
    { removeViewBox: false },
    { removeMetadata: false },
    { removeStyleElement: true },
    { removeTitle: true },
    { removeUselessStrokeAndFill: true }
  ]
});