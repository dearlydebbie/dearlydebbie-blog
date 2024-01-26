import CardList from "@/Components/CardList/CardList"
import styles from "./blogPage.module.css"
import Menu from "@/Components/Menu/Menu"

const BlogPage = () => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>Style Blog</h1>
          <div className={styles.content}>
              <CardList />
              <Menu/>
          </div>
    </div>
  )
}

export default BlogPage