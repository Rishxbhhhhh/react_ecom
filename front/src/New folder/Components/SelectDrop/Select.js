import React, { useState ,useEffect} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './select.css';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


const Select = ({data,placeholder,Icon}) => {
    const listArray = Array.from(data);
    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIso, setselectedIso] = useState("");
    const [selectedItem, setselectedItem] = useState(placeholder);
    const [listData, setlistData] = useState(listArray);
 
    const openSelect = () => {
        setisOpenSelect(!isOpenSelect);
        setlistData(listArray);
    }

    const closeSelect = (item,name) =>{
        setisOpenSelect(false);
        setlistData(listArray);
        setselectedItem(item);
    }

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        const list = listArray.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        })
        console.log(keyword);
        
        setlistData(list);
    }
  return (
    <ClickAwayListener onClickAway={()=> setisOpenSelect(false)}>
        <div className = 'selectDropWrapper cursor position-relative'>
            <div className='icon'>{Boolean(Icon) === true? Icon:''}</div>
            <span className='openSelect' onClick={openSelect}>{selectedItem.length>14?selectedItem.substr(0,14)+'...' : selectedItem}
                <KeyboardArrowDownIcon className='arrow'/></span>
            {
                isOpenSelect === true &&
                <div className='selectDrop'>
                    <div className='searchField'>
                        <input type='text' placeholder='Search here...' onChange={filterList}/>
                    </div>
                    <ul className='searchResults'>
                        <li key={0} onClick={()=>closeSelect("",placeholder)} className={`${selectedIso === "" ? 'active':''}`}> {placeholder}</li>
                        {
                            listData.map((item, index)=>{
                                return(
                                    <li key={index+1} onClick={()=>closeSelect(item ?? "",item)} className={`${selectedIso === item ? 'active': ''}`}>{item}</li>
                                )  
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    </ClickAwayListener>
  )
}

export default Select;