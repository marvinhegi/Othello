import  expect  from "jsr:@std/expect";
import { solve } from "./quadratic_equation.ts";



// d > 0: zwei Loesungen
Deno.test("zwei Loesungen", () => {
  const result = solve(1, 0, -1);
  expect(result.length).toBe(2);
  expect(result).toContain(1);
  expect(result).toContain(-1);
});

// d == 0: eine Loesung
Deno.test("eine Loesung", () => {
  const result = solve(1, 2, 1);
  expect(result).toEqual([-1]);
});

// d < 0: keine Loesung
Deno.test("keine Loesung", () => {
  const result = solve(1, 0, 1);
  expect(result).toEqual([]);
});
