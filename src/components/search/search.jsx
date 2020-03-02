import React, {Component} from 'react';
import Table from "../table/Table"
const nerado = "nerado";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTitle: '', movies: {}};


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({searchTitle: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`https://www.omdbapi.com/?apikey=e4db3ced&t=${this.state.searchTitle}`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        movies: data
                    })
                }

            )
    }


        render(){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control" type="text" value={this.state.searchTitle}
                                   onChange={this.handleChange} placeholder="Movie Title"/>
                        </div>
                        <div className="row justify-content-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    <Table data={this.state.movies}/>
                </div>
            );
        }
    }

export default Search;