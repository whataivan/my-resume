import kpiFirst from '../../images/about/kpi1.jpg';
import kpiTwo from '../../images/about/kpi2.jpg';
import kpiThree from '../../images/about/kpi3.jpg';
import workFirst from '../../images/about/option1.jpg';
import workTwo from '../../images/about/option2.jpg';
import workThree from '../../images/about/option3.jpg';
import style from '../About/About.module.css';
import Slider from 'react-slick';
import { TimeLine } from 'components/TimeLine/TimeLine';
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
      range: '2011-2017',
      subtitle: 'Kyiv Polytechnic Institute',
    },
    {
      title: 'Work',
      img: [workFirst, workTwo, workThree],
      text: 'something',
      range: '2017-2022',
      subtitle: '24Option Trading company',
    },
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
      <div>
      <ul className={style.topSide_list}>
        {/* <motion.img transition={{duration: 1}} key={activeImage} initial={{opacity: 0.3}} animate={{opacity: 1}} exit={{opacity:0}} tra className={style.topSide_image} src={activeImage} /> */}

        {educationAndWork.map(({ title, text, range, img, subtitle }) => (
          <li className={style.topSide_item}>
            <Slider {...settings} className={style.slider}>
              {img.map(e => {
                return (
                  <div key={e}>
                    <img className={style.topSide_image} src={e} alt={e} />
                  </div>
                );
              })}
            </Slider>

            <h3 className={style.topSide_title}>{title}</h3>

            <h4 className={style.topSide_subtitle}>{subtitle}</h4>
            <p className={style.topSide_range}>{range}</p>

            <p className={style.topSide_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              facere laboriosam porro ad, mollitia dicta ipsam distinctio
              debitis doloribus eligendi deleniti facilis, corrupti eveniet a
              esse fuga dolore quidem soluta!
            </p>
          </li>
        ))}
      </ul>
      <TimeLine/>
      </div>
    </div>
  );
};
