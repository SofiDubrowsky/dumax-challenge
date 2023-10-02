import style from "./Nav.module.css";
import logo from "../../assets/Dumax logo.png";
import avatar from "../../assets/user_blanco.png";

const Nav = () => {

  return (
    <div className={style.container}>

      <div className={style.logo}>
        <img src={logo} alt="logo" className={style.img} />
        <h4>Reportes</h4>
      </div>

      <div className={style.user}>
        <img src={avatar} alt="Avatar" className={style.avatarImage} />
        <h4>Dumax Utilit...</h4>
      </div>

    </div>
  );
};
export default Nav;
