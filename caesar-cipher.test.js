import { caesarCipher } from "./caesar-cipher";

test("Test short message with shift 1", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("Test long message with shift 2", () => {
  expect(
    caesarCipher("Speak softly and carry a big stick - Theodore Roosevelt", 3)
  ).toBe("Vshdn vriwob dqg fduub d elj vwlfn - Wkhrgruh Urrvhyhow");
});

test("Test long message with punctuation, shift 6", () => {
  expect(
    caesarCipher(
      "How much wood would a woodchuck chuck, if a woodchuck could chuck wood?",
      6
    )
  ).toBe(
    "Nuc sain cuuj cuarj g cuujinaiq inaiq, ol g cuujinaiq iuarj inaiq cuuj?"
  );
});

test("Test wrapping from a to z", () => {
  expect(caesarCipher("The quick brown fox jumps over the lazy dog", 31)).toBe(
    "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl"
  );
});
