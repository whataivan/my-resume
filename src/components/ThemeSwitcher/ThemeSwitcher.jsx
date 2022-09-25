import style from './ThemeSwitcher.module.css';
import { switchTheme } from 'redux/actice-slice';
import { useDispatch, useSelector } from 'react-redux';
import svg from '../../images/theme/symbol-defs.svg';
import { motion } from 'framer-motion';
import { getTheme } from 'redux/actice-selectors';
//-----------------------------------------------
export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  return (
    <button
      className={style.btn_backdrop}
      onClick={() => dispatch(switchTheme())}
    >
      <motion.svg
        key={theme}
        initial={{ opacity: 0.5, y: !theme ? -30 : 0 }}
        animate={{ y: theme ? -30 : 0, opacity: 0.7 }}
        exit={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={theme ? style.btn_icon : style.btn_iconNight}
      >
        <use href={theme ? `${svg}#moon` : `${svg}#sun`} />
      </motion.svg>
    </button>
  );
};
