import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import {NewProduct as Component, Layout} from 'components'

const NewProduct = () => {
  return (
    <Layout>
      <Container>
        <Typography variant='h2' sx={{ py: 4 }}>
          New Product
        </Typography>
        <Divider/>
        <Component/>
      </Container>
    </Layout>
  )
}

export default NewProduct