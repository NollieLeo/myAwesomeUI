module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    [
      "import", {
        "libraryName": 'awesome-ui',
        "libraryDirectory": "lib",
        "style": true
      },
      "awesome-ui",
    ]
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
