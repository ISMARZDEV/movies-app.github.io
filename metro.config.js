// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, { input: "./app/global.css" });


const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// 1️⃣ Agregar soporte para fuentes (.ttf) y otros assets comunes
config.resolver.assetExts.push(
  "ttf",   // fuentes
  "otf",   // otras fuentes
  "png",   // imágenes
  "jpg",
  "jpeg",
  "gif",
  "svg",
  "mp4",   // videos
  "mp3"    // audios
);

// 2️⃣ (Opcional) Si necesitas más extensiones personalizadas
// config.resolver.assetExts.push('db', 'json');

// 3️⃣ Exportar la configuración con NativeWind
module.exports = withNativeWind(config, { input: "./app/global.css" });
