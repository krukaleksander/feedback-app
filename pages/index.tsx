import { Input } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>("anna.paulina.karpiuk@gmail.com");

  const sendForm = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    const response = await fetch("/api/mail", requestOptions);
    const data = await response.json();
    console.log(data);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendForm();
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    sendForm();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <form method="POST" onSubmit={(e) => onSubmit(e)}>
          <Input
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
              onEnterPress(e)
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInput(e)
            }
            id="email"
            value={email}
            type="text"
            placeholder="Enter your email..."
          ></Input>
        </form>
      </main>
    </div>
  );
};

export default Home;
