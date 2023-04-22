import React from 'react'
import scss from './WeWork.module.scss'

function WeWork() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <h1>We Work Worldwide.</h1>
                <p>We'd love to talk about how we can help you.</p>
            </div>
        </div>
    )
}

export default WeWork