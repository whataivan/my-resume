
import style from '../About/About.module.css'
export const About=({text})=>{



    return (
        <div className={style.container}>
            <h1>{text}</h1>
        </div>
    )
}