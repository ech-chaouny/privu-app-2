const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (() => {
  const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

  const { transformer, resolver } = config;

  // Add support for SVG files
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  // Apply NativeWind config
  return withNativeWind(config, { input: "./app/globals.css" });
})();
