import { reverseString } from "./reverse-string";

test("Reverses hello to be olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Reverses capitals correctly", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Reverses multiple words", () => {
  expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
});
