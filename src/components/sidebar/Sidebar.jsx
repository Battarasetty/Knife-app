import './sidebar.scss';
import GridViewIcon from '@mui/icons-material/GridView';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <ul>
          <NavLink to="/" style={{textDecoration: 'none', color: '#5541D7'}}>
          <li>
            <GridViewIcon className="icon" />
          </li>
          </NavLink>
          <NavLink to="/users" style={{textDecoration: 'none', backgroundcolor: '#5541D7'}}>
          <li>
            <EqualizerOutlinedIcon className="icon" />
          </li>
          </NavLink>
          <NavLink to="/new" style={{textDecoration: 'none', backgroundcolor: '#5541D7'}}>
          <li>
            <SupervisedUserCircleOutlinedIcon className="icon" />
          </li>
          </NavLink>
          <li>
            <Inventory2OutlinedIcon className="icon" />
          </li>
          <li>
            <LocalPharmacyIcon className="icon" />
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <SettingsOutlinedIcon className='icon' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar