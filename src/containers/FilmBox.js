import React, { Component }  from "react";
import { render } from "@testing-library/react";
import FilmList from "../components/FilmList"

class FilmBox extends Component{
    constructor(pros){
        super(pros);
        this.state = {
            data:[
                {
                  id: 1,
                  name: "The Lighthouse",
                  url: "https://www.imdb.com/title/tt7984734/?ref_=rlm"
                },
                {
                  id: 2,
                  name: "The Rhythm Section",
                  url: "https://www.imdb.com/title/tt7134096/?ref_=rlm"
                },
                {
                  id: 3,
                  name: "Richard Jewell",
                  url: "https://www.imdb.com/title/tt3513548/?ref_=rlm"
                },
                {
                  id: 4,
                  name: "A Beautiful Day in the Neighborhood", 
                  url: "https://www.imdb.com/title/tt3224458/?ref_=rlm"
                },
                {
                  id: 5,
                  name: "Queen & Slim",
                  url: "https://www.imdb.com/title/tt8722346/?ref_=rlm"
                }
              ]
        }
    }

    render(){
        return (
            <div className = "film-box">
            <FilmList data = {this.state.data}></FilmList>    
            </div>        
        )
    }

};

export default FilmBox;