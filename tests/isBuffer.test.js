import isBuffer from "../src/isBuffer"

describe("Test isBuffer", () => {

  test("with buffer", () => {
    expect(isBuffer(new Buffer(2))).toBe(true);
  });

  test("incorrect value", () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false);
  });

  test("without value", () => {
    expect(isBuffer(null)).toBe(false);
  });

});
