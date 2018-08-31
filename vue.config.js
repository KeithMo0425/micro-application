// vue.config.js
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
    electronBuilder: {
      externals: ['ffi'],
      builderOptions: {
        appId: 'net.youcaihua.cashier',
        // artifactName: 'ych-cashier',
        asar: false,
      },
      chainWebpackMainProcess: config => config,
      chainWebpackRendererProcess: (config) => {
        // Chain webpack config for electron renderer process only
        // The following example will set IS_ELECTRON to true in your app
        config.plugin('define').tap((args) => {
          args[0].IS_ELECTRON = true;
          return args;
        });
        // If you do not return the config property, your app may break!
        return config;
      },
      // Use this to change the entrypoint of your app's main process
      mainProcessFile: 'src/background.js',
    },
  },
};
