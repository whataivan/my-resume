import style from '../Portfolio/Portfolio.module.css';
import kapusta from '../../images/kapusta.jpg';
import filmoteka from '../../images/filmoteka.png';
import finder from '../../images/finder.jpg';
import helleng from '../../images/helleng.jpg';
// import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
// import { getActive } from 'redux/actice-selectors';
// import { useSelector } from 'react-redux';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
export const Portfolio = () => {
  const [isActive, setIsActive] = useState(filmoteka);
  // const active = useSelector(getActive);
  const srcSwitcher = () => {
    let result;
    switch (isActive) {
      case kapusta:
        result = [
          'https://github.com/Mr-Nihility/kapusta-project.git',
          'https://kapusta-project-app.netlify.app/',
        ];
        break;
      case filmoteka:
        result = [
          'https://github.com/Jasper935/filmoteka-project.git',
          'http://jasper935.github.io/filmoteka-project/',
        ];
        break;
      case finder:
        result = [
          'https://github.com/Jasper935/goit-react-hw-04-images.git',
          'https://jasper935.github.io/goit-react-hw-04-images/',
        ];
        break;
      case helleng:
        result = [
          'https://github.com/RedokLeeroy/placeholders_project.git',
          'https://redokleeroy.github.io/placeholders_project/',
        ];
        break;
      default:
        break;
    }
    return result;
  };

  return (
    <div className={style.container}>
      <motion.ul
        className={style.list}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <motion.li
          transition={{ duration: 0.3 }}
          whileTap={{ y: 10 }}
          className={style.list_item}
        >
          <h3 className={style.subtitle}>Kapu$ta</h3>
          <div onClick={() => setIsActive(kapusta)} className={style.group}>
            <motion.img className={style.img} src={kapusta} alt="kapusta" />
            <p className={style.used_text}>
              [React, Redux toolkit, Formik, Axios]
            </p>
            <p className={style.text}>Position: Developer.</p>
            <ul className={style.textList}>
              <li className={style.item}>
              <p className={style.text}>
              Work with api, create async thunk and custom select.
            </p>
                
              </li>
              <li className={style.item}>
              <p className={style.text}>Team work, work with git branches.</p>
               
              </li>
            </ul>
            
            
          </div>
        </motion.li>

        <motion.li
          transition={{ duration: 0.5 }}
          whileTap={{ y: 10, z:'15px' }}
          className={style.list_item}
        >
          <h3 className={style.subtitle}>Filmoteka</h3>
          <div onClick={() => setIsActive(filmoteka)} className={style.group}>
            <motion.img className={style.img} src={filmoteka} alt="filmoteka" />
            <p className={style.used_text}>[HTML, CSS, JS, SASS, Axios]</p>
            <p className={style.text}>Position: Team-leader.</p>
            <ul className={style.textList}>
              <li className={style.item}>
                <p className={style.text}>
                  Developed reviews section, header and work with local storage.
                </p>
                
              </li>
              <li className={style.item}>
              <p className={style.text}>
                  Code review, work with git branches.
                </p>
               
              </li>
            </ul>
          </div>
        </motion.li>
        <motion.li
          transition={{ duration: 0.5 }}
          whileTap={{ y: 10 }}
          className={style.list_item}
        >
          <h3 className={style.subtitle}>Im finder</h3>
          <div onClick={() => setIsActive(finder)} className={style.group}>
          <LazyMotion features={domAnimation}>
            <m.img className={style.img} src={finder} alt="finder" />
            </LazyMotion>
            <p className={style.used_text}>[HTML, CSS, React, Axios]</p>
            <p className={style.text}>Position: Developer.</p>
            
            <ul className={style.textList}>
              <li className={style.item}>
                <p className={style.text}>
                  Simple web-app with open API for searching images.
                </p>
              </li>
            </ul>
          </div>
        </motion.li>
        <motion.li
          transition={{ duration: 0.5 }}
          whileTap={{ y: 10 }}
          className={style.list_item}
        >
          <h3 className={style.subtitle}>Hellenglish</h3>
          <div onClick={() => setIsActive(helleng)} className={style.group}>
          <LazyMotion features={domAnimation}>
            <m.img className={style.img} src={helleng} alt="helleng" />
            </LazyMotion>
            <p className={style.used_text}>[HTML, CSS, SASS, BEM]</p>
            <p className={style.text}>Position: Developer.</p>
            <ul className={style.textList}>
              <li className={style.item}>
              <p className={style.text}>
              Developed guarantee and feedback section.
            </p>
                
              </li>
              
            </ul>
            
          </div>
        </motion.li>
      </motion.ul>

      {/* ------------------------------------------------------------------------------ */}

      <motion.div
        className={style.bot_wrap}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        
        <LazyMotion features={domAnimation}>
      
    
            <m.img
            key={isActive}
            initial={{y:"-32px", opacity:0}}
            animate={{y:"0", opacity:1}}
              
              src={isActive}
              whileHover={{ scale: 1.01 }}
              className={style.primary_img}
              alt={isActive}
             
        
            />
          </LazyMotion>
       

        <div className={style.btn_wrap}>
          <motion.a
            target="_blank"
            style={{ textDecoration: 'none' }}
            href={srcSwitcher()[0]}
            whileHover={{ scale: 1.02, opacity: 1 }}
            type="button"
            className={style.first_btn}
          >
            GO TO CODE
          </motion.a>
          <motion.a
            target="_blank"
            style={{ textDecoration: 'none' }}
            href={srcSwitcher()[1]}
            whileHover={{ scale: 1.02, opacity: 1 }}
            type="button"
            className={style.second_btn}
          >
            VISIT SITE
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
