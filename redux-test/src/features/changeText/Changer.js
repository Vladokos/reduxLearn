import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./changeText";

export function Changer() {
  const text = useSelector((state) => state.counter.text);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(change())}>View text</button>
      <span>{text}</span>
    </div>
  );
}
