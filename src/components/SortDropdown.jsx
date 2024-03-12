import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../styles/SortDropdown.css";

const SortDropdown = () => {

    const[sort, setSort] = useState('Popular');

    const handleSelect = (eventKey) => {
        setSort(eventKey);
    }

    return (
        <div className="sort-dropdown">
            <DropdownButton id='dropdown-button' title={`Sort By: ${sort}`} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Price">Price</Dropdown.Item>
                <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
                <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default SortDropdown;