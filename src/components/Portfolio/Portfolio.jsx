import style from '../Portfolio/Portfolio.module.css';
import kapusta from '../../images/kapusta.jpg';
import filmoteka from '../../images/filmoteka.jpg';
import finder from '../../images/finder.jpg';
import helleng from '../../images/helleng.jpg';
import { useState } from 'react';
export const Portfolio = () => {
  const [isActive, setIsActive] = useState(filmoteka);
  return (
    <div className={style.container}>
      {/* <h2>My portfolio</h2> */}
      <ul className={style.list}>
        <li className={style.list_item}>
          <h3 className={style.subtitle}>Kapu$ta</h3>
          <div onClick={() => setIsActive(kapusta)} className={style.group}>
            <img className={style.img} src={kapusta} alt="kapusta" />
            <p className={style.text}>[React, Redux toolkit, Formik, Axios]</p>
            <p className={style.text}>Position: Team-leader.</p>
            <p className={style.text}>Work with api, create async thunk and custom select.</p>
            <p className={style.text}>Team work, work with git branches.</p>
          </div>
        </li>
        <li className={style.list_item}>
          <h3 className={style.subtitle}>Filmoteka</h3>
          <div onClick={() => setIsActive(filmoteka)} className={style.group}>
            <img className={style.img} src={filmoteka} alt="filmoteka" />
            <p className={style.text}>[HTML, CSS, JS, SASS, Axios]</p>
            <p className={style.text}>Position: Developer.</p>
            <p className={style.text}>Developed reviews section, header and work with local storage.</p>
            <p className={style.text}>Code review, work with git branches.</p>
          </div>
        </li>
        <li className={style.list_item}>
          <h3 className={style.subtitle}>Img finder</h3>
          <div onClick={() => setIsActive(finder)} className={style.group}>
            <img className={style.img} src={finder} alt="finder" />
            <p className={style.text}></p>
          </div>
        </li>
        <li className={style.list_item}>
          <h3 className={style.subtitle}>Hellenglish</h3>
          <div onClick={() => setIsActive(helleng)} className={style.group}>
            <img className={style.img} src={helleng} alt="helleng" />
            <p className={style.text}></p>
          </div>
        </li>
      </ul>
      <div className={style.img_wrap}>
        <img className={style.primary_img} src={isActive} alt="" />
      </div>
    </div>
  );
};
