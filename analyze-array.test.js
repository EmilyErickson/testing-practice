import { analyzeArray } from "./analyze-array";

test("object analysis of array [1, 2, 3]", () => {
  expect(analyzeArray([1, 2, 3])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("object analysis of array [9, 8, 7, 6, 5]", () => {
  expect(analyzeArray([9, 8, 7, 6, 5])).toStrictEqual({
    average: 7,
    min: 5,
    max: 9,
    length: 5,
  });
});

test("object analysis of array [1, 2, 3]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
