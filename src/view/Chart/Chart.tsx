import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts'
import styles from './Chart.module.scss'
import { motion } from 'framer-motion'

const data = [
    {
      name: 'Неделя',
      prefix: '$',
      uv: 300,
      pv: 1000,
      amt: 1000,
    },
    {
      name: 'Месяц',
      prefix: '$',
      uv: 700,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '6 Месяцев',
      prefix: '$',
      uv: 1500,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '1 Год',
      prefix: '$',
      uv: 4000,
      
    },
  ];

export const Chart = () => {
    return (
        <motion.div 
          className={styles.wrapper}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 1, once: true }}
        >
        <div>
          <h2 className={styles.title}>Рост Дохода Моих Учеников <strong>$</strong></h2>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" tick={{ fill: '#fff' }} />
            <YAxis tickFormatter={(value) => `$${value}`} tick={{ fill: '#fff' }} />
            <Tooltip />
            <Area
              type="monotone" 
              dataKey="uv" 
              stroke="#901cfc" 
              fill="#8706dd" 
            />
          </AreaChart>
        </ResponsiveContainer>
        </motion.div>
      );
}
