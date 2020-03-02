import React, {Component} from "react"
import './table.scss'
import Search from "../search/search"


function Table(props){

        {{console.log(props.data.Response)}}
    if (props.data.Response == "False"){
        return(
            <div className="row justify-content-center table">
                <h3>Blogai įvestas filmo pavadinimas. Toks filmas nerastas</h3>
            </div>
        )
    }else {
        return  <div className="row justify-content-center table">
            <table>
                <th>Pavadinimas</th>
                <th>Apie filmą</th>
                <th>IMDB</th>
                <th>Trukmė</th>
                <th>Režisierius</th>
                <tr>
                    <td>{props.data.Title}</td>
                    <td>{props.data.Plot}</td>
                    <td>{props.data.imdbRating}</td>
                    <td>{props.data.Runtime}</td>
                    <td>{props.data.Director}</td>
                </tr>
            </table>
        </div>
    }
    }


export default Table;