// Style :
import './Searchbar.scss';

// Component :
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const Searchbar = () => {

    const [valueInputSearch, setValueInputSearch] = useState('');

    return (

        <div className="container__searchbar">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={valueInputSearch} onChange={(event) => setValueInputSearch(event.target.value)} placeholder="Search a product" />
            </span>
        </div>

    );
};

export default Searchbar;