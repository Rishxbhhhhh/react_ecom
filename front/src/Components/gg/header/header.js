import React, { useState } from "react";
import './header.css';
import Logo from '../../Assests/images/logo.png';
import Select from "../selectDrop/select";

const Header = () => {

    const [categories, setcategories] = useState([
        'All categories',
        'Wines & Drinks',
        'Clothing & Beauty',
        'Fresh Seafood',
        'Crunchies',
        'Fast food',
        'Baking material',
        'Vegetables',
        'Fresh Fruits',
        'Bread and Juice',
        'Milks and Dairies',
    ]);

    return(
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={Logo} alt="logo" style={{width:'200px'}}></img>
                        </div>

                        {/* headerSearch start here */}
                        <div className="col-sm-5">
                            <div className="headerSearch d-flex align-items-center">
                                <Select data={categories}/>

                                <div className='search'>
                                    <input type="text" alt="random" placeholder="Search for items...">
                                    </input>
                                    <button class="buttons" id="addEvent">Search</button>
                                </div>

                            </div>
                        </div>
                        {/* headerSearch start here */}

                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;