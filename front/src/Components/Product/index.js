import React from 'react';
import "./style.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


const Product = () => {
    const [value, setValue] = React.useState(2);
  return (
    <div className='productThumb'>
        <div className='imgWrapper'>
            <img src='https://s7ap1.scene7.com/is/image/itcportalprod/ProductCard%20Hashtags_Default_Mobile_968x968_4x?fmt=webp-alpha' 
            style={{height:'350px',width:'350px'}}/>
        </div>

        <div className='info'>
            <span className='d-block catName'> Snack</span>
            <h4 className='title'><Link>Bingo Spicy Masala</Link></h4>

            <div>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                    <Rating
                        name="simple-controlled"
                        value={value} 
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />               
                </Box>
            </div>

            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center'>
                    <span className='price'>₹20 </span> <span className='oldPrice'>₹30</span>
                </div>
                <Button className='bg-g ms-auto'>Add</Button>
            </div>
        </div>
    </div>
  )
}

export default Product;