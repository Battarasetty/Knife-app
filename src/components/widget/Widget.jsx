import "./widget.scss";

const Widget = ({type}) => {
 let data;

 switch(type){
   case "Sashim":
     data={
       pen:"Sashimi",
       gen: "$22",
     };
     break;
     case "Unagi-Grilled Ee":
      data={
        pen:"Unagi-Grilled Eel",
         gen: "$22",
      };
      break;
      case "Soba Buckwheat Noodle":
        data={
          pen:"Soba Buckwheat Noodles",
          gen: "$22",
        };
        break;
        case "Onigiri Rice-Ball":
          data={
            pen:"Onigiri Rice-Balls",
            gen: "$22",
          };
          break;
          case "Yakitori Grilled-chicke":
            data={
              pen:"Yakitori Grilled-chicken",
              gen: "$22",
            };
            break;
            case "Miso sou":
              data={
                pen:"Miso soup",
                gen: "$22",
              };
              break;
            case "Amazak":
              data={
                pen:"Amazake",
                gen: "$22",
              };
              break;
            case "Royal Milk Te":
              data={
                pen:"Royal Milk Tea",
                gen: "$22",
              };
              break;
            case "Flavoured soya Mil":
              data={
                pen:"Flavoured soya Milk",
                gen: "$22",
              };
              break;
            case "Green-Te":
              data={
                pen:"Green-Tea",
                gen: "$22",
              };
              break;
            case "Choclate-Cha":
              data={
                pen:"Choclate-Chai",
                gen: "$22",
              };
              break;
            case "Lassi":
              data={
                pen:"Lassie",
                gen: "$22",
              };
              break;
     default:
       break;
 }

  return (
    <>
    <div className='widget'>     
        <div className="left"></div>
        <div className="right">
          <span className="pen">{data.pen}</span>
          <span className="gen">{data.gen}</span>
        </div>
    </div>
    </>
  )
}

export default Widget