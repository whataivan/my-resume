
import style from '../MainContainer/MainContainer.module.css';
import {
  // TransitionGroup,
  CSSTransition,
  // SwitchTransition,
} from 'react-transition-group';
// import { About } from 'components/About/About';
import { setActive } from 'redux/actice-slice';
import { motion } from 'framer-motion';

import { Main } from 'components/Main/Main';

import { useDispatch } from 'react-redux';
import { getActive } from 'redux/actice-selectors';
import { useSelector } from 'react-redux';
//--------------------------------------------
export const MainContainer = () => {
  // const [isActive, setIsActive] = useState(1);
  const isActive = useSelector(getActive);

  const dispatch = useDispatch();
  return (
    <div className={style.backdrop}>
      {/* <SwitchTransition> */}
        <motion.div
          transition={{
            default: { ease: 'linear' },
          }}
          animate={{ width: isActive === 1 ? 1100 : 100 }}
          className={isActive === 1 ? style.mainActive : style.main}
          onClick={() => dispatch(setActive(1))}
        >
          <CSSTransition in={isActive === 1} timeout={400} classNames="item" unmountOnExit>
            <Main />
          </CSSTransition>
          <CSSTransition in={isActive !== 1} timeout={0} classNames="item" unmountOnExit>
           <h2 className={style.disabled}>WELCOME!</h2>
          </CSSTransition>
        </motion.div>
      {/* </SwitchTransition> */}


      <motion.div
        transition={{
          default: { ease: 'linear' },
        }}
        animate={{ width: isActive === 2 ? 1100 : 100 }}
        className={isActive === 2 ? style.about_active : style.about}
        onClick={() => dispatch(setActive(2))}
      >
        {isActive === 2 ? (
          <Main />
        ) : (
          <h2 className={style.disabled}>ABOUT_ME</h2>
        )}
      </motion.div>

      <motion.div
        transition={{
          default: { ease: 'linear' },
        }}
        animate={{ width: isActive === 3 ? 1100 : 100 }}
        className={isActive === 3 ? style.portfolio_active : style.portfolio}
        onClick={() => dispatch(setActive(3))}
      >
        {isActive === 3 ? (
          <Main />
        ) : (
          <h2 className={style.disabled}>PORTFOLIO</h2>
        )}
      </motion.div>

      <motion.div
        transition={{
          default: { ease: 'linear' },
        }}
        animate={{ width: isActive === 4 ? 1000 : 100 }}
        className={isActive === 4 ? style.skills_active : style.skills}
        onClick={() => dispatch(setActive(4))}
      >
        {isActive === 4 ? <Main /> : <h2 className={style.disabled}>SKILLS</h2>}
      </motion.div>
    </div>
  );
};
