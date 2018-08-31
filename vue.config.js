module.exports = {
  lintOnSave: true,
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {
      // fix: true, // boolean (default: true)
      // files: '', // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
      // // See https://stylelint.io/developer-guide/formatters/
      // formatter: () => {}, // function (default: require('stylelint-codeframe-formatter'))
    },
  },
};
