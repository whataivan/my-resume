 import style from '../Portfolio/Portfolio.module.css'
 
 export const Portfolio=()=>{

    return(
        <div>
            <h2>My portfolio</h2>
            <ul>
                <li className={style.list_item}><h3>Kapu$ta</h3></li>
                <li className={style.list_item}><h3>Filmoteka</h3></li>
                <li className={style.list_item}><h3>Image Finder</h3></li>
                <li className={style.list_item}><h3>Hellenglish</h3></li>
                
                
            </ul>
        </div>
    )
 } 