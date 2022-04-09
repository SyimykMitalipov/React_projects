import React from "react";

const SearchPanel = () => {
    const SearchTxt = 'Type your text here'
    return (
        <div>
            <input type="text" placeholder={SearchTxt}/>
        </div>

    )
}
export default SearchPanel;