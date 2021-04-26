import React, { useState } from 'react';
import { Button,Grid,Box,TextField } from '@material-ui/core';

const SearchForm=(props)=>{
    const [searchTerm,setSearchTerm]=useState('');
  
    function doNotReloadForm(e) {
      e.preventDefault();
    }
    const onClickSearch=(e)=>{
      props.updateSearchTerm(searchTerm);
      e.preventDefault();
    }

    return(
            <>
                <Box pt={5} pb={1}>
                <Box>
                    <form onSubmit={(e)=>{doNotReloadForm(e)}} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth id="search-term" label="Movie Title" onChange={(e)=>(setSearchTerm(e.target.value))}/>
                        </Grid>
                    </Grid>
                    <Box my={2}>
                        <Button type="submit" fullWidth variant="contained" color="primary" onClick={(e)=>(onClickSearch(e))}>
                        Search
                        </Button>
                    </Box>
                    </form>
                </Box>
                </Box>
            </>
    );
  }

export default SearchForm;