import React, { useEffect, useState } from 'react';
import MovieDialog from './MovieDialog';
import na from '../images/na.png';

const MovieDetails = (props) => {
    let year= function(){
        if (props.data.releaseDate) {
            return props.data.releaseDate.substring(0,4);
        }
        else {
            return "N/A";
        }
    }();
    let name=props.data.name;
    let overview=props.data.overview;
    let similar=props.data.similar;
    let thumbnail=function(){
        if (props.data.poster) {
            return props.data.poster.thumbnail;
        }
        else {
            return na;
        }
    }();
    
    var url = "https://en.wikipedia.org/w/api.php"; 

    var params = {
        action: "query",
        list: "search",
        srsearch: ""+name+" "+year+" film",
        format: "json",
        srlimit:1,
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    const [wikiData,setWikiData]=useState('');
    
    useEffect(()=>{
        async function fetchData() {
            const data = await fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                return response.query.search[0];
            });
            setWikiData(data);
        }
        fetchData();
    },[name]);
    

    return (
        <>
            <MovieDialog wikiData={wikiData} similar={similar} name={name} year={year} overview={overview} thumbnail={thumbnail} imdb={props.data.socialMedia.imdb} handleClickOpen={props.handleClickOpen} open={props.open} handleClose={props.handleClose}/>
        </>
    );
}
 
export default MovieDetails;