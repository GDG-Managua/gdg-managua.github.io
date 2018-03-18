import { h, Component } from "preact";
import LogoImg from "../../assets/logo.png";
import style from "./style";

export default class Home extends Component {
  render() {
    return (
      <div className={style.intro}>
        <div className={style.intro__banner}>
          <img src={LogoImg} />
          <ul className={style.intro__nav}>
            {/* <li>
              <a href="https://www.meetup.com/es-ES/gdgmanagua/" target="_blank">
                Meetup
              </a>
            </li> */}
            <li className={style.link_wrapper}>
              <a className={style.link} href="/events">
                <strong>E</strong>vents
              </a>
            </li>
            <li className={style.link_wrapper}>
              <a className={style.link} href="/organizers">
                <strong>O</strong>rganizers
              </a>
            </li>
            <li className={style.link_wrapper}>
              <a className={style.link} href="/sponsors">
                <strong>S</strong>ponsors
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
