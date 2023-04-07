import React from 'react'
import scss from './WeWork.module.scss'

function WeWork() {
    return (
        <div>
            <div className='container'>
                <div className={scss.wrapper}>
                    <h1>We Work Worldwide.</h1>
                    <p>We'd love to talk about how we can help you.</p>
                </div>
            </div>
        </div>
    )
}

export default WeWork