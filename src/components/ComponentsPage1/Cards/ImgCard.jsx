import styles from "./ImgCard.module.scss"

const ImgCard = (props) =>{
    <div className={props.ImgCard}>
        <div className={props.Bottomdiv}>
        <h1>{props.title}</h1>
    <div className={props.asia} >
        <img src={props.Location} alt={props.ImgCard} />
        <a>{props.text}</a>
    </div>
    </div>
    </div>
};
export default ImgCard;





































