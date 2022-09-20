import style from '../MainContainer/MainContainer.module.css';
import { motion } from 'framer-motion';

import { getTheme } from 'redux/actice-selectors';
import { useSelector } from 'react-redux';

//--------------------------------------------
export const MainContainer = ({children, themeState}) => {
  const lightThemeBackground = 'linear-gradient(to right, #fdfcfc, #e3e3e2)'
  const darkThemeBackground = 'linear-gradient(to right, #271a1a, #080035)'
 const theme=useSelector(getTheme)
  
  return (
    <motion.div className={theme?style.backdrop:style.backdrop_night}   animate={{backgroundImage:theme? darkThemeBackground: lightThemeBackground }} transition={{ duration: 0.6, delay: 0.3 }}>
      
      {children}
    </motion.div>
  );
};
