import { envDev, envProd } from "./env";

let config = {};

if (process.env.NODE_ENV == "production") {
  config = envProd;
} else {
  config = envDev;
}


export default config;
