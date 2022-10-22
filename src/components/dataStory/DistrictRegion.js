
import {
    handleMouseOver,
    handleMouseOut,
    handleMouseMove,
  } from "./helpers/handleTooltip";
  import "../../stylings/styleJP.css";

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function pickHex(color1, color2, weight) {
    if (weight === '#DIV/0!' || weight === undefined || weight === '-'){
      return "#ddd"
    }
    var w1 = weight;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
        return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
  }
  
  function loadTooltip(stat, bach, white, income, gross, value){
    if(stat == 1) {return ((bach===undefined || bach === '-' || bach === '#DIV/0!') ? 'no data' : bach.toString()+"%");}
    if(stat == 2) {return ((white===undefined || white === '-' || white === '#DIV/0!') ? 'no data' : (white*100).toString()+"%");}
    if(stat == 3) {return ((income===undefined || income === '-' || income === '#DIV/0!') ? 'no data' : income);}
    if(stat == 4) {return ((gross===undefined || gross === '-' || gross === '#DIV/0!') ? 'no data' : gross);}
    if(stat == 5) {return ((value===undefined || value === '-' || value === '#DIV/0!') ? 'no data' : value);}
    return "error";
  }
  function calculateWeight(stat, bach, white, income, gross, value){
    if(stat == 1){
      return ((bach===undefined || bach === '-' || bach === '#DIV/0!') ? bach : Math.min(parseFloat(bach.toString().replace(/,/g, ''))*1.764/100, 1.0));
    }
    if(stat == 2){
      return ((white===undefined || white === '-' || white === '#DIV/0!') ? white : Math.min(white*1.0, 1.0));
    }
    if(stat == 3){
      return ((income===undefined || income === '-' || income === '#DIV/0!') ? income : Math.min((parseFloat(income.toString().replace(/,/g, ''))-8843)/241157, 1.0));
    }
    if(stat == 4){
      return ((gross===undefined || gross === '-' || gross === '#DIV/0!') ? gross : Math.min((parseFloat(gross.toString().replace(/,/g, ''))-246)/3254, 1.0));
    }
    if(stat == 5){
      return ((value===undefined || value === '-' || value === '#DIV/0!') ? value : Math.min((parseFloat(value.toString().replace(/,/g, ''))-17600)/1000000, 1.0));
    }
    return undefined;
  }

  export default function DistrictRegion(props) {
    const { path, tooltipData, bach, white, income, gross, value, statNum} = props;
    const color1 = [0,0,50];
    const color2 = [255,255,255];
    const colors = [[207, 68, 17], [0, 102, 34], [6, 131, 156], [129, 8, 156], [156, 8, 53]]
  
    //each path defines the shape of a region in the map
    return (
      <path
        className="path"
        d={path}
        onMouseOver={() => {
          handleMouseOver(loadTooltip(statNum, bach, white, income, gross, value));
        }}
        onMouseOut={handleMouseOut}
        onMouseMove={(event) => {
          handleMouseMove(event);
        }}
        stroke={(tooltipData.toString().includes('3122')||tooltipData.toString().includes('3123')||tooltipData.toString().includes('3124')) ? "rgb(255, 0, 0)":"rgb(155, 155, 155)"}
        fill={pickHex(colors[statNum - 1], color2, calculateWeight(statNum, bach, white, income, gross, value))}
      />
    );
  }