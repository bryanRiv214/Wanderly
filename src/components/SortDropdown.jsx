import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../styles/SortDropdown.css";

const SortDropdown = () => {

    const[sort, setSort] = useState('Popular')
    const title = `Sort By: ${sort}`;

    return (
        <div className="sort-dropdown">
            <DropdownButton id='dropdown-button' title={title}>
                <Dropdown.Item>Price</Dropdown.Item>
                <Dropdown.Item>Popular</Dropdown.Item>
                <Dropdown.Item>Third option</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default SortDropdown;