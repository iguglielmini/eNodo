// const env = require('./env');
const ConfigDev = require('./config-envs/config-dev');
const ConfigQa = require('./config-envs/config-qa');
const ConfigStaging = require('./config-envs/config-staging');
const ConfigProd = require('./config-envs/config-prod');

const ENV_MAP = {
  dev: ConfigDev,
  qa: ConfigQa,
  staging: ConfigStaging,
  prod: ConfigProd
};

module.exports = ENV_MAP.dev;
