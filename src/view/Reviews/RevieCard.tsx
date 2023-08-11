import styles from './Reviews.module.scss'

interface Props {
  photo: string
  name: string
  review: string
}

export const ReviewCard = ({ data }: { data: Props }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={data.photo} alt="" />
        <h3>{data.name}</h3>
      </div>
      <p>
        {data.review}
      </p>
    </div>
  )
}
