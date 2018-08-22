import { CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE } from '../index';
import { systemMessageHandler } from './system';

// 请求成功
export function requestSuccessFunc(requestObj) {
  if (CONSOLE_REQUEST_ENABLE) {
    console.info('发送请求前：', `url: ${requestObj.url}`, requestObj);
  }
  // 自定义请求拦截逻辑，可以处理权限，请求发送监控等
  // ...
  return requestObj;
}

// 请求失败
export function requestFailFunc(requestError) {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  // ...

  return Promise.reject(requestError);
}

// 响应成功
export function responseSuccessFunc(responseObj) {
  if (CONSOLE_RESPONSE_ENABLE) {
    console.info('响应成功后：', `url: ${responseObj.config.url}`, responseObj);
  }
  // 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
  const resData = responseObj.data;
  const { Data, ResponseStatus } = resData;
  const { ErrorCode, Message } = ResponseStatus;

  switch (Number(ErrorCode)) {
    case 0: // 如果业务成功，直接进成功回调
      return Promise.resolve(Data);
    default:
      // 业务中还会有一些特殊 code 逻辑，我们可以在这里做统一处理，也可以下方它们到业务层
      if (!responseObj.config.noShowDefaultError) {
        systemMessageHandler(`${Message}(${ErrorCode})`);
      }
      return Promise.reject(resData);
  }
}

// 处理http错误
function handleHttpError({ response }) {
  let errorMsg;
  const { status } = response;
  const responseData = response.data.ResponseStatus;

  if (status >= 500) {
    errorMsg = (responseData && responseData.Message) || '服务器异常';
  } else if (status >= 300) {
    // http 请求超时
    if (status === 408) {
      errorMsg = '请求超时！';
    } else if (status === 401) {
      errorMsg = '授权失败！';
    } else {
      errorMsg = '请求错误！';
    }
  }

  return errorMsg;
}

// 响应失败
export function responseFailFunc(responseError) {
  const { code, response, message } = responseError;
  // 发送请求后，服务端返回的响应码不是 2xx;
  if (response) {
    handleHttpError(responseError);
  } else if (code === 'ECONNABORTED') {
    systemMessageHandler('请求超时，请重试！');
  } else {
    const errorMap = {
      'Network Error': '网络异常，请查看网络设置！',
    };
    systemMessageHandler(errorMap[message] || message);
  }

  return Promise.reject(responseError);
}
