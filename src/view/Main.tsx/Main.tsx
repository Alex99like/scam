import styles from './Main.module.scss'
import { motion } from 'framer-motion'

export const Main = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.name}>
        <motion.h1 
          className={styles['first-name']}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: 'spring', duration: 1 }}
        >ЕКАТИРИНА</motion.h1>
        <motion.h1 
          className={styles['last-name']}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: 'spring', duration: 1 }}
        >НАГУЛЕВИЧ</motion.h1>
      </div>
      <div style={{ marginTop: 50 }}>
        <motion.img src="/photo.jpg" alt="avatar" 
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', duration: 2, damping: 12 }}
        />
      </div>

      <motion.div 
        className={styles.about}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: 'spring', duration: 1 }}
      >
        <div className={styles.container}>
        <div className={styles.filter}></div>
          <h2>Привет👋</h2>
          <p className={styles.hi}>Я Финансовый Консультант</p>
          <p>Зарабатывайте больше с мной! Я научу вас, как увеличить свой доход и достичь финансовой независимости. Присоединяйтесь к нам и откройте для себя новые возможности! 😊</p>
        </div>
      </motion.div>
    </section>
  )
}
