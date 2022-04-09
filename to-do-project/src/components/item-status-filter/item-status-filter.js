import React, {useState} from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onToggleFilter, status}) => {

    const btns = [
        {
            name: 'all', label: 'All'
        },
        {
            name: 'active', label: 'Active'
        },
        {
            name: 'done', label: 'Done'
        },
    ]

    return (
        <div className="btn-group">
            {btns.map((btn) => {
                let isActive = btn.name === status
                console.log(isActive,'st.js')
                console.log(status,'st.js')
                console.log(btn.name,'st.js')
                const btn_info = isActive ? 'btn-info' : 'btn-outline-secondary'
                return (
                    <button className={`btn ${btn_info}`} type="button" onClick={(e) => {
                        onToggleFilter(e.target.textContent.toLowerCase())
                    }}>{btn.label}</button>
                )
            })}


            {/*<button onClick={(e) => {*/}
            {/*    if (status === e.target.textContent.toLowerCase()) {*/}
            {/*        console.log('bar')*/}
            {/*        setIsActive(true)*/}
            {/*    }*/}
            {/*    onToggleFilter(e.target.textContent.toLowerCase())*/}
            {/*}}*/}
            {/*        type="button"*/}
            {/*        className={`btn ${btn_info}`}*/}
            {/*>All*/}
            {/*</button>*/}
            {/*<button onClick={(e) => {*/}
            {/*    if (status === e.target.textContent.toLowerCase()) {*/}
            {/*        console.log('bar')*/}
            {/*        setIsActive(true)*/}
            {/*    }*/}
            {/*    onToggleFilter(e.target.textContent.toLowerCase())*/}
            {/*}}*/}
            {/*        type="button"*/}
            {/*        className={`btn ${btn_info}`}*/}
            {/*>Active*/}
            {/*</button>*/}
            {/*<button onClick={(e) => onToggleFilter(e.target.textContent.toLowerCase())}*/}
            {/*        type="button"*/}
            {/*        className={`btn ${btn_info}`}>Done*/}
            {/*</button>*/}
        </div>
    );

};

export default ItemStatusFilter;
