import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
console.log(publicRuntimeConfig)
const config = require('./' + (publicRuntimeConfig.NODE_ENV || "development") + '.js');
export default config
