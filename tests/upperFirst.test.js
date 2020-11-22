import upperFirst from "../src/upperFirst";

describe("Test upperFirst", () => {

  test("with uppercase string", () => {
    expect(upperFirst("TEXT")).toBe("TEXT");
  });

  test("with lowercase string", () => {
    expect(upperFirst("test")).toBe("Test");
  });
});
