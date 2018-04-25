/**
 * The default dev configuration if no custom config js file is provided
 */
module.exports = {
  PORT: 3000,
  NODE_ENV: 'development',
  NODE_PROXY: true,
  PROXY_DEBUG_LEVEL: 0,
  LOG_PATH: '',
  STATIC_ENDPOINT: '',
  STATIC_PREFIX: '',
  PREFIX_TRAILING_SLASH: true,
  APP_PREFIX: '',
  CUSTOM_API_PREFIX: true,
  ENABLE_HMR: false,
  ENABLE_SSR: false,
  API_ENDPOINTS: {
    defaultPrefix: '/api-proxy',
    '/api-proxy': 'http://127.0.0.1:3001',
    '/api-proxy-2': 'http://127.0.0.1:3002',
  },
};
