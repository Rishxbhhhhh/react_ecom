import React from 'react';

import './nav.css';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import MegaMenuImg from '../../../Assests/images/megaMenuImg.png'

const Nav = () => {
  return (
    <div className='nav d-flex align-items-center'>
            <div className='container-fluid d-inline-grid'>
                <div className='row position-relative d-inline-flex' style={{whiteSpace: 'nowrap',flexWrap:'nowrap'}}>

                    <div className='col-sm-3 part1 d-flex align-items-center' style={{marginLeft:'40px', padding:'0px'}}>
                        <Button className='bg-g text-white catTab'>
                            <GridViewOutlinedIcon/> &nbsp;    
                            Browse All Categories
                            <KeyboardArrowDownIcon/></Button>

                            <div className='deals d-flex align-items-center justify-items-center'>
                                <LocalFireDepartmentOutlinedIcon style={{fontSize:'33px', color:'#3bb77e'}}/>
                                <p className=''>Hot Deals</p>
                            </div>
                    </div>

                    <div className='col-sm-7 part2' style={{padding:'0px', position:'static'}}>
                        <nav>
                            <ul className='d-flex list list-inline mb-0'>
                                <li className='list list-inline'>
                                    <Button><Link to="/">Home</Link></Button>
                                </li>
                                <li className='list list-inline'>
                                    <Button><Link to="/about">About</Link></Button>
                                </li>
                                <li className='list list-inline'>
                                    <Button><Link>Shop</Link></Button>
                                </li>
                                <li className='list list-inline'>
                                    <Button><Link>Vendors <KeyboardArrowDownIcon style={{fontSize:'18px'}}/></Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul style={{paddingLeft:'0px'}}>
                                            <li><Button><Link to="/about"> Dashboard</Link></Button></li>
                                            <li><Button><Link to="/about"> Store Listing</Link></Button></li>
                                            <li><Button><Link to="/about"> Store Details</Link></Button></li>
                                            <li><Button><Link to="/about"> My Orders</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list list-inline'>
                                    <Button><Link>Mega Menu<KeyboardArrowDownIcon style={{fontSize:'18px'}}/></Link></Button>
                                    <div className='dropdown_menu megaMart'>
                                        <ul style={{paddingLeft:'0px'}}>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h3 className='text-g'>Fruits & Vegetables</h3>
                                                    <ul>
                                                        <li><Link to="">Meat & Poultry</Link></li>
                                                        <li><Link to="">Fresh Vegetables</Link></li>
                                                        <li><Link to="">Herbs & Seasonings</Link></li>
                                                        <li><Link to="">Cuts & Sprouts</Link></li>
                                                        <li><Link to="">Exotic Fruits & Veggies</Link></li>
                                                        <li><Link to="">Packaged Produce</Link></li>
                                                    </ul>
                                                </div>
                                                <div className='col'>
                                                    <h3 className='text-g'>Breakfast & Dairy</h3>
                                                    <ul>
                                                        <li><Link to="">Milk & Flavoured Milk</Link></li>
                                                        <li><Link to="">Butter and Margarine</Link></li>
                                                        <li><Link to="">Eggs Substitutes</Link></li>
                                                        <li><Link to="">Marmalades</Link></li>
                                                        <li><Link to="">Sour Cream</Link></li>
                                                        <li><Link to="">Cheese</Link></li>
                                                    </ul>
                                                </div>
                                                <div className='col'>
                                                    <h3 className='text-g'>Meat & Seafood</h3>
                                                    <ul>
                                                        <li><Link to="">Breakfast Sausage</Link></li>
                                                        <li><Link to="">Dinner Sausage</Link></li>
                                                        <li><Link to="">Chicken</Link></li>
                                                        <li><Link to="">Sliced Deli Meat</Link></li>
                                                        <li><Link to="">Wild Caught Fillets</Link></li>
                                                        <li><Link to="">Crab and Shellfish</Link></li>
                                                    </ul>
                                                        
                                                </div>
                                                <div className='col'>
                                                    <img src={MegaMenuImg} className='w-100 h-100' style={{borderRadius:'25px'}}></img>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list list-inline'>
                                    <Button><Link>Blog</Link></Button>
                                </li>
                                <li className='list list-inline'>
                                    <Button>
                                        <Link>
                                            Pages 
                                            <KeyboardArrowDownIcon style={{fontSize:'18px'}}/>
                                        </Link>
                                    </Button>

                                    <div className='dropdown_menu'>
                                        <ul style={{paddingLeft:'0px'}}>
                                            <li><Button><Link to="/about">About Us</Link></Button></li>
                                            <li><Button><Link to="/about">Contact</Link></Button></li>
                                            <li><Button><Link to="/about">My Account</Link></Button></li>
                                            <li><Button><Link to="/about">Login</Link></Button></li>
                                            <li><Button><Link to="/about">Register</Link></Button></li>
                                            <li><Button><Link to="/about">Forgot password</Link></Button></li>
                                            <li><Button><Link to="/about">Reset password</Link></Button></li>
                                            <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="/about">Terms of Services</Link></Button></li>
                                            <li><Button><Link to="/error">404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list list-inline'>
                                    <Button><Link>Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='phNo d-flex align-items-center'>
                            <span><HeadsetMicOutlinedIcon/></span>
                            <div className='info ml-3'>
                                <h3 className='text-g mb-0'>1900-888</h3>
                                <p className='mb-0'>24/7 Support Center</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    </div>
  )
}

export default Nav