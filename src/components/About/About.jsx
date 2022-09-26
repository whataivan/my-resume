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
import { motion } from 'framer-motion';
import { HobbiesList } from 'components/HobbiesList/HobbiesList';
//========================================
export const About = () => {
  const screenWidth= window.screen.width
  const educationAndWork = [
    {
      title: 'Education',
      img: [kpiFirst, kpiTwo, kpiThree],
      text: `I studied java, assembler, microprocessors at Kyiv Polytechnic Institute. My faculty is aerospace systems.
       My specialization is metrology and measurements technologies.
       At the institute, I got a lot of life experience and met many friends important for my future.`,
      range: '2011-2017',
      subtitle: 'Kyiv Polytechnic Institute',
      id: 1
    },
    {
      title: 'Work',
      img: [workFirst, workTwo, workThree],
      text: `Position: sales manager, In this company i learned how negotiate with different
      types of clients, hosted trading and educational webinars. Сreated training scripts for managers and worked in a team.`,
      range: '2017-2022',
      subtitle: '24Option Trading company',
      id: 2
    },
  ];
  const settings = {
    lidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    fade: true,
    autoplay: true,
    autoplaySpeed: 4500,
  };
  return (
    <div className={style.container}>
      <HobbiesList />
      <div className={style.rightSideWrap}>
        <ul className={style.topSide_list}>
          

          {educationAndWork.map(({ title, text, range, img, subtitle, id }) => (
            <motion.li className={style.topSide_item} key={id}  initial={{backdropFilter: "blur(0px)"}} animate={{backdropFilter: "blur(50px)"}} transition={{duration: 1}} >
              {screenWidth>=1200&&<Slider {...settings} className={style.slider}>
                {img.map(e => {
                  return (
                    
                    <div  key={e}>
                      <img className={style.topSide_image} src={e} alt={e} />
                    </div>
                  );
                })}
              </Slider>}

              <h3 className={style.topSide_title}>{title}</h3>

              <h4 className={style.topSide_subtitle}>{subtitle}</h4>
              <p className={style.topSide_range}>{range}</p>

              <p className={style.topSide_text}>{text}</p>
            </motion.li>
          ))}
        </ul>
        <TimeLine />
      </div>
    </div>
  );
};
