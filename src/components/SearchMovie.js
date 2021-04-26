import React from 'react';
import { gql,useQuery } from '@apollo/client';
import loader from '../images/loader.gif';
import './SearchMovie.css';

const SearchMovie=(props)=>{
    let term=props.searchTerm;
    
    const query=gql`
    query SearchMovies {
      searchMovies(query: "${term}") {
        id
        name
        overview
        releaseDate
        score
        genres {
          name
        }
        socialMedia {
            imdb
        }
        poster {
            thumbnail
        }
      }
    }
    `;

    const {loading,error,data}=useQuery(query);    

    if (loading) return <center><img src={loader} alt="loading"/></center>;
    if (error) return <p>Error</p>;
    if (data.searchMovies.length===0) return "No Results";

    return (
        data.searchMovies.map(({name,id,score,genres},key)=>(
            <li key={id} className="listItem" onClick={(e)=>(props.updateClickMovie(data.searchMovies[e.target.value]))} value={key}>
                <button className="movBtn" onClick={(e)=>(props.updateClickMovie(data.searchMovies[e.target.value]))} value={key}>{name}</button>
                <div>
                    <span>{score}/10</span>
                    <span>{genres.map((item)=>(item.name+" "))}</span>
                </div>
            </li>
    )))
  }

export default SearchMovie;