import styles from "./Card.module.css"

export const Card = ({title, description, image, objectFit = "contain", bgColor = "#fff", onSaibaMais}) => {
    <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} style={{objectFit}} />

        <div className={style.cardContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <button type="button" className={styles.button} onClick={onSaibaMais}>Saiba Mais</button>
        </div>
    </div>

}