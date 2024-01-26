import Image from "next/image"
import styles from "./singlePage.module.css"
import Menu from "@/Components/Menu/Menu"

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                        <div className={styles.userTextContainer}></div>
                        <span className={styles.username}>Janet Dolittle</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
            </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
                
            </div>
            <div className={styles.content}>
                <div className={styles.post}></div>
                <Menu/>
            </div>
        </div>
  )
}

export default SinglePage