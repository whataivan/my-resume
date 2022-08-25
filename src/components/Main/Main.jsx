import style from '../Main/Main.module.css';
import me from '../../images/me.png';
import resume from '../../files/Ivan_Pikun_junior_react.pdf'
import { useSelector } from 'react-redux/es/exports';
import { getActive } from 'redux/actice-selectors';



export const Main = () => {
  
  const isActive = useSelector(getActive)
  console.log(isActive);
  return (
    // <SwitchTransition>
    // <CSSTransition
    //       in={isActive === 1}
    //       timeout={500}
    //       classNames='item'
    //       unmountOnExit
    //     >

    <div className={style.main}>
      <img className={style.me_img} src={me} width="200" alt="Me" />
      <div className={style.group}>
        <h3 className={style.title}>Hello, my name is Ivan Pikun.</h3>
        <h4 className={style.subtitle}>Front-end developer</h4>
        <p className={style.text}>
          I am Front-end junior developer. High motivation person with a good
          knowledge of modern development technologies (includes latest version
          of ES6, Redux Toolkit, UI libraries e.t.c) Have strong communication
          skills. Host vide spectre of webinars, have leadership attitudes.
          Reliable, organized, and ready to take responsibility and evolve in my
          specialization.
        </p>
        <button className={style.btn} type='button'><a className={style.link} href={resume} download>DOWNLOAD CV</a></button>
      </div>
    </div>
    // </CSSTransition>
    // </SwitchTransition>
  );
};
