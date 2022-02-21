import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Layout from '../layout';

const P404 = () => {
  return (
    <Layout>
      <Container>
        <Stack
          sx={{ width: 1, py: 16 }}
          justifyContent='center'
          alignItems='center'
        >
          <Typography variant='h1'>Oups! Page not found 😥</Typography>
        </Stack>
      </Container>
    </Layout>
  );
};

export default P404;
