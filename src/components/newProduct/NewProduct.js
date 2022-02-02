import SaveIcon from '@mui/icons-material/Save';
import { Checkbox, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Layout } from 'components';
import { URL } from 'config/url';
import React from 'react';

const NewProduct = () => {
  const [product, setProduct] = React.useState({
    name: '',
    category: '',
    price: 0,
    priceS: null,
    priceM: null,
    priceL: null,
    procentege: 0,
    priceSizes: [],
    description: '',
    story: '',
    sell: false,
    image1: null,
    image2: null,
    formData: new FormData(),
    loading: false,
  });
  const categories = [
    { name: 'Lorem Ipsum', id: 1 },
    { name: 'Laudantium veritatis', id: 2 },
    { name: 'Quidem nostrum', id: 3 },
  ];
  const {
    name,
    category,
    price,
    procentege,
    priceS,
    priceM,
    priceL,
    description,
    story,
    sell,
    formData,
    loading,
  } = product;

  const handleChange = (props, event) => {
    const value =
      event.target.type !== 'file'
        ? event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
        : props === 'image1'
        ? event.target.files[0]
        : event.target.files;
    setProduct({ ...product, [props]: value });
    formData.set(props, value);
  };

  const onSubmit = async () => {
    formData.set('priceSizes', [priceS, priceM, priceL]);
    setProduct({ ...product, loading: true });
    try {
      const res = await axios.post(`${URL}/products/add/azgarden`, formData);
      setProduct({ ...product, loading: false });
      console.log(res.data);
      alert('Success');
    } catch (e) {
      setProduct({ ...product, loading: false });
    }
  };

  return (
    <Layout>
      <Typography
        textAlign='center'
        fontWeight={700}
        variant='h4'
        gutterBottom
        sx={{ py: 4 }}
      >
        Create New Product
      </Typography>

      <Stack spacing={2}>
        <TextField
          fullWidth
          value={name}
          label='Product Name'
          onChange={(e) => handleChange('name', e)}
          variant='outlined'
        />
        <FormControl fullWidth>
          <InputLabel id='product-category'>Product Category</InputLabel>
          <Select
            labelId='product-category'
            id='product-category'
            value={category}
            label='Product Category'
            onChange={(e) => handleChange('category', e)}
          >
            {categories.map(({ id, name }) => (
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Stack direction='row' spacing={2}>
          <TextField
            fullWidth
            label='Product Price'
            variant='outlined'
            onChange={(e) => handleChange('price', e)}
            type='number'
            value={price}
            sx={{ flex: 2 }}
          />
          <TextField
            fullWidth
            label='Percentage'
            variant='outlined'
            onChange={(e) => handleChange('procentege', e)}
            type='number'
            value={procentege}
            sx={{ flex: 1 }}
          />
        </Stack>
        <Stack direction='row' spacing={2}>
          <TextField
            fullWidth
            label='Product Price - S'
            variant='outlined'
            onChange={(e) => handleChange('priceS', e)}
            type='number'
            value={priceS}
          />
          <TextField
            fullWidth
            label='Product Price - M'
            variant='outlined'
            onChange={(e) => handleChange('priceM', e)}
            type='number'
            value={priceM}
          />
          <TextField
            fullWidth
            label='Product Price - L'
            variant='outlined'
            onChange={(e) => handleChange('priceL', e)}
            type='number'
            value={priceL}
          />
        </Stack>
        <TextField
          fullWidth
          label='Product Description'
          variant='outlined'
          onChange={(e) => handleChange('description', e)}
          multiline
          value={description}
          rows={3}
        />
        <TextField
          fullWidth
          label='Product Story'
          variant='outlined'
          onChange={(e) => handleChange('story', e)}
          multiline
          value={story}
          rows={6}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sell}
              onChange={(e) => handleChange('sell', e)}
              name='gilad'
            />
          }
          label='Sell'
        />
        <input type='file' onChange={(e) => handleChange('image1', e)} />
        <input
          type='file'
          multiple
          onChange={(e) => handleChange('image2', e)}
        />
        <Box>
          <Button
            variant='contained'
            onClick={onSubmit}
            sx={{ px: 4, py: 2 }}
            startIcon={<SaveIcon />}
          >
            {loading ? 'Loading...' : 'Save'}
          </Button>
        </Box>
      </Stack>
    </Layout>
  );
};

export default NewProduct;
