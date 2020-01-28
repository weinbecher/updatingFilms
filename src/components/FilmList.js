import React, { Component } from "react";
import Film from "../components/Film";

class FilmList extends Component{

    render(){
        const filmData = this.props.data.map (film => {
            return(
            <Film name = {film.name} key = {film.id}>{film.url}</Film>

            )
        })

        return (
           <div className = "film-list">
               <h1>Upcoming film release in UK</h1>
               {/* <Film> </Film> */} 
               {/* only show one film */}
               {filmData}
               <button onClick={event =>  window.location.href='https://www.imdb.com/calendar/?region=gb'}> View More</button>

           </div>
        )
    }
}

export default FilmList;