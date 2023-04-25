import styles from "./ColorCards.module.scss"

const ColorCards = (props) =>{
    return(
 <div className={styles.ColorCards} >
<div className={styles.Img}>
    <img src={props.ImgAlt} alt={props.Alt} />
</div>
<div className={styles.righttext}>
    <h1>{props.ChangeParagraph}</h1>
    <div className={styles.Data}>
        <a>{props.title}</a>
        <ellipse className={styles.ellipse} />
        <a>8 min read</a>
      </div>
</div>

 </div>
    )
}
export default ColorCards