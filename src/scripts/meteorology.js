
export function getClassNeme(wind_direction) {
    let ClassName
    
      if (wind_direction > 270) {
        ClassName = "upLeft";
      } 

      else if (wind_direction == 270) {
        ClassName = "left";
      }

      else if (wind_direction == 0) {
        ClassName = "up";
      }

      else if (wind_direction < 90) {
        ClassName = "upRight";
      }

      else if (wind_direction == 90) {
        ClassName = "right";
      }

      else if (wind_direction > 45 && wind_direction < 90) {
        ClassName = "right";
      }

      else if (wind_direction > 90 && wind_direction < 180) {
        ClassName = "downRight";
      }

      else if (wind_direction == 180) {
        ClassName = "down";
      }

      else if (wind_direction > 180 && wind_direction < 270) {
        ClassName = "downLeft";
      }

      return ClassName;
}


window.onhashchange = function() { 
  console.log(this); 
  alert(this);
}



