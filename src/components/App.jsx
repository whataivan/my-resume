import { MainContainer } from './MainContainer/MainContainer';

import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.css';
import { Swip } from './swip';
import { setActive } from 'redux/actice-slice';
import { motion } from 'framer-motion';
import { Portfolio } from './Portfolio/Portfolio';
import { Main } from 'components/Main/Main';
import { Skills } from './Skills/Skills';
import { getActive } from 'redux/actice-selectors';
import { About } from './About/About';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// //------------------------------------

export const App = () => {
  const isActive = useSelector(getActive);

  const dispatch = useDispatch();
  return (
    <>
      <MainContainer>
        <motion.div
          transition={{
            default: { ease: 'linear' },
          }}
          animate={{ width: isActive === 1 ? 1100 : 100 }}
          className={isActive === 1 ? style.mainActive : style.main}
          onClick={() => dispatch(setActive(1))}
        >
          {isActive === 1 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              key={isActive}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Main />{' '}
            </motion.div>
          ) : (
            <h2 className={style.disabled}>WELCOME!</h2>
          )}
        </motion.div>
        {/* //---------------------------------------------------------22222222222222222 */}
        <motion.div
          transition={{
            default: { ease: 'linear' },
          }}
          animate={{ width: isActive === 2 ? 1100 : 100 }}
          className={isActive === 2 ? style.about_active : style.about}
          onClick={() => dispatch(setActive(2))}
        >
          {isActive === 2 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              key={isActive}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <About />
            </motion.div>
          ) : (
            <h2 className={style.disabled}>ABOUT_ME</h2>
          )}
        </motion.div>
        {/* ---------------333333333333333333----------------------------------------------------------------------------------------------------------------- */}
        <motion.div
          transition={{
            default: { ease: 'linear' },
          }}
          animate={{ width: isActive === 3 ? 1100 : 100 }}
          className={isActive === 3 ? style.portfolio_active : style.portfolio}
          onClick={() => dispatch(setActive(3))}
        >
          {isActive === 3 ? (
            <motion.div initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}>
              <Portfolio />
            </motion.div>
          ) : (
            <h2 className={style.disabled}>PORTFOLIO</h2>
          )}
        </motion.div>
        {/* ---------------4444444444----------------------------------------------------------------------------------------------------------------- */}
        <motion.div
          transition={{
            default: { ease: 'linear' },
          }}
          animate={{ width: isActive === 4 ? 1000 : 100 }}
          className={isActive === 4 ? style.skills_active : style.skills}
          onClick={() => dispatch(setActive(4))}
        >
          {isActive === 4 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              key={isActive}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Skills />
            </motion.div>
          ) : (
            <h2 className={style.disabled}>SKILLS</h2>
          )}
        </motion.div>
      </MainContainer>
    </>
  );
};
