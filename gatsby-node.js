const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'awesome-ui/lib': path.resolve(__dirname, '../components/'),
        'awesome-ui/esm': path.resolve(__dirname, '../components/'),
        'awesome-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
