import './new.scss';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Datatable from "../../components/datatable/Datatable";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const New = () => {
  return (
    <div className='new'>
      <Navbar />
      <div className="dengy2">
        <div className="twice2">
          <Sidebar />
        </div>
        <div className="newcontainer">
          <div className="search1">
            <SearchOutlinedIcon className="outline1" />
            <input type="text" placeholder="Search Here..." />
          </div>
          <Datatable />
        </div>
      </div>
    </div>
  )
}

export default New