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











Deno.test("validMoves wirft bei ungültigem Spieler", () => {
  const board = new Board();
  let errorThrown = false;
  try {
    board.validMoves(3);
  } catch (e) {
    errorThrown = e instanceof RangeError;
  }
  expect(errorThrown).toBe(true);
});


Deno.test("Randfeld leer, kein gültiger Zug", () => {
  const board = new Board();
  expect(board.isValidMove(1, 0, 0)).toBe(false);
});


Deno.test("play nimmt gegnerische Steine", () => {
  const board = new Board();
  const newBoard = board.play(2, 3, 1);
  expect(newBoard.fields[3][3]).toBe(1);
});