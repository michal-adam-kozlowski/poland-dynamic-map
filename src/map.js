import React, {Component} from "react";
import City from "./city.js";
import "./map.scss";


class Map extends Component {

    render() {
        return (
            <div className="map-wrapper">
                <div className="map">
                 <City top="145px" left="235px" name="Warszawa" text="Dopłata: brak, Gwarantowany wyjazd"/>
                 <City top="135px" left="75px" name="Poznań" text="150 PLN, minimalna ilość osób: miliard"/>
                 <City top="220px" left="80px" name="Wrocław" text="666 PLN, minimalna ilość osób: 15"/>
                 <City top="175px" left="175px" name="Łódź" text="175 PLN, minimalna ilość osób: 1"/>
                 <City top="270px" left="155px" name="Katowice" text="110 PLN, gwarantowany wyjazd"/>
                 <City top="290px" left="210px" name="Kraków" text="50 PLN , minimalna ilość osób: 11"/>
                 <City top="35px" left="140px" name="Trójmiasto" text="1000 PLN, minimalna ilość osób: 25"/>
                 <City top="65px" left="-5px" name="Szczecin" text="200 PLN, minimalna ilość osób: miliard"/>
                 <City top="50px" left="300px" name="Białystok" text="300 PLN, minimalna ilość osób: never"/>
                 <City top="285px" left="300px" name="Rzeszów" text="112 PLN, minimalna ilość osób: LOL"/>
                </div>
            </div>
        )
    }
}

export default Map;