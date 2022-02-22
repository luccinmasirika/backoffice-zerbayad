import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {Order as Component, Layout} from 'components'

const Order = () => {
  return (
    <Layout>
      <Container>
        <Typography variant='h2' sx={{ py: 4 }}>
          Orders
        </Typography>
        <Component/>
      </Container>
    </Layout>
  )
}

export default Order