import React, { useState } from "react";

import {
    DropDownContainer,
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem
} from './DropdownElements'


const Dropdown = ({options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <DropDownContainer>
        <DropDownHeader onClick={toggling}>
            {selectedOption || "---"}
        </DropDownHeader>
        {isOpen && (
            <DropDownListContainer>
                <DropDownList>
                    {options.map(option => (
                    <ListItem onClick={onOptionClicked(option.key)} key={Math.random()}>
                        {option.value}
                    </ListItem>
                    ))}
                </DropDownList>
            </DropDownListContainer>
        )}
    </DropDownContainer>
  );
}

export default Dropdown;