"use client";

import { updateCountServerWithValue } from "./serverData";
import styles from "./Child.module.css";
type ChildProps = { updateFn: () => Promise<void> };

export default function Child({updateFn}: ChildProps) {
  async function handleClick() {
    console.log("handling click ...");
    updateFn();
  }

  console.log("rendering Child");
  return (
    <div className={styles.wrapper}>
      <h2 style={{ margin: 0 }}>Display of Child.</h2>
      <p style={{ marginTop: 0 }}>Rendering on client</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
