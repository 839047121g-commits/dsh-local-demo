import assert from "node:assert/strict";
import test from "node:test";
import { getLoginFailureMessage } from "../src/login-message.js";

test("当前基线：已知错误码统一显示通用提示", async (t) => {
  for (const code of ["PASSWORD_INVALID", "SERVICE_UNAVAILABLE", "NETWORK_TIMEOUT"]) {
    await t.test(code, () => {
      assert.equal(getLoginFailureMessage(code), "登录失败");
    });
  }
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
