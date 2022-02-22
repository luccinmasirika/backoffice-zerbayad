import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {ProductsList, Layout} from 'components'

const Products = () => {
  return (
    <Layout>
      <Container>
        <Typography variant='h2' sx={{ py: 4 }}>
          Products
        </Typography>
        <ProductsList/>
      </Container>
    </Layout>
  )
}

export default Products