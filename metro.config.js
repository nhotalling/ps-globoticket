/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * nh: added resolver and sourceExts but it may not have been necessary
 *
 * @format
 */

module.exports = {
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx'],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
