import isSymbol from "../src/isSymbol";

describe("Test isSymbol", () => {

  test("with symbol", () => {
    expect(isSymbol(Symbol("foo"))).toBe(true);
  });

  test("with object", () => {
    expect(isSymbol({"abc": 1})).toBe(false);
  });

  test("with string", () => {
    expect(isSymbol("abc")).toBe(false);
  });

  test("without value parameter", () => {
    expect(isSymbol(null)).toBe(false);
  });
});
