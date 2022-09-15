import kpiFirst from '../../images/about/kpi1.jpg';
import kpiTwo from '../../images/about/kpi2.jpg';
import kpiThree from '../../images/about/kpi3.jpg';
import workOne from '../../images/about/option1.jpg';
import workTwo from '../../images/about/option2.jpg';
import workThree from '../../images/about/option3.jpg';
import style from '../About/About.module.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { motion } from 'framer-motion';
import { HobbiesList } from 'components/HobbiesList/HobbiesList';
//========================================
export const About = () => {
  const educationAndWork = [
    {
      title: 'Education',
      img: [kpiFirst, kpiTwo, kpiThree],
      text: 'something',
    },
    { title: 'Work', img: [workOne, workTwo, workThree], text: 'something' },
  ];
  const settings = {
    lidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <div className={style.container}>
      <HobbiesList />
      <ul className={style.topSide_list}>
        {/* <motion.img transition={{duration: 1}} key={activeImage} initial={{opacity: 0.3}} animate={{opacity: 1}} exit={{opacity:0}} tra className={style.topSide_image} src={activeImage} /> */}

        {educationAndWork.map(({ title, text, img }) => (
          <li className={style.topSide_item}>
            <Slider {...settings} className={style.slider}>
              {img.map(e => {
                return (
                  <div key={e}>
                    <img
                      className={style.topSide_image}
                      src={e}
                      alt={e}
                    />
                  </div>
                );
              })}
            </Slider>
            <h3 className={style.topSide_title}>{title}</h3>

            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
