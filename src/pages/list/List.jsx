import './list.scss';
import Navbar from "../../components/navbar/Navbar";
import Shade from "../../components/shade/Shade";
import Sbox from "../../components/sbox/Sbox";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";


const List = () => {
  return (
    <div className='list'>
      <Navbar />
      <div className="dengy1">
        <div className="twice1">
          <Sidebar />
        </div>
        <div className="divide1">
          <Shade />
          <div className="listcontainer">
            <div className="sboxs">
              <Sbox type="user" />
              <Sbox type="order" />
              <Sbox type="earning" />
              <Sbox type="balance" />
            </div>
            <div className='tdesgn'>
              <Table />
            </div>
          </div>
        </div>
      </div>
      </div>
      )
}

      export default List