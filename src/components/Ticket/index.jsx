import imgtrayecto from "../../assets/icons/trayecto3.svg";
import imgchulito from "../../assets/icons/check.svg";
import imgnube from "../../assets/icons/airline3.svg";
import imgmaleta from "../../assets/icons/bag.svg";
import imgavion from "../../assets/icons/landing-airplane.svg";
import imgavion2 from "../../assets/icons/logo-white.svg";

import "./styles.scss";

const Ticket = () => {
  return (
    <div className="ticket-container">
      <div className="ticket-container__principal--title-container">
        <h1>My Booking</h1>
      </div>
      <div className="ticket-container__img--trayecto-container">
        <div className="ticket-container__img--trayecto">
          <img src={imgtrayecto} alt="" />
          <img src={imgtrayecto} alt="" />
        </div>
      </div>
      <div className="ticket-container__info--trayecto">
        <span className="booking">Booking</span>
        <span className="purchase">Purchase</span>
        <span className="get-your-e-ticket">Get yout E-ticket</span>
      </div>
      <div className="ticket-container__booked-sucessflly">
        <img src={imgchulito} alt="" />
        Your flight is booked sucessflly!
      </div>
      <div className="ticket-container__info--booked-ticket">
        Present E-ticket and valid identification at check-in
      </div>
      <div className="ticket-container__ticket-container">
        <div className="ticket-container__ticket">
          <div className="ticket-container__cloudy--airlines">
            <img src={imgnube} alt="" />
            <h3>Cloudy Airlines</h3>
            <div className="ticket-container__bag--booton">
              <span>
                <img src={imgmaleta} alt="" />
              </span>
              <div className="kg">2x23Kg</div>
              <div className="kg">1x7Kg</div>
            </div>
          </div>
          <div className="ticket-container__passenger">
            <span>Passenger: </span>ANNA ANDERSON
          </div>
          <div className="ticket-container__economy">
            <img src={imgavion} alt="" />
            <span>Economy</span>
          </div>
          <div className="ticket-container__info--ticket">
            <div className="ticket-container__envoltura">
              <div className="infovuelos">
                <div className="detalleinfovuelos">
                  <span className="hora">23:15</span>
                  <span className="ciudad">Houston (HOU)</span>
                  <span className="fecha">9 Feb,2023</span>
                </div>
                <div className="detalleinfovuelos">
                  <span className="hora">1:25</span>
                  <span className="ciudad">Las Vegas (LAS)</span>
                  <span className="fecha">10 Feb,2023</span>
                </div>
              </div>
              <div className="ticket-container__img--trayecto1">
                <img src={imgtrayecto} alt="" />
              </div>
              <div className="ticket-container__info--trayecto1">
                <span>2h10m</span>
              </div>
            </div>
            <div className="ticket-container__barcode1">
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
            </div>
          </div>

          <div className="ticket-container__info--final">
            <span className="fecha">check-in: 10th Feb 2023 at 1:40</span>
            <span className="local">*All time displayed are local</span>
          </div>
        </div>
        <div className="ticket-container__E--flight-container">
          <div className="ticket-container__E--flight">
            <span>
              <img src={imgavion2} alt="" />
              <h5>E-flight</h5>
            </span>
            <span>Booking ID</span>
            <span>65980165</span>
            <span>Airline Booking code</span>
            <span>CA-6018</span>
            <div className="barcode">
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ticket-container__ticket-container">
        <div className="ticket-container__ticket">
          <div className="ticket-container__cloudy--airlines">
            <img src={imgnube} alt="" />
            <h3>Cloudy Airlines</h3>
            <div className="ticket-container__bag--booton">
              <span>
                <img src={imgmaleta} alt="" />
              </span>
              <div className="kg">2x23Kg</div>
              <div className="kg">1x7Kg</div>
            </div>
          </div>
          <div className="ticket-container__passenger">
            <span>Passenger: </span>ANNA ANDERSON
          </div>
          <div className="ticket-container__economy">
            <img src={imgavion} alt="" />
            <span>Economy</span>
          </div>
          <div className="ticket-container__info--ticket">
            <div className="ticket-container__envoltura">
              <div className="infovuelos">
                <div className="detalleinfovuelos">
                  <span className="hora">2:25</span>
                  <span className="ciudad">Las vegas (LAS)</span>
                  <span className="fecha">10 Feb,2023</span>
                </div>
                <div className="detalleinfovuelos">
                  <span className="hora">7:40</span>
                  <span className="ciudad">Los Angeles (LAX)</span>
                  <span className="fecha">10 Feb,2023</span>
                </div>
              </div>
              <div className="ticket-container__img--trayecto1">
                <img src={imgtrayecto} alt="" />
              </div>
              <div className="ticket-container__info--trayecto1">
                <span>5h15m</span>
              </div>
            </div>
            <div className="ticket-container__barcode1">
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
            </div>
          </div>

          <div className="ticket-container__info--final">
            <span className="fecha">check-in: 10th Feb 2023 at 1:40</span>
            <span className="local">*All time displayed are local</span>
          </div>
        </div>
        <div className="ticket-container__E--flight-container">
          <div className="ticket-container__E--flight">
            <span>
              <img src={imgavion2} alt="" />
              <h5>E-flight</h5>
            </span>
            <span>Booking ID</span>
            <span>65980165</span>
            <span>Airline Booking code</span>
            <span>CA-6018</span>
            <div className="barcode">
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bargruesa"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
              <div className="bardelgada"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="button">
        <button>Send to my e-mail</button>
      </div>
    </div>
  );
};

export default Ticket;
