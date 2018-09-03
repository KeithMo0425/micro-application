export const PROJECT_NAME = 'ych-pro-cashier';

export const NODE_ENV = process.env.NODE_ENV || 'production';

// 强制所有请求使用mock
export const AJAX_MOCK_ENABLE = false;

// 路由默认配置，路由表并不从此注入
export const ROUTER_DEFAULT_CONFIG = {
  mode: 'history',
  base: '',
  // waitForData: true,
  // transitionOnLoad: true
};

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {},
};

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== 'production',
};

// CONST 默认配置
export const CONST_DEFAULT_CONFIG = {
  sep: '/',
};

// API 默认配置
export const API_DEFAULT_CONFIG = {
  mockBaseURL: 'http://neidebug1.youcaihua.net:8081/nei/mock',
  mock: true,
  debug: true,
  sep: '/',
};

// 系统
export const SYSTEM_LOG_ENABLE = true;

// 开启请求参数打印
export const CONSOLE_REQUEST_ENABLE = true;
// 开启响应参数打印
export const CONSOLE_RESPONSE_ENABLE = true;
