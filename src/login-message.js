/**
 * 将接口错误码转换为用户可见的登录失败提示。
 *
 * 已知错误码展示对应的具体原因，其余情况统一显示通用提示。
 *
 * @param {string | undefined | null} errorCode 接口返回的错误码。
 * @returns {string} 用户可见的提示文案。
 */
export function getLoginFailureMessage(errorCode) {
  switch (errorCode) {
    case "PASSWORD_INVALID":
      return "请检查账号或密码";
    case "SERVICE_UNAVAILABLE":
      return "服务暂不可用，请稍后再试";
    case "NETWORK_TIMEOUT":
      return "网络连接超时，请重试";
    default:
      return "登录失败";
  }
}
