import React, { useState } from "react";

import {
    DropDownContainer,
    DropDownButton,
    DropDownListContainer,
    DropDownListItem
} from './DropdownElements'


const Dropdown = ({options, fieldName, fieldValue, titleOn, titleOff, multiple, dropdownCb}) => {
    const [isOpen, setIsOpen] = useState(false);

    let values = []
    if(multiple) values = fieldValue;
    else values.push(fieldValue);

    const onOptionClicked = (key) => {
        if(multiple){
            const index = values.findIndex(el=>el===key);
            if(index===-1){
                dropdownCb(fieldName,[...values,key]);
            }else{
                dropdownCb(fieldName,values.filter(el=>el!==key));
            }
        } 
        else{
            dropdownCb(fieldName,key);
            setIsOpen(!isOpen);
        } 
    };

  return (
    <DropDownContainer>
        <DropDownButton onClick={()=>setIsOpen(!isOpen)} show={isOpen}>
            {isOpen?titleOff:titleOn}
        </DropDownButton>   
            <DropDownListContainer show={isOpen}>
                    {options.map(option => (
                        <DropDownListItem
                            key={option.key}
                            isSelected={values.includes(option.key)}
                            onClick={()=>onOptionClicked(option.key)} 
                        >
                            {option.value}
                        </DropDownListItem>
                    ))}
            </DropDownListContainer>
    </DropDownContainer>
  );
}

export default Dropdown;