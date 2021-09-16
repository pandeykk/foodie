import React,{useState} from 'react'
import './style.css';
import Menu from './MenuApi'
import MenuCart from './MenuCart'
import Navbar from './Navbar'

const uniqueList =[
...new Set(Menu.map((curElem)=>{
return curElem.category;
})
),
"All",
];
console.log(uniqueList);


const Restaurent =()=> {

const [menuData,setMenuData] = useState(Menu);
const [menuList,setMenuList] = useState(uniqueList);

const filterItem =(category)=>{

if(category==="All"){
    return setMenuData(Menu);
}

const UpdateItem = Menu.filter((curElem)=>{
    return curElem.category ===category;
});
setMenuData(UpdateItem);
}

    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCart menuData={menuData} />
        </>
    )
}

export default Restaurent
