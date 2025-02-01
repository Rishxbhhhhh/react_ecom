import React, { useEffect, useState } from 'react';
import '../Header/Header.css';
import axios from 'axios';
import Select from '../SelectDrop/Select';

import Logo from '../../Assests/images/logo.png';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import compareIcon from '../../Assests/images/recycle.png'
import heartIcon from '../../Assests/images/heart.png'
import cartIcon from '../../Assests/images/online-shopping.png'
import userIcon from '../../Assests/images/user.png'

import Nav from './Nav/Nav'
import { Link } from 'react-router-dom';

const Header = () => {

    const [isCount,setisCount] = useState(0);
    const [isCountry,setisCountry] = useState([]);
    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    
    const [categories,setcategories] = useState([
        'Milk and Dairies',
        'Baking material',
        'Clothing & beauty',
        'Dals of the Day',
        'Fast food',
        'Fresh Fruits',
        'Fresh Seafood',
        'Milks and Dairies',
        'Uncategorized',
        'Vegetables',
        'Wines & Drinks',
    ]);

    const handleCLick = () => {
        setisCount(isCount => isCount + 1);
        if(isCount === 0){
            
        }
    }

    useEffect(()=>{
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    },[]);

    const getCountry= async (url)=>{
        try{
            await axios.get(url)
            .then((res) =>{
                if(res!==null){
                    console.log(res.data.data);
                    const countryNames = res?.data?.data?.map((item)=>{
                        return item.country;
                    })
                    setisCountry(countryNames);
                }
            })
        }catch(error){
            console.log(error.message);
        }
    }

    return(
        <>
            <header style={{width:'1auto', textWrap:'nowrap',}}>
                <div className='container-fluid'>
                    <div className='row'  style={{height:'83px', textWrap:'nowrap', display:'flex'}}>
                        <div className='col-sm-2' >
                        <Link to={"/"}>
                            <img style={{width:"150px", height:'50px', marginLeft:'30px', cursor:'pointer'}} alt='home' src={Logo}/>
                        </Link>
                           
                        </div>

                        {/*headerSearch start here */}
                        <div className='col-sm-5'>
                            <div className= 'headerSearch d-flex align-items-center'>
                                <Select data={categories} placeholder={'All Categories'} Icon={false}/>

                                <div className='search' >
                                    <input type='text' placeholder='Search for items...'></input>
                                    <SearchIcon className="searchIcon cursor"/>
                                </div>
                            </div>
                        </div>
                        {/*headerSearch end here */}

                        <div className='col-sm-5 d-flex' style={{height:'73px', marginLeft:'50px'}}>
                                <div className='w-100 countryWrapper' style={{paddingBottom:'16px'}}>
                                    <Select data={isCountry} placeholder={'Your Location'} Icon=
                                    {<FmdGoodOutlinedIcon className='location'/>}/>
                                </div>
                            <div className='ml-auto d-flex align-items-center' style={{marginLeft:'0px'}}>

                                <ul className=' d-flex list list-inline mb-0 headerTabs' style={{height:'52px'}} >
                                    <li className='list-inline-item'>
                                        <span className='d-flex'>
                                            <img src={compareIcon} style={{width:'27px'}}/>
                                            <span className='badge bg-success rounded-circle badge-position'>0</span>
                                            Compare
                                        </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span  onClick={() => handleCLick()} className='d-flex'>
                                            <img src={heartIcon} style={{width:'27px'}}/>
                                            <span className='badge bg-success rounded-circle badge-position'z>{isCount  }</span>
                                            Wishlist
                                        </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span className='d-flex'>
                                            <img src={cartIcon} style={{width:'27px'}}/>
                                            <span className='badge bg-success rounded-circle badge-position '>3</span>
                                            Cart
                                        </span>
                                    </li>

                                    <li className='list-inline-item' style={{marginBottom:'100px'}}>
                                        <ClickAwayListener onClickAway={()=>setisOpenDropDown(false)}>
                                            <div className='accounts'>
                                                <span className='d-flex' onClick={()=>{setisOpenDropDown(!isOpenDropDown)}}>
                                                    <img className='accountImg' src={userIcon} style={{width:'30px', height:"30px"}}/>    
                                                    <p>Accounts</p>
                                                </span>

                                                {
                                                    isOpenDropDown!== false && (
                                                        <ul className='dropdownMenu'>
                                                            <li><Button className='align-item-center'><Person2OutlinedIcon/>My Account</Button></li>
                                                            <li><Button><LocationOnOutlinedIcon/>Order Tracking</Button></li>
                                                            <li><Button><FavoriteBorderOutlinedIcon/>My Wishlist</Button></li>
                                                            <li><Button><SettingsOutlinedIcon/>Setting</Button></li>
                                                            <li><Link to={"/login"}><Button><LogoutOutlinedIcon/>Sign Out</Button></Link></li>
                                                        </ul>
                                                    )
                                                }
                                            </div>
                                        </ClickAwayListener>
                                    </li>
                                    
                                </ul>

                            </div>
                        </div>

                    </div>

                    <Nav/>
                </div>    
            </header>
        </>
    )
}

export default Header;