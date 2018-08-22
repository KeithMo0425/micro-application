export function routerBeforeFunc(to, from, next) {
  // 这里可以做页面拦截，很多后台系统中也非常喜欢在这里面做权限处理

  next();
}

export function routerAfterFunc(to, from) {
  console.log(to, from);
}
