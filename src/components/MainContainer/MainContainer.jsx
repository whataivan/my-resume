import style from '../MainContainer/MainContainer.module.css';
import { motion } from 'framer-motion';

import { getTheme } from 'redux/actice-selectors';
import { useSelector } from 'react-redux';

//--------------------------------------------
export const MainContainer = ({children, themeState}) => {
  
 const theme=useSelector(getTheme)
  
  return (
    <motion.div className={theme?style.backdrop:style.backdrop_night}  initial={{opacity:0, scale:0.3}} animate={{opacity:1, scale:1}} transition={{ duration: 0.6, delay: 0.3 }}>
      
      {children}
    </motion.div>
  );
};
