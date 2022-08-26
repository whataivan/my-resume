import style from '../Portfolio/Portfolio.module.css';
import kapusta from '../../images/kapusta.jpg';
import filmoteka from '../../images/filmoteka.jpg';
import finder from '../../images/finder.jpg';
import helleng from '../../images/helleng.jpg';
export const Portfolio = () => {
  return (
    <div className={style.container}>
      {/* <h2>My portfolio</h2> */}
      <ul className={style.list}>
        <li className={style.list_item}>
          <h3 className={style.subtitle}>Filmoteka</h3>
          <div className={style.group}>
          <img className={style.img} src={kapusta} alt="kapusta" />
          <p className={style.text}></p>
          </div>
        </li>
        <li className={style.list_item}>
          <h3 className={style.subtitle}>Kapu$ta</h3>
          <div className={style.group}>
          <img className={style.img} src={filmoteka} alt="filmoteka" />
          <p className={style.text}></p>
          </div>
        </li>
        <li className={style.list_item}>
        
          <h3 className={style.subtitle}>Image finder</h3>
          <div className={style.group}>
          <img className={style.img} src={finder} alt="finder" />
          <p className={style.text}></p>
          </div>
        </li>
        <li className={style.list_item}>
          <h3 className={style.subtitle}>Hellenglish</h3>
          <div className={style.group}>
          <img className={style.img} src={helleng} alt="helleng" />
          <p className={style.text}></p>
          </div>
        </li>
        <div>
          <img src="" alt="" />
        </div>
      </ul>
    </div>
  );
};
