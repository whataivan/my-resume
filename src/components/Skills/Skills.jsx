import style from './Skills.module.css';
import { motion } from 'framer-motion';
export const Skills = () => {
  const techSkills = [
    'HTML, CSS',
    'SASS',
    'JavaScript.',
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
  ];
  const softSkills = [
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
  ];

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
        <ul className={style.list}>
          {techSkills.map((el, i) => {
            return (
              <motion.li whileHover={{ x: '5px' }} className={style.item}>
                {' '}
                <p className={style.text}>{el}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <div className={style.list_wrap}>
        <h3 className={style.title}>Tech Skills</h3>
        <ul className={style.list}>
          {softSkills.map((el, i) => {
            return (
              <motion.li whileHover={{ scale: 1.03 }} className={style.item}>
                {' '}
                <p className={style.text}>{el}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};
