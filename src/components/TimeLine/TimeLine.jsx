import style from './TimeLine.module.css';

export const TimeLine = () => {
  const timeLineContent = [
    { year: '1994 →', text: 'born in Piski-Ritchitski village', id: 1 },
    { year: '2011 →', text: 'started studing in KPI ', id: 2 },
    
    { year: '2022 →', text: 'started Go it Front-end courses', id: 3 },
  ];

  const timeLineContentBottom = [
    { year: '2000 →', text: 'started school in my village', id: 1 },
    
    { year: '2017 →', text: 'started working in 24Option', id: 2 },
    { year: '2022 →', text: 'started looking for a job in IT', id: 3 },
  ];
  return (
    <div className={style.container}>
      <ul className={style.timeLine_list}>
        {timeLineContent.map(({ text, year, id }) => {
          return (
            <li className={style.timeLine_item} key={id}>
              {/* <div className={style.timeLine_group}> */}
              <p className={style.timeLine_year}>{year}</p>
              <p className={style.timeLine_text}>{text}</p>
            </li>
          );
        })}
      </ul>
      <div className={style.line}></div>
      <ul className={style.timeLine_listBottom}>
        {timeLineContentBottom.map(({ text, year, id }) => {
          return (
            <li className={style.timeLine_itemBottom} key={id}>
              {/* <div className={style.timeLine_group}> */}
              <p className={style.timeLine_year}>{year}</p>
              <p className={style.timeLine_text}>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
