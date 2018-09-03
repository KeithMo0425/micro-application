import Cookies from 'js-cookie';
import { PROJECT_NAME } from '@/config';

const cookies = {};

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = (name = 'default', value = '', cookieSetting = {}) => {
  const currentCookieSetting = {
    expires: 1,
  };
  Object.assign(currentCookieSetting, cookieSetting);
  Cookies.set(`${PROJECT_NAME}-${name}`, value, currentCookieSetting);
};

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = (name = 'default') => Cookies.get(`${PROJECT_NAME}-${name}`);

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = () => Cookies.get();

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = (name = 'default') => Cookies.remove(`${PROJECT_NAME}-${name}`);

export default cookies;
