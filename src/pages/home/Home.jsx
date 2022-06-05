import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Shade from "../../components/shade/Shade";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Home = () => {
  return (

    <div className="home">
      <Navbar />
      <div className="dengy">
        <div className="twice">
          {/* <Heading /> */}
          <Sidebar />
        </div>
        <div className="divide">
          <Shade />
          <div className="homecontainer">
            <div className="search">
              <SearchOutlinedIcon className="outline" />
              <input type="text" placeholder="Search Here..." />
            </div>
          </div>
          <p className="fod">Food</p>
          <div className="widgets">
            <Widget type="Sashim" />
            <Widget type="Unagi-Grilled Ee" />
            <Widget type="Soba Buckwheat Noodle" />
            <Widget type="Onigiri Rice-Ball" />
            <Widget type="Yakitori Grilled-chicke" />
            <Widget type="Miso sou" />
          </div>
          <p className="fod1">Drinks</p>
          <div className="widgets">
            <Widget type="Amazak" />
            <Widget type="Royal Milk Te"/>
            <Widget type="Flavoured soya Mil"/>
            <Widget type="Green-Te" />
            <Widget type="Choclate-Cha" />
            <Widget type="Lassi" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home