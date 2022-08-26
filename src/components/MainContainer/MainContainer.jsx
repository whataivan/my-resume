import style from '../MainContainer/MainContainer.module.css';

//--------------------------------------------
export const MainContainer = ({children}) => {
  // const [isActive, setIsActive] = useState(1);
 
  return (
    <div className={style.backdrop}>
      {children}
    </div>
  );
};
