import style from './ThemeSwitcher.module.css'
import {setTheme} from 'redux/actice-slice';
import { useDispatch, useSelector } from 'react-redux';
import svg from '../../images/theme/symbol-defs.svg';
import { motion } from 'framer-motion';
import { getTheme } from 'redux/actice-selectors';
//-----------------------------------------------
export const ThemeSwitcher = () => {
    const dispatch = useDispatch(); 
    const theme=useSelector(getTheme) 
  return (
    <button className={style.btn_backdrop} onClick={()=>dispatch(setTheme())}>
      
        <motion.svg key={theme}  initial={{opacity:0.3}}  animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.4}}  className={theme?style.btn_icon:style.btn_iconNight} >
              <use href={theme? `${svg}#moon`:`${svg}#sun`} />
            </motion.svg>
      
    </button>
  );
};
