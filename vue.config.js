// vue.config.js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      externals: ['ffi'],
      builderOptions: {
        appId: 'net.youcaihua.cashier',
        artifactName: 'ych-cashier',
        asar: {
          asarUnpack: 'foo/*.js',
        },
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
