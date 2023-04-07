import React from "react";
import css from "./Documentation.module.scss";

function Documentation() {
  return (
    <div className={css.wrapper}>
        <div className={css.center}>
      <div className={css.left}>
        <div className={css.text_top}>
          <p>
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
        </div>
        <div className={css.text_center}>
          <h1>P</h1>
          <p>
            ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
            venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
        </div>
        <p>Donec posuere vulputate arcu. Quisque rutrum.</p>
        <div className={css.text_bottom}>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
          <p>
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volut pat nibh, nec
            pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus
            varius laoreet. Praesent eg estas tristique nibh.
          </p>
        </div>
      </div>
      <div className={css.right}>
        <div className={css.right_top}>
          <div>
            <img src="" alt="" />
          </div>
          <div className={css.text_top}>
            <h3>Courtney Henry</h3>
            <p>Curator of Marketing Course</p>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Documentation;
