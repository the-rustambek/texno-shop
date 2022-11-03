import React from 'react'
import NotificationIcon from '../../Assets/Images/Notification.png'
import HeaderAvatar from '../../Assets/Images/icon-личныйкабинет.png'
import "./Header.css"
export default function Header() {
    return (
        <header className='header'>
            <div className="header-right">
                <button type='button' className="header-notification">
                    <img src={NotificationIcon} alt="dsd" />
                    <span className='notification-top'>12</span>
                </button>
                <div className="header-profile">
                    <button className="header-btn">
                        <p className="header-text">
                            Личный кабинет
                        </p>
                        <img src={HeaderAvatar} alt="HeaderAvatar" className="header-avatar" />
                    </button>
                </div>
            </div>

        </header>
    )
}
