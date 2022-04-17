import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "./hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../slices/counter/counterSlice";
import styles from "../slices/counter/Counter.module.css";

import tw, { styled, theme, css } from "twin.macro";

export const MoviesTitle = styled.h2(({ iscolor }) => [ //twin.macro works in js
  tw`hover:text-black`,
  iscolor ? tw`text-blue-700` : tw`text-red-700`,
]);

export const TestTitle = styled(MoviesTitle)`
  ${tw`hover:bg-black hover:text-white`}
`;
export const StyledButton = styled.button(({ isSecondary }) => [
  // updated
  tw`py-3 px-8 uppercase rounded border duration-200`,

  isSecondary && tw`hover:text-black hover:bg-red-800`, // new
]);
export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <MoviesTitle iscolor="text-red-800">hello</MoviesTitle>
        <TestTitle>hello</TestTitle>
        <StyledButton isSecondary>Hello World!</StyledButton>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
