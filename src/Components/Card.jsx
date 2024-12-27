



import styles from './Card.module.css'

export const Card = ({ id, title, price, description, category, image }) => {
    // console.log(Data);

    return (
        <div className={styles.divmain}>
            <div className={styles.divcontainer}>
                <h1>{id}</h1>
                <img className={styles.img} src={image} />
                <h2>price = {price} </h2>
                <h3>{title}</h3> 
                <p>{description}</p>
                <h3>{category}</h3>
                {/* <h3>count</h3> */}
            </div>
        </div>
    )
}


