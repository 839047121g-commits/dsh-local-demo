import assert from "node:assert/strict";
import test from "node:test";
import { getLoginFailureMessage } from "../src/login-message.js";

test("PASSWORD_INVALID 提示检查账号或密码", () => {
  assert.equal(getLoginFailureMessage("PASSWORD_INVALID"), "请检查账号或密码");
});

test("SERVICE_UNAVAILABLE 提示服务暂不可用", () => {
  assert.equal(
    getLoginFailureMessage("SERVICE_UNAVAILABLE"),
    "服务暂不可用，请稍后再试",
  );
});

test("其他已知错误码保留通用提示", () => {
  assert.equal(getLoginFailureMessage("NETWORK_TIMEOUT"), "登录失败");
});

test("未知错误码保留通用提示", () => {
  assert.equal(getLoginFailureMessage("UNKNOWN_ERROR"), "登录失败");
});

test("接口未提供错误码时保留通用提示", async (t) => {
  for (const code of [undefined, null, ""]) {
    await t.test(String(code), () => {
      assert.equal(getLoginFailureMessage(code), "登录失败");
    });
  }
});
