import { expect } from "jsr:@std/expect";
import { Board } from "./board.js";

Deno.test("Valid Move", () => {
  const board = new Board();
  const moves = [...board.validMoves(1)];
  const [row, col] = moves[0];
  expect(board.isValidMove(1, row, col)).toBe(true);
});

Deno.test("Field already used", () => {
  const board = new Board();
  expect(board.isValidMove(1, 3, 3)).toBe(false); 
});

Deno.test("impossible Koordinates", () => {
  const board = new Board();
  expect(board.isValidMove(1, 0, 8)).toBe(false);
});
