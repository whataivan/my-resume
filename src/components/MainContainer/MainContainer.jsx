import style from '../MainContainer/MainContainer.module.css';
import { motion } from 'framer-motion';
//--------------------------------------------
export const MainContainer = ({children}) => {
  // const [isActive, setIsActive] = useState(1);
 
  return (
    <motion.div className={style.backdrop} initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 0.9, delay: 0.3 }}>
      {children}
    </motion.div>
  );
};
