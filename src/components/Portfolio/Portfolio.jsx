import style from '../Portfolio/Portfolio.module.css';
import kapusta from '../../images/kapusta.jpg';
import filmoteka from '../../images/filmoteka.jpg';
import finder from '../../images/finder.jpg';
import helleng from '../../images/helleng.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useState } from 'react';

import { motion} from 'framer-motion';
export const Portfolio = () => {
  const [isActive, setIsActive] = useState(filmoteka);
  const imgList = [
    {
      title: 'Kapusta',
      src: kapusta,
      used: '[React, Redux toolkit, Formik, Axios]',
      position: 'Position: Developer.',
      textList: [
        'Work with api, create async thunk and custom select.',
        'Team work, work with git branches.',
      ],
    },
    {
      title: 'Filmoteka',
      src: filmoteka,
      used: '[HTML, CSS, JavaScript, SASS, Axios]',
      position: 'Position: Team-leader.',
      textList: [
        'Developed reviews section, header and work with local storage.',
        'Code review, work with git branches.',
      ],
    },
    {
      title: 'Img finder',
      src: finder,
      used: '[HTML, CSS, JavaScript, React, Axios]',
      position: 'Position: Developer.',
      textList: ['Simple web-app with open API for searching images.'],
    },
    {
      title: 'Hellenglish',
      src: helleng,
      used: '[HTML, CSS, SASS, BEM, Java Script]',
      position: 'Position: Developer.',
      textList: ['Developed guarantee and feedback section.'],
    },
  ];
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
    <motion.div 
     className={style.container}>
      <ul
        className={style.list}
        
      >
        {imgList.map(({ title, src, used, position, textList }, i) => {
          return (
            <motion.li
              key={i}
              transition={{ duration: 0.3 }}
              whileTap={{ y: 10 }}
              
            >
              <h3 className={style.subtitle}>{title}</h3>
              <div onClick={() => setIsActive(src)} className={isActive===src?style.group_active: style.group}>
                <LazyLoadImage className={style.img} src={src} alt={title} />
                <p className={style.used_text}>{used}</p>
                <p className={style.orange_text}>{position}</p>
                <ul className={style.textList}>
                  {textList.map((el, i) => (
                    <li key={i} className={style.item}>
                      <p className={style.text}>{el}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </ul>

      {/* ------------------------------------------------------------------------------ */}

      <motion.div
        className={style.bot_wrap}
       
      >
        
          <motion.img
            key={isActive}
            initial={{ y: '-32px', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            src={isActive}
            whileHover={{ scale: 1.01 }}
            className={style.main_img}
            alt={isActive}
          />
        

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
    </motion.div>
  );
};
