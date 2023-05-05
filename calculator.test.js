import { add, subtract, divide, multipy } from "./calculator";

test("add 1 + 2 equals 3", () => {
  expect(add(1, 2)).toBe(3);
});
test("add 176 + 23 equals 199", () => {
  expect(add(176, 23)).toBe(199);
});
test("add 56.9 + 135.7 equals 192.722", () => {
  expect(add(56.9, 135.7)).toBe(192.6);
});

test("subtract 7 - 5 equals 2", () => {
  expect(subtract(7, 5)).toBe(2);
});
test("subtract 539 - 46 equals 493", () => {
  expect(subtract(539, 46)).toBe(493);
});
test("subtract 56 - 73 equals -17", () => {
  expect(subtract(56, 73)).toBe(-17);
});
test("subtract 73 - 56 equals 17", () => {
  expect(subtract(73, 56)).toBe(17);
});

test("divide 12 / 2 equals 6", () => {
  expect(divide(12, 2)).toBe(6);
});

test("divide 786 / 6 equals 131", () => {
  expect(divide(786, 6)).toBe(131);
});

test("divide 367 / 8 equals 45.875", () => {
  expect(divide(367, 8)).toBe(45.875);
});

test("multiply 4 * 5 equals 20", () => {
  expect(multipy(4, 5)).toBe(20);
});
test("multiply 673 * 23 equals 15479", () => {
  expect(multipy(673, 23)).toBe(15479);
});
test("multiply 42.678 / 3.5 equals 149.373", () => {
  expect(multipy(42.678, 3.5)).toBe(149.373);
});
