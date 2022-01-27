import React,{useState} from "react";
import Child from "../child/Child";
import './parent.scss'
import items from "../accodionData";

const Parent = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    } else {
      return setClicked(index)
    }
  }
  return (
    <div className="container">
      <div className="wrapper">
         {items.map((item, index) => {
          //console.log(index)
          return (
            <Child
              key={item.id}
              icon1={item.icon1}
              title={item.title}
              info={item.info}
              toggle={toggle}
              index={index}
              clicked={clicked}
            />
          );
        })} 
              
            
            
            
            
      </div>
    </div>
  );
};

export default Parent;
