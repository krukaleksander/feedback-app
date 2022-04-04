import { Box, Button, Input, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { green, red } from '@mui/material/colors';

import { IResponse } from '../interface/IResponse';
import { MockForm } from '../test/mockSendForm';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [responseData, setResponseData] = useState<IResponse | null>(null);
  const [isSent, setIsSent] = useState<boolean>(false);

  const sendForm = async () => {
    const res = await new MockForm(email).send({ body: { email: email } });
    setResponseData(res);
    console.log(res);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendForm();
    }
  };

  const onSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>,
  ) => {
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
        <>
          <Typography sx={{ my: 3 }} component="h1" variant="h3">
            Eager to share your views about the workshops?
          </Typography>
          <Typography sx={{ mx: 2 }} component="h2" variant="h6">
            Provide your email in the field below to receive a short survey:
          </Typography>
          <form
            className={styles.form}
            method="POST"
            onSubmit={(e) => onSubmit(e)}
          >
            <Input
              sx={{
                my: 2,
                textAlign: 'center',
                height: '3rem',
                minWidth: '20rem',
                borderRadius: '0.5rem',
              }}
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
            <Button size="large" onClick={(e) => onSubmit(e)}>
              SUBMIT
            </Button>
          </form>
          <Box sx={{ textAlign: 'center' }}>
            {responseData?.statusCode === 200 && (
              <Typography variant="h6" sx={{ color: green[500] }}>
                {responseData?.msg || ''}
              </Typography>
            )}
            {responseData?.statusCode === 500 && (
              <Typography variant="h6" sx={{ color: red[500] }}>
                {responseData?.msg || ''}
              </Typography>
            )}
          </Box>
        </>
      </main>
    </div>
  );
};

export default Home;
