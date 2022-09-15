import svg from '../../images/hobbies/symbol-defs.svg';
import style from '../HobbiesList/HobbiesList.module.css';

//----------------------------------
export const HobbiesList = () => {
  const hobbies = [
    { icon: `${svg}#reading`, title: 'reading' },
    { icon: `${svg}#party`, title: 'party' },
    { icon: `${svg}#music`, title: 'music' },
    { icon: `${svg}#gym`, title: 'gym' },
    { icon: `${svg}#tennis`, title: 'tennis' },
    { icon: `${svg}#dancing`, title: 'dancing' },
    { icon: `${svg}#festivals`, title: 'festivals' },
    { icon: `${svg}#scooter`, title: 'driving' },
    { icon: `${svg}#gaming`, title: 'gaming' }
  ];

  return (
    <div className={style.container}>
    <h4  className={style.hobbies_title}>Hobbies</h4>
    
    <ul  className={style.hobbies_list}>
      {hobbies.map(({ icon, title }) => {
        return (
          <li className={style.hobbies_item} key={title}>
            <svg className={style.hobbies_icon} width="25" height="25">
              <use href={icon} />
            </svg>
            <p className={style.hobbies_text}>{title}</p>
          </li>
        );
      })}
    </ul>
    </div>
  );
};
