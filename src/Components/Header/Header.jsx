import React, { useContext } from 'react'
import NotificationIcon from '../../Assets/Images/Notification.png'
import HeaderAvatar from '../../Assets/Images/icon-личныйкабинет.png'
import "./Header.css"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Context } from '../../Context/CountContext';
export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }; 
    
    const {orderFoods,setOrderFoods} = useContext(Context);
     
    return (
        <header className='header'>
            <div className="header-right">
                <button type='button' className="header-notification">
                    <img src={NotificationIcon} alt="dsd" />
                    {orderFoods.length > 0 && (
                       <>{orderFoods.map((food)=> (  
                         <span className='notification-top'>{food.count}</span>
                       ) )}</> )}
                        </button>
                <div className="header-profile">
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="header-btn"
                    >
                        <p className="header-text">
                            Личный кабинет
                        </p>
                        <img src={HeaderAvatar} alt="HeaderAvatar" className="header-avatar" />
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>

        </header>
    )
}
