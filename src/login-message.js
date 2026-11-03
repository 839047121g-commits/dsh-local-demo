/**
 * 将接口错误码转换为用户可见的登录失败提示。
 * 当前基线尚未区分错误类型，全部显示通用提示。
 *
 * @param {string | undefined | null} errorCode 接口返回的错误码。
 * @returns {string} 用户可见的提示文案。
 */
export function getLoginFailureMessage(errorCode) {
  return "登录失败";
}
