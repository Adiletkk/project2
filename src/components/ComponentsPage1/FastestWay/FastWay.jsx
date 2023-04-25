import Card from "../Cards/Cards";
import styles from "./FastWay.module.scss";
import "../global/global.scss";
import ticket from "./images/ic_travel_tickets.svg";
import booking from "./images/ic_travel_booking.svg";
import site from "./images/ic_travel_site_visitors.svg";
import verified from "./images/ic_travel_verified_hotels.svg";

function FastWay() {
  return (
    <section className={styles.MainFastWay}>
      
        <div className={styles.Piragraph}>
          <h1>Fastest Way to Book over 450 Great Tours</h1>
          <p>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
          <div className={styles.FastWayCards}>
            <Card
              imageAlt={ticket}
              title="130"
              description="Air tickets sold"
            />
            <Card imageAlt={booking} title="196" description="Tours booked" />
            <Card imageAlt={site} title="10,67k" description="Site visitors" />
            <Card
              imageAlt={verified}
              title="877"
              description="Verified hotels"
            />
          </div>
        </div>
   
    </section>
  );
}
export default FastWay;
