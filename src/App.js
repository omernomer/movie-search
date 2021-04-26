import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Container,Box } from '@material-ui/core';
import MovieDetails from './components/MovieDetails';
import SearchMovie from './components/SearchMovie';
import SearchForm from './components/SearchForm';

const client = new ApolloClient({
  uri: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [searchTerm,setSearchTerm]=useState('');//this state will hold the search term of the form
  const [clickMovie,setClickMovie]=useState('');//this state will hold the information of the clicked movie from the search results
  
  const [open, setOpen] = React.useState(false);//this state is important for Material UI Dialog
  const handleClickOpen = () => {//this function will handling opening the movie dialog
    setOpen(true);
  };
  const handleClose = () => {//this function will handling closing the movie dialog
    setOpen(false);
  };

  const updateClickMovie=(data)=>{//this function will update the data of the clicked movie
    setClickMovie(data);
    handleClickOpen();
  }
  const updateSearchTerm=(term)=>{//this function will update the state for the search term
    setSearchTerm(term);
  }
  return (
    <>
    <Container maxWidth="md">
      <SearchForm updateSearchTerm={updateSearchTerm} />
      {clickMovie && (<MovieDetails data={clickMovie} handleClickOpen={handleClickOpen} open={open} handleClose={handleClose}/>)}
      {searchTerm && (
        <ApolloProvider client={client}>
          <Box alignItems="center">
            <SearchMovie searchTerm={searchTerm} updateClickMovie={updateClickMovie} handleClickOpen={handleClickOpen}/>
          </Box>
        </ApolloProvider>
      )}  
    </Container>
    </>
  );  
}
 
export default App;
