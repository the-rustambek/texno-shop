import React from 'react'
// import dashboardIcon from '../../Assets/Svg/document3.svg'
import "./Dashboard.css";
 
import HomeSvg from '../../Assets/Svg/HomeSvg';
import { Link, useLocation, useParams } from 'react-router-dom';
import Zakaz from '../../Assets/Svg/zakaz';
import Tovar from '../../Assets/Svg/tovar';
import Otziv from '../../Assets/Svg/otziv';
import Oformit from '../../Assets/Svg/oformit';


export default function Dashboard() {
      const slug = useLocation().pathname;
     
    
  return (
    <div className='dashboard'>
        <div className="dashboard-top">
            <a  className="dashboard-logo" href="/">Logo</a>
        </div>
        <div className="dashboard-bottom">
            <ul className="dashboard-list">
                <li className="dashboard-item">
                    <Link  className={`dashboard-link ${slug==="/" ? "dashboard-link-active" : ""}`} to="/" >
                    <HomeSvg />
                    <p className="dashboard-text">
                    Главная
                    </p>
                    </Link>
                </li>
                <li className="dashboard-item">
                    <Link  className={`dashboard-link ${slug==="/zakaz" ? "dashboard-link-active" : ""}`}  to="/zakaz">
 <Zakaz />
                     <p className="dashboard-text">
                    Заказы
                    </p>
                    </Link>
                </li>
                <li className="dashboard-item">
                    <Link   className={`dashboard-link ${slug==="/tovar" ? "dashboard-link-active" : ""}`}  to="/tovar">
<Tovar />
                    <p className="dashboard-text">
                    Товары
                    </p>
                    </Link>
                </li>
                <li className="dashboard-item">
                    <Link   className={`dashboard-link ${slug==="/otziv" ? "dashboard-link-active" : ""}`}  to="/otziv">
<Otziv />                 <p className="dashboard-text">
                    Отзывы
                    </p>
                    </Link>
                </li>
                <li className="dashboard-item">
                    <Link  className={`dashboard-link ${slug==="/products" ? "dashboard-link-active" : ""}`}  to="/products">
                    <Oformit />  
                     <p className="dashboard-text">
                    Оформить заказ
                    </p>
                    </Link>
                </li>
                
            </ul>
        </div>
    </div>
  )
}
