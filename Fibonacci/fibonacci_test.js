import { expect } from "jsr:@std/expect";
import { fibonacci } from "./fibonacci.js";

Deno.test("test first Fibonacci number", () => {
  expect(fibonacci(0)).toBe(1);
});

Deno.test("test second Fibonacci number", () => {
  expect(fibonacci(1)).toBe(1);
});



Deno.test("falscher Typ", () => {
  expect(fibonacci("3")).toBeUndefined();
});

Deno.test("negative Zahl", () => {
  expect(fibonacci(-1)).toBeUndefined();
});

Deno.test("gültiger Wert > 1", () => {
  expect(fibonacci(4)).toBe(5);
});
