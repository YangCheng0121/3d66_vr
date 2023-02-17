import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const config = require('./' + (publicRuntimeConfig.NODE_ENV || "development") + '.js');
export default config
