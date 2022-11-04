import React from 'react'
// import dashboardIcon from '../../Assets/Svg/document3.svg'
import "./Dashboard.css";
import dashboardIcon1 from '../../Assets/Svg/Document.svg'
import dashboardIcon2 from '../../Assets/Svg/document5.svg'
import dashboardIcon3 from '../../Assets/Svg/document4.svg'
import dashboardIcon4 from '../../Assets/Svg/document2.svg'
import HomeSvg from '../../Assets/Svg/HomeSvg';
import { Link } from 'react-router-dom';
 

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <div className="dashboard-top">
            <a  className="dashboard-logo" href="/">Logo</a>
        </div>
        <div className="dashboard-bottom">
            <ul className="dashboard-list">
                <li className="dashboard-item">
                    <Link  className="dashboard-link" to="/">
                    <HomeSvg />
                    <p className="dashboard-text">
                    Главная
                    </p>
                    </Link>
                </li>
                <li className="dashboard-item">
                    <Link  className="dashboard-link" to="/zakaz">
                    <img src={dashboardIcon1} alt="" className="dashboard-icon" />
                    <p className="dashboard-text">
                    Заказы
                    </p>
                    </Link>
                </li>
                <li className="dashboard-item">
                    <Link  className="dashboard-link" to="/tovar">
                    <img src={dashboardIcon2} alt="" className="dashboard-icon" />
                    <p className="dashboard-text">
                    Товары
                    </p>
                    </Link>
                </li>
                <li className="dashboard-item">
                    <Link  className="dashboard-link" to="/otziv">
                    <img src={dashboardIcon3} alt="" className="dashboard-icon" />
                    <p className="dashboard-text">
                    Отзывы
                    </p>
                    </Link>
                </li>
                <li className="dashboard-item">
                    <Link  className="dashboard-link" to="/products">
                    <img src={dashboardIcon4} alt="" className="dashboard-icon" />
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
