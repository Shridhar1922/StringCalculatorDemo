import { add } from "./Calculator";

describe("String Calculator - add()", () => {

  // Input: “”, Output: 0
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  // Input: “1”, Output: 1
  test("should return number for single number", () => {
    expect(add("1")).toBe(1);
  });

  // Input: “1,5”, Output: 6
  test("should return sum for two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  // for multiple numbers
  test("should handle multiple numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  // "1\n2,3" should return 6
  test("should handle new lines as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // "//;\n1;2" where the delimiter is ";" should return 3.
  test("should support custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // negative numbers not allowed 
   test("should throw error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
  });

})