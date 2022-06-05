import './navbar.scss';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="shade1">
        <div className="shade2"></div>
        <p className='die'>Dazzie</p>
      </div>
      <div className="wrapper">
        <div className="items">
          <NotificationsNoneOutlinedIcon />
        </div>
        <div className="blur">
          <img src="https://images.pexels.com/photos/12082485/pexels-photo-12082485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="avatar"
        />
        </div>
        <div className="txt">
          <span className='nahm'>B.Harish</span>
          <span className='paisa'>Cashier</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar