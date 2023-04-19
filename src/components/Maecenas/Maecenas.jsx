import React from 'react'
import scss from './Maecenas.module.scss'


function Maecenas() {

  return (
    <div className='container'>
        <div className={scss.wrapper}>
            <div className={scss.text1}>
                <div className={scss.line}/>
                <h3>Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla.</h3>
            </div>
            <div className={scss.text2}>
                <h4>Fusce convallis metus id felis luctus</h4>
                <p>Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
                    <br/>
                    <br/>
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Maecenas nec odio et ante tincidunt tempus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vestibulum eu odio. Curabitur ullamcorper ultricies nisi.</p>
            </div>
        </div>
    </div>
  )
}

export default Maecenas