import ConfigQa from './qa';
import ConfigDev from './dev';
import ConfigProd from './prod';
import ConfigStaging from './staging';

const ENV_MAP = {
  qa: ConfigQa,
  dev: ConfigDev,
  prod: ConfigProd,
  staging: ConfigStaging,
};

const { env } = process;

export default ENV_MAP[env.toLocaleLowerCase()];
