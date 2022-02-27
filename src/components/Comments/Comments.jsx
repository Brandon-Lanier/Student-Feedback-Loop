import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { LinearProgress } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Slide } from '@mui/material';


function Comments() {

    const [comments, setComments] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        console.log(comments);
        dispatch({ type: 'ADD_COMMENTS', payload: comments });
        history.push('/review');

    }

    const goBack = () => {
        history.push('/support');
    }

    return (
        <>
            <Slide direction="up" in="open" mountOnEnter unmountOnExit>
            <Card sx={{ width: 700 }} >
            <LinearProgress variant="determinate" value='80' />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        How well are you being supported?
                    </Typography>
                        <TextField
                            id="standard-multiline-static"
                            label="Comments"
                            multiline
                            fullWidth
                            rows={4}
                            value={comments}
                            variant="standard"
                            onChange={(e) => setComments(e.target.value)}
                        />


                </CardContent>
                <CardActions className="cardActions">
                    <Button size="medium" variant="outlined" onClick={goBack}>Go Back</Button>
                    <Button size="medium" variant="contained" onClick={handleSubmit}>Next</Button>
                </CardActions>
            </Card>
            </Slide>
        </>

    )
}

export default Comments;