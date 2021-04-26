import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './MovieDialog.css';
const MovieDialog = (props) => {

    return (
        <div>
          <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{props.name} - {props.year}</DialogTitle>
            <DialogContent>
                <div className="dialog-box">
                    <div className="dialog-right">
                        {props.thumbnail &&(<><br/><img src={props.thumbnail} width="100" alt="Thumbnail" className="thumbnail-img"/><br/></>)}
                    </div>
                    <div className="dialog-left">
                        {props.wikiData && (
                            <>
                            <p>{props.wikiData.title}</p>
                            <p dangerouslySetInnerHTML={{__html: props.wikiData.snippet}}></p>
                            <a href={"https://en.wikipedia.org/?curid="+props.wikiData.pageid} target="blank">Wikipedia</a>
                            <br/>
                            </>
                        )}
                        {!props.wikiData && (<p>{props.overview}</p>)}
                        {props.imdb && (<><span> - </span><a href={props.imdb} target="blank">IMDB</a></>)}
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
}
 
export default MovieDialog;