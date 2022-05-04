// Component :
import React from 'react';

// Style :
import './Searchbar.scss';

interface SearchbarProps {
    // State :
    valueInputSearch: string,
    setValueInputSearch: React.Dispatch<React.SetStateAction<string>>,
}

const Searchbar = ({valueInputSearch, setValueInputSearch}: SearchbarProps) => {

    return (

        <div className="container__searchbar">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <input value={valueInputSearch} onChange={(event) => setValueInputSearch(event.target.value)} placeholder="Search a product" />
            </span>
        </div>

    );
};

export default Searchbar;