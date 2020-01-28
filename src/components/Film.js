import React,{ Component } from "react";
import { render } from "@testing-library/react";

class Film extends Component{
    render(){
        return(
            <div className = "film">
            <li><a href = {`${this.props.children}`}>{this.props.name}</a></li>
            </div>


        )
    }
}

export default Film;