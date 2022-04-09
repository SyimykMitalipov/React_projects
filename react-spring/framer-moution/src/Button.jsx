import React from 'react';
import { motion } from 'framer-motion';
const Button = (props) => {
    const {
    text,
    handleClick = Function.prototype,

    } = props
    return (
        <motion.button>
            { text }
        </motion.button>
    );
}

export default Button;
