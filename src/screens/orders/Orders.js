import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {Orders as Component, Layout} from 'components'

const Orders = () => {
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

export default Orders