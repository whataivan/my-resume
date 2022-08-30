import { MainContainer } from "./MainContainer/MainContainer";
// import { About } from "./About/About";
import { useDispatch, useSelector } from "react-redux";
import style from  './App.module.css'
import {
  // TransitionGroup,
  CSSTransition,
  // Transition ,
} from 'react-transition-group';
// import { About } from 'components/About/About';
import { setActive } from "redux/actice-slice"; 
import { motion } from 'framer-motion';
import { Portfolio } from "./Portfolio/Portfolio";
import { Main } from 'components/Main/Main';
import { getActive } from 'redux/actice-selectors';
//------------------------------------

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
        
          { isActive === 1 ? <motion.div initial={{ opacity: 0, scale: 0.3 }}
        key={isActive}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}><Main /> </motion.div>: <h2 className={style.disabled}>WELCOME!</h2> }
          
          
          
       
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
        
        
          { isActive === 2 ? <motion.div initial={{ opacity: 0, scale: 0.3 }}
        key={isActive}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}><Main /></motion.div> : <h2 className={style.disabled}>ABOUT_ME</h2> }
          
          
        
        
          
        
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
        <CSSTransition
          in={isActive === 3}
          timeout={300}
          classNames="item"
          unmountOnExit
        >
          <Portfolio/>
        </CSSTransition>
        <CSSTransition
          in={isActive !== 3}
          timeout={100}
          classNames="title"
          unmountOnExit
        >
<h2 className={style.disabled}>PORTFOLIO</h2>
</CSSTransition>
     
          
        
         
        
      </motion.div>

      <motion.div
        transition={{
          default: { ease: 'linear' },
        }}
        animate={{ width: isActive === 4 ? 1000 : 100 }}
        className={isActive === 4 ? style.skills_active : style.skills}
        onClick={() => dispatch(setActive(4))}
      >
         <CSSTransition
          in={isActive === 4}
          timeout={300}
          classNames="item"
          unmountOnExit
        >
          <Portfolio/>
        </CSSTransition>
        <CSSTransition
          in={isActive !== 4}
          timeout={100}
          classNames="title"
          unmountOnExit
        >
<h2 className={style.disabled}>SKILLS</h2>
</CSSTransition>
       
      </motion.div>
      </MainContainer>
      
     </>
   );
 };



