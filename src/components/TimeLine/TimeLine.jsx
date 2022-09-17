import style from './TimeLine.module.css';

export const TimeLine = () => {
    const timeLineContent =[{year: '1994', text:'i bored in Piski-Ritchitski'},
    {year: '1994', text:'i bored in Piski-Ritchitski', id: 1},
    {year: '1994', text:'i bored in Piski-Ritchitski', id: 2},
    {year: '1994', text:'started looking for a job', id: 3},
]
  return (
    <div className={style.container}>
      <ul className={style.timeLine_list}>
        {timeLineContent.map(({text, year, id })=>{
            return(
                <li className={style.timeLine_item} key={id}>
                    {/* <div className={style.timeLine_group}> */}
                    <p className={style.timeLine_year} >{year} →</p>
                    <p className={style.timeLine_text}>{text}</p>
                   
                </li>
            )
        })}
      </ul>
      <div className={style.line}></div>
      <ul className={style.timeLine_listBottom}>
      {timeLineContent.map(({text, year, id })=>{
            return(
                <li className={style.timeLine_itemBottom} key={id}>
                    {/* <div className={style.timeLine_group}> */}
                    <p className={style.timeLine_year} >{year} →</p>
                    <p className={style.timeLine_text}>{text}</p>
                   
                </li>
            )
        })}
      </ul>
    </div>
  );
};
