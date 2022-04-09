import React from 'react';
import { useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion';
const Filter = ({data}) => {
    const [cards,setCards]  = useState(data.filter(el => el.category === 'cars'))
    return (
        <div>
            
        </div>
    );
}

export default Filter;
