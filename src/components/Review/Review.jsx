import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Slide } from '@mui/material';
import axios from 'axios';
import './Review.css';


function Review() {

    const feedback = useSelector(store => store.feedbackReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    const goBack = () => {
        history.push('/comments')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        axios.post('/feedback', feedback)
            .then(response => {
                console.log('It worked!', response);
                dispatch({ type: 'CLEAR_FEEDBACK' })
                history.push('/thankyou')
            }).catch(error => {
                console.log('Error posting feedback', error);
            })
    }

    return (
        <Slide direction="up" in="open" mountOnEnter unmountOnExit>
            <Card sx={{ width: 700 }} >
                <LinearProgress variant="determinate" value={100} />
                <CardContent className="review-feedback">
                    <Typography gutterBottom variant="h5">
                        Review your feedback:
                    </Typography>
                    <Typography variant="b1">
                        Feelings: {feedback.feeling}
                    </Typography>
                    <Typography variant="b1">
                        Understanding: {feedback.understanding}
                    </Typography>
                    <Typography variant="b1">
                        Support: {feedback.support}
                    </Typography>
                    <Typography variant="b1">
                        Comments: {feedback.comments}
                    </Typography>
                </CardContent>
                <CardActions className="review-buttons" >
                    <Button size="medium" variant="outlined" onClick={goBack}>Go Back</Button>
                    <Button size="medium" variant="contained" onClick={handleSubmit}>Submit Feedback</Button>
                </CardActions>
            </Card>
        </Slide>
    )
}

export default Review;