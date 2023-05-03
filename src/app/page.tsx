"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className={styles.main}>
      <button
        className={styles.button}
        onClick={async () => {
          setIsLoading(true);
          const response = await fetch("/api/checkout", {
            method: "POST",
          });

          if (response.redirected) {
            window.location.href = response.url;
            setIsLoading(false);
          }
        }}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Checkout"}
      </button>
    </main>
  );
}
