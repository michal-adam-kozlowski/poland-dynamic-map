import React, {Component} from "react";
import City from "./city.js";
import "./map.scss";

var transports = [
    {
        name: "Warszawa",
        price: 0,
        count: 0
    },

    {
        name: "Katowice",
        price: 0,
        count: 0
    },
    {
        name: "Wrocław",
        price: 0,
        count: 0
    },
    {
        name: "Szczecin",
        price: 50,
        count: 0
    },

    {
        name: "Kraków",
        price: 100,
        count: 0
    },
    {
        name: "Białystok",
        price: 50,
        count: 0
    },
    {
        name: "Trójmiasto",
        price: 50,
        count: 0
    },
    {
        name: "Poznań",
        price: 50,
        count: 0
    },
    {
        name: "Rzeszów",
        price: 50,
        count: 17

    },
    {
        name: "Łódź",
        price: 50,
        count: 17

    },
    {
        name: "Bydgoszcz/Toruń",
        price: 50,
        count: 17

    },
];

let giveNewProps = (arr) => {
    arr.map((el) => {
        if (el.name === "Warszawa") {
            el.top = "135px";
            el.left = "235px";
        }
        if (el.name === "Poznań") {
            el.top = "135px";
            el.left = "75px";
        }
        if (el.name === "Wrocław") {
            el.top = "220px";
            el.left = "70px";
        }
        if (el.name === "Łódź") {
            el.top = "175px";
            el.left = "175px";
        }
        if (el.name === "Katowice") {
            el.top = "270px";
            el.left = "155px";
        }
        if (el.name === "Kraków") {
            el.top = "290px";
            el.left = "220px";
        }
        if (el.name === "Trójmiasto") {
            el.top = "-5px";
            el.left = "140px";
        }
        if (el.name === "Szczecin") {
            el.top = "65px";
            el.left = "-5px";
        }
        if (el.name === "Białystok") {
            el.top = "50px";
            el.left = "300px";
        }
        if (el.name === "Rzeszów") {
            el.top = "275px";
            el.left = "295px";
        }
        if (el.name === "Bydgoszcz/Toruń") {
            el.top = "70px";
            el.left = "120px";
        }
        if (el.price === 0) {
            el.text = "Brak dopłat, wyjazd gwarantowany"
        }
        if (el.price > 0 && el.count < 15) {
            el.text = `Dopłata ${el.price} PLN. Wyjazd możliwy pod warunkiem zebrania się grupy min. 15 osób`
        }
        if (el.price > 0 && el.count >= 15) {
            el.text = `Dopłata ${el.price} PLN. Wyjazd gwarantowany, zebrała się grupa 15 lub więcej osób`
        }
        if (el.count >= 15 || el.price <= 0) {
            el.ifWarranted = true
        }
        if (el.count < 15 && el.price > 0) {
            el.ifWarranted = false
        }
    });


    return arr
};

giveNewProps(transports);
console.log(transports);


class Map extends Component {

    render() {
        return (
            <div className="map-wrapper">
                <div className="map">
                    {transports.map((el) =>
                        <City top={el.top} left={el.left} name={el.name} text={el.text} ifWarranted={el.ifWarranted}/>
                    )}
                </div>
            </div>
        )
    }
}

export default Map;