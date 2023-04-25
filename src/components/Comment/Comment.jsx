import React, { useState } from 'react'
import scss from './Comment.module.scss'
import avatar from '../../assets/icon/Avatar.png'
import starNot from '../../assets/icon/star_notaction.png'
import Rate from '../Rate/Rate'

const UnderComments = () => {
    return (
        <div className={scss.underComment}>
            <div className={scss.underCommentContent}>
                <img src={avatar} alt="" />
                <div className={scss.underCommentText}>
                    <p>Esther Howard</p>
                    <div className={scss.underCommentData}>
                        <p>17 May 2021</p>
                    </div>
                    <div className={scss.underCommentTitle}>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
            <div className={scss.line}></div>
        </div>
    )
}

function Comment() {

    const [isShown, setIsShown] = useState(false)

    const toggleComment = () => {
        setIsShown(!isShown);
    };


    return (
        <div className={scss.wrapper}>
            <div className={scss.action}>
                <img src={avatar} alt="" />
                <div className={scss.comment_text}>
                    <div className={scss.foto}>
                        <p>Kathryn Murphy</p>
                        <Rate />
                    </div>
                    <div className={scss.data}>
                        <p>09 Mar 2020</p>
                    </div>
                    <div className={scss.text}>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className={scss.btn}>
                        <button onClick={toggleComment} className={scss.help}>
                            {isShown ? 'Helpful' : 'Helpful'}
                        </button>
                        {isShown && <UnderComments />}
                        <div className={scss.around}></div>
                        <button className={scss.reply}>Reply</button>
                    </div>
                </div>
            </div>
            <div className={scss.line}></div>
            <div className={scss.miniComment}>
                <div className={scss.wrapperMini}>
                    <img src={avatar} alt="" />
                    <div className={scss.miniCommentContent}>
                        <p>Wade Warren</p>
                        <p className={scss.miniData}>09 Mar 2020</p>
                        <Rate />
                        <p className={scss.miniText}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className={scss.miniBtn}>
                            <button onClick={toggleComment} className={scss.help}>
                                {isShown ? 'Helpful' : 'Helpful'}
                            </button>
                            {isShown && <UnderComments />}
                            <div className={scss.around}></div>
                            <button className={scss.reply}>Reply</button>
                        </div>
                    </div>
                </div>
                <div className={scss.miniLine}></div>
            </div>
        </div>
    )
}

export default Comment