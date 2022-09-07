import style from './Skills.module.css';
import { motion } from 'framer-motion';
import { Reorder } from "framer-motion"
import { useState } from 'react';
export const Skills = () => {
  const [techSkills, setTechSkills] = useState([
    'HTML, CSS',
    'SASS',
    'JavaScript',
    'React',
    'ReduxToolKit',
    'Material Ui',
    'Bootstrap',
    'Styled-components',
    'Axios',
    'Intersection Observer',
    'Transition Group',
    'Framer motion',
    'Formik',
  ])
  const [softSkills, setSoftSkills] = useState([
    'Hardworking',
    'Communicative',
    'Confident',
    'Cooperative',
    'Eager to learn',
    'Reliable',
    'Calm',
    'Articulate',
    'Organized',
    'Perceptive',
    'Persuasive',
    'Punctual',
    'Quiet'
  ])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className={style.container}
    >
      <div className={style.list_wrap}>
        <h3 className={style.title}>Tech Skills</h3>
       
        <Reorder.Group axis='y' as='ul' className={style.list} values={techSkills} onReorder={setTechSkills}>
          {techSkills.map((el, i) => {
            return (
              
              <Reorder.Item value={el} key={el}  className={style.item}>
                {' '}
                <p className={style.text}>{el}</p>
              </Reorder.Item>
            );
          })}
          </Reorder.Group>
       
      </div>
      <div className={style.list_wrap}>
        <h3 className={style.title}>Soft Skills</h3>
        <Reorder.Group className={style.list} axis='y' as='ul' values={softSkills}  onReorder={setSoftSkills}>
          {softSkills.map((el, i) => {
            return (
              <Reorder.Item value={el} key={el}  className={style.item}>
                {' '}
                <p className={style.text}>{el}</p>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </div>
    </motion.div>
  );
};
