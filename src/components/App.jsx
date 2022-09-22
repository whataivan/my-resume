import { MainContainer } from './MainContainer/MainContainer';

import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.css';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { setActive } from 'redux/actice-slice';
import { motion } from 'framer-motion';
import { Portfolio } from './Portfolio/Portfolio';
import { Main } from 'components/Main/Main';
import { Skills } from './Skills/Skills';
import { getActive, getTheme } from 'redux/actice-selectors';
import { About } from './About/About';

// //------------------------------------

export const App = () => {
  const isActive = useSelector(getActive);
  const NightTheme = useSelector(getTheme);
  const screenWidth = window.screen.width;
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   console.log(screenWidth);
  // })
  const componentsInfo = [
    {
      component: <Main />,
      title: 'WELCOME!',
      pageNumber: 1,
      className: NightTheme ? `${style.main} ${style.NightTheme}` : style.main,
      classNameActive: NightTheme
        ? `${style.mainActive} ${style.NightTheme}`
        : style.mainActive,
    },
    {
      component: <About />,
      title: 'ABOUT ME',
      pageNumber: 2,
      className: NightTheme
        ? `${style.about} ${style.NightTheme}`
        : style.about,
      classNameActive: NightTheme
        ? `${style.aboutActive} ${style.NightTheme}`
        : style.aboutActive,
    },
    {
      component: <Portfolio />,
      title: 'PORTFOLIO',
      pageNumber: 3,
      className: NightTheme
        ? `${style.portfolio} ${style.NightTheme}`
        : style.portfolio,
      classNameActive: NightTheme
        ? `${style.portfolioActive} ${style.NightTheme}`
        : style.portfolioActive,
    },
    {
      component: <Skills />,
      title: 'SKILLS',
      pageNumber: 4,
      className: NightTheme
        ? `${style.skills} ${style.NightTheme}`
        : style.skills,
      classNameActive: NightTheme
        ? `${style.skillsActive} ${style.NightTheme}`
        : style.skillsActive,
    },
  ];
  if (screenWidth >= 1200) {
    return (
      <MainContainer>
        <ThemeSwitcher />
        {componentsInfo.map(
          ({ component, title, pageNumber, classNameActive, className }) => {
          
            return (
              <motion.div
                key={pageNumber}
                transition={{
                  default: { ease: 'linear' },
                }}
                animate={{ width: isActive === pageNumber ? "55vw" : "5vw" }}
                className={
                  isActive === pageNumber ? classNameActive : className
                }
                onClick={() => dispatch(setActive(pageNumber))}
              >
                {isActive === pageNumber ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {component}
                  </motion.div>
                ) : (
                  <h2 className={style.disabled}>{title}</h2>
                )}
              </motion.div>
            );
          }
        )}
      </MainContainer>
    );
  } else if (screenWidth < 1200) {
    return (
      <MainContainer>
        <ThemeSwitcher />
        {componentsInfo.map(
          ({ component, title, pageNumber, classNameActive, className }) => {
            console.log();
            return (
              <motion.div
                key={pageNumber}
                transition={{
                  default: { ease: 'linear' },
                }}
                animate={{
                  height: isActive === pageNumber ? '85vh' : '5vh',
                }}
                className={
                  isActive === pageNumber ? classNameActive : className
                }
                onClick={() => dispatch(setActive(pageNumber))}
              >
                {isActive === pageNumber ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {component}
                  </motion.div>
                ) : (
                  <h2 className={style.disabled}>{title}</h2>
                )}
              </motion.div>
            );
          }
        )}
      </MainContainer>
    );
  }
};
