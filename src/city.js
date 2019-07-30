import React, {Component} from "react";
import "./city.scss";


class City extends Component {

    state = {
        textWindowHover: false
    };



    textWindow = () => {
        return (
            <div className="cityWindow">{this.props.text}
            </div>
        )
    };

    render() {
        let style = {
            position: "absolute",
            left: this.props.left,
            top: this.props.top
        };
        if (this.props.ifWarranted === false) {
        return (
                <div className="object-city" style={style}
                    onMouseEnter={() => this.setState({ textWindowHover: true })}
                    onMouseLeave={() => this.setState({ textWindowHover: false })}
                ><span className="city-name-holder">{this.props.name}</span>
                <div className="autokar-wrapper"></div>
                    { this.state.textWindowHover ? this.textWindow() : null }
                </div>

            )
        }
        if (this.props.ifWarranted === true) {
            return (
                <div className="object-city-warranted" style={style}
                     onMouseEnter={() => this.setState({ textWindowHover: true })}
                     onMouseLeave={() => this.setState({ textWindowHover: false })}
                ><span className="city-name-holder">{this.props.name}</span>
                    <div className="autokar-wrapper-warranted"></div>
                    { this.state.textWindowHover ? this.textWindow() : null }
                </div>
            )
        }
    }
}

export default City;