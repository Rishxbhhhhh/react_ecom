import React, { useState } from "react";
import "../selectDrop/select.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Select = (props) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState('All Categories');

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
    // Long Alternate for !isOpenSelect
    if(isOpenSelect === true){
        
    }
  };

  const closeSelect = (index, name) =>{
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
    
  }

//   {console.log(`${isOpenSelect}`)}
  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selectDropWrapper cursor">
        <span className="openSelect" onClick={openSelect}>{selectedItem} <KeyboardArrowDownIcon className="arrow"/></span>
        {/* using ternary operator */}
              {/* {isOpenSelect ?(
                  <div className="selectDrop">
                      <div className="searchField">
                          <input type="text"></input>
                      </div>
                      <ul className="searchResults">
                          <li onClick={()=> setisOpenSelect(false)}>Milks and Dairies</li>
                      </ul>
                  </div>
              ):null} */}

        {/* using conditional operator  */}
              {isOpenSelect === true && (
                  <div className="selectDrop">
                      <div className="searchField">
                          <input type="text" placeholder="Search here..."></input>
                      </div>
                      <ul className="searchResults">
                        {
                          props.data.map((item,index)=>{
                            return(
                              <li onClick={()=> closeSelect(index,item)} className={`${selectedIndex === index ? 'active' : ''}`}>{item}</li>
                            )
                          })
                        }
                      </ul>
                  </div>
              )}
      </div>
    </ClickAwayListener>
  );
};
export default Select;
