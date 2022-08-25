import { useState } from 'react';
import style from '../MainContainer/MainContainer.module.css';
// import { About } from 'components/About/About';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Main } from 'components/Main/Main';
//--------------------------------------------
export const MainContainer = () => {
  const [isActive, setIsActive] = useState(1);
  useEffect(() => {}, [isActive]);
  return (
    <div className={style.backdrop}>
      <motion.div
        transition={{
          default: { ease: 'linear' },
        }}
        animate={{ width: isActive === 1 ? 1100 : 100 }}
        className={isActive===1? style.mainActive:style.main }
        onClick={() => setIsActive(1)}
      >
       {isActive===1?<Main />:<h2 className={style.disabled}>WELCOME!</h2>} 
      </motion.div>

      <motion.div
        transition={{
          default: { ease: 'linear' },
        }}
        animate={{ width: isActive === 2 ? 1100 : 100 }}
        className={isActive===2? style.about_active:style.about }
        onClick={() => setIsActive(2)}
      >
        {isActive===2?<Main/>:<h2 className={style.disabled}>ABOUT_ME</h2>} 
      </motion.div>

      <motion.div
        transition={{
          default: { ease: 'linear' },
        }}
        animate={{ width: isActive === 3 ? 1100 : 100 }}
        className={isActive===3? style.portfolio_active:style.portfolio }
        onClick={() => setIsActive(3)}
      >
        {isActive===3?<Main />:<h2 className={style.disabled}>PORTFOLIO</h2>} 
      </motion.div>

      <motion.div
        transition={{
          default: { ease: 'linear' },
        }}
        animate={{ width: isActive === 4 ? 1000 : 100 }}
        className={isActive===4? style.skills_active:style.skills }
        onClick={() => setIsActive(4)}
      >
        {isActive===4?<Main/>:<h2 className={style.disabled}>SKILLS</h2>} 
      </motion.div>
    </div>
  );
};
