import { capitalize } from "./capitalize";

test("capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize only first letter of all caps", () => {
  expect(capitalize("TEST")).toBe("Test");
});
test("capitalize first letter of multiple words", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
