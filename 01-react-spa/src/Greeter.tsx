import { suspend } from "suspend-react";
import { fetchDataFromApi, useApiData } from "./useApiData.ts";
import styles from "./Greeter.module.css";

export function Greeter() {
  // console.log("rendering Greeter ...");
  
  // fetching with effect and state
  const messageText = useApiData();

  // fetching with suspense
  // const messageText = suspend(fetchDataFromApi);

  console.log("rendering Greeter with messageText", messageText);
  return (
    <div className={styles.wrapper}>
      <h2>Greeter Component</h2>
      <h1>{messageText}</h1>
    </div>
  );
}
