import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrypt, encrypt } from "./changeText";

export function Changer() {
  const text = useSelector((state) => state.changer.text);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrypt())}>Decrypt message</button>
      <button onClick={() => dispatch(encrypt())}>Encrypt message</button>
      <span>{text}</span>
    </div>
  );
}
