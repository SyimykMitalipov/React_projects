import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Collapsible = (props) => {
  const { title = 'click me', children } = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisiblity = () => {
    setVisible(!isVisible);
  };
  return <>
  <div
  onClick={handleVisiblity}
  style={{
      background: '#ddd',
      padding: '0.8rem 1.3rem',
      cursor: 'pointer',
      width: 300
  }}
  >
      { title }
  </div>
  <AnimatePresence>
      {
          isVisible && (
              <motion.div
              initial={{
                  height: 0,
              }}
              animate={{
                  height: 'auto',

              }}
              exit={{
                  height: 0 ,
                  opacity: 0 ,

              }}
              transition={{
                duration: 1,
                delay: 0.5
              }}
              style={{
                  overflow: 'hidden'
              }}
              >
                  <div style={{
                      padding: '0.8rem 1.3rem', width: 300, border: '1px solid #ddd '
                  }}>
                    {children}
                  </div>
              </motion.div>
          )
      }
  </AnimatePresence>


  </>;
};

export default Collapsible;
