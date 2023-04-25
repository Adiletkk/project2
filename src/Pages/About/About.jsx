import React from "react";
import css from "./About.module.scss";
import image from "../../assets/Image/about_image_first.png";
import image2 from "../../assets/Image/about_image_last.png";
import avatar from "../../assets/icon/Avatar.png";
import facebook from "../../assets/icon/facebook.png";
import instagram from "../../assets/icon/instagram.png";
import twitter from "../../assets/icon/twitter.png";
import ins from "../../assets/icon/in.png";
import search from "../../assets/icon/search_header.png";
import dot from "../../assets/icon/dot.png";
import facebook_small from "../../assets/icon/facebook_small.png";
import instagram_small from "../../assets/icon/li_small.png";
import li_small from "../../assets/icon/facebook_small.png";
import twitter_small from "../../assets/icon/twitter_small.png";
import more_card1 from "../../assets/icon/more_card1.png";
import more_card2 from "../../assets/icon/more_card2.png";
import more_card3 from "../../assets/icon/more_card3.png";
import more_card4 from "../../assets/icon/more_card4.png";
import bigcard from "../../assets/icon/bigcard.png";

function About() {
  return (
    <div className={css.wrapper}>
      <div className={css.all_tegs}>
        <div className={css.center}>
          <div className={css.about_center}>
            <div>
              <h1>
                Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                augue ac venenatis condimentum, sem libero volutpat nibh, nec
                pellentesque velit pede quis nunc. Phasellus viverra nulla ut
                metus varius laoreet. Praesent egestas tristique nibh.
              </h1>
            </div>
            <div>
              <p>
                ellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                augue ac venenatis condimentum, sem libero volutpat nibh, nec
                pellentesque velit pede quis nunc. Phasellus viverra nulla ut
                metus varius laoreet. Praesent egestas tristique nibh.
              </p>
            </div>

            <div>
              <p id={css.text_id}>
                Donec posuere vulputate arcu. Quisque rutrum.
              </p>
            </div>
            <div>
              <p>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum
                ullamcorper mauris at ligula. Pellentesque posuere. Phasellus a
                est. Suspendisse pulvinar, augue ac venenatis condimentum, sem
                libero volutpat nibh, nec pellentesque velit pede quis nunc.
                Phasellus viverra nulla ut metus varius laoreet . Praesent
                egestas tristique nibh.
              </p>
            </div>
          </div>
          <div className={css.image}>
            <img src={image} alt="" />
          </div>
          <div className={css.about_center}>
            <div>
              <h1 id={css.text_id}>Curabitur suscipit suscipit tellus</h1>
              <p>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                vestibulum aliquam leo. Nam commodo suscipit quam . Vestibulum
                ullamcorper mauris at ligula.
              </p>
            </div>
            <div>
              <h1 id={css.text_id}>Nullam accumsan lorem in</h1>
              <p>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                vestibulum aliquam leo. Nam commodo suscipit quam . Vestibulum
                ullamcorper mauris at ligula.
              </p>
            </div>
          </div>
          <div className={css.dot}>
            <div>
              <img src={dot} alt="" />
            </div>
            <div>
              <h1>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                vestibulum aliquam leo.
              </h1>
            </div>
          </div>
          <div className={css.image}>
            <img src={image2} alt="" />
          </div>
          <div className={css.about_center}>
            <p>
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam l eo. Nam commodo suscipit quam. Vestibulum ullamcorper
              mauris at ligula. Pellentesque posuere. Phasellus a est.
              Suspendisse pulvinar, augue ac venenatis condimentum, sem libero
              volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus
              viverra nulla ut metus varius laoreet. Praesent egestas tristique
              nibh. Donec posuere vulputate arcu. Quisque rutrum. Curabitur
              vestibulum aliquam leo. Nam commodo su scipit quam. Vestibulum
              ullamcorper mauris at ligula.
            </p>
          </div>
          <div className={css.tegs}>
            <div className={css.tegs_corect}>
              <p>Tags:</p>
              <div>
                <p id={css.color}>Development</p>
              </div>
              <div>
                <p id={css.color}>Marketing</p>
              </div>
              <div>
                <p id={css.color}>HR & Recruting</p>
              </div>
              <div>
                <p id={css.color}>Design</p>
              </div>
              <div>
                <p id={css.color}>Management</p>
              </div>
            </div>
          </div>
          <div className={css.share}>
            <div>
              <p>Share:</p>
            </div>
            <div className={css.wrap}>
            <div className={css.facebook_small}>
              <div>
                <img src={facebook_small} alt="" />
              </div>
              <div>
                <p>Facebook</p>
              </div>
            </div>
            <div className={css.instagram_small}>
              <div>
                <img src={instagram_small} alt="" />
              </div>
              <div>
                <p>Instagram</p>
              </div>
            </div>
            <div className={css.li_small}>
              <div>
                <img src={li_small} alt="" />
              </div>
              <div >
                <p>LinkedIn</p>
              </div>
            </div>
            <div className={css.twitter_small}>
              <div>
                <img src={twitter_small} alt="" />
              </div>
              <div>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          </div>
          <div className={css.footer}>
            <div className={css.left_endl}>
              <img src={avatar} alt="" />
            </div>
            <div className={css.colum}>
            <div className={css.center_endl}>
              <h1>Courtney Henry</h1>
              <p>Curator of Marketing Course</p>
              <p>
                Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
                Maecenas u llamcorper, dui et placerat feugiat, eros pede varius
                nisi, condimentum viverra felis nunc et lorem..
              </p>
            </div>
            </div>
            <div className={css.right_endl}>
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={ins} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className={css.right_last}>
          <div>          <div className={css.top_avatar}>
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <p>Courtney Henry</p>
              <p>Curator of Marketing Course</p>
            </div>
          </div>
          <div className={css.endl_icon}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={ins} alt="" />
            <img src={twitter} alt="" />
          </div>
          <div className={css.input_text}>
            <img src={search} alt="" srcset="" />
            <input type="text" placeholder="search" />
          </div>
          <div className={css.text}>
            <h1>Categories</h1>
            <div>
              <ul>
                <li>Marketing</li>
                <li>Community</li>
                <li>Tutorials</li>
                <li>Business</li>
                <li>Management</li>
              </ul>
            </div>
          </div>
          <div className={css.card}>
            <div>
              <h1>Recent Posts</h1>
            </div>
            <div className={css.card_more}>
              <div>
                <img src={more_card1} alt="" />
              </div>
              <div className={css.text_card}>
                <div>
                  <p>
                    erstanding color theory: the color wheel and finding...{" "}
                  </p>
                </div>
                <div>
                  <p> November 7, 2017 * 8 min read </p>
                </div>
              </div>
            </div>
            <div className={css.card_more}>
              <div>
                <img src={more_card2} alt="" />
              </div>
              <div className={css.text_card}>
                <div>
                  <p>to design a product that can grow itself 10x in year </p>
                </div>
                <div>
                  <p> October 24, 2018 8 min read </p>
                </div>
              </div>
            </div>
            <div className={css.card_more}>
              <div>
                <img src={more_card3} alt="" />
              </div>
              <div className={css.text_card}>
                <div>
                  <p> Any mechanical keyboard enthusiasts in design?</p>
                </div>
                <div>
                  <p> November 28, 2015 *8 min read</p>
                </div>
              </div>
            </div>
            <div className={css.card_more}>
              <div>
                <img src={more_card4} alt="" />
              </div>
              <div className={css.text_card}>
                <div>
                  <p>
                    Yo Reddit! What’s a small thing that anyone can do at
                    nearly...
                  </p>
                </div>
                <div>
                  <p> May 29, 2017 *8 min read </p>
                </div>
              </div>
            </div>
          </div>

          <div className={css.bottom}>
            <div className={css.color_h1}>
              <h1>Popular Tags</h1>
            </div>
            <div className={css.flex}>
              <div className={css.between}>
                <p>
                  <p id={css.color}>Marketing</p>
                </p>
                <p>
                  <p id={css.color}>Development</p>
                </p>
                <p>
                  <p id={css.color}>Banking</p>
                </p>
              </div>
              <div className={css.between}>
                <p>
                  <p id={css.color}>HR & Recruting</p>
                </p>
                <p>
                  <p id={css.color}>Design</p>
                </p>
                <p>
                  <p id={css.color}>Management</p>
                </p>
              </div>
              <div className={css.between}>
                <p>
                  <p id={css.color}>Management</p>
                </p>
                <p>
                  <p id={css.color}>Community</p>
                </p>
                <p>
                  <p id={css.color}>Tutorials</p>
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={bigcard} alt="" />
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default About;
