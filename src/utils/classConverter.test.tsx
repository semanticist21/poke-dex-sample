import { FontWeight } from "../data/enums";
import strsToClass from "./classConverter";

test("1. Class name conversion unit test", () => {
  expect(strsToClass("flex", "justify-start", "items-center")).toBe(
    "flex justify-start items-center"
  );
});

test("2. Concatenated unit test", () => {
  expect(strsToClass("flex justify-start items-center")).toBe(
    "flex justify-start items-center"
  );
});

test("3. Enum Test", () => {
  expect(strsToClass("flex", FontWeight.BLACK)).toBe(
    "flex font-black"
  );
});
