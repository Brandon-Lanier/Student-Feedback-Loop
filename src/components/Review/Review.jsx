import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {

    const feedback = useSelector(store => store.feedbackReducer);

    const history = useHistory();

    const goBack = () => {
        history('/comments')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback)
        axios.post('/')
    }

    return (
        <Card sx={{ width: 700 }} >
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Review your feedback
                    </Typography>
                    <Typography variant="b1">
                        Feelings: {feedback.feeling}
                        Understanding: {feedback.understanding}
                        Support: {feedback.support}
                        Comments: {feedback.comments}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size="medium" variant="outlined" onClick={goBack}>Go Back</Button>
                    <Button size="medium" variant="contained" onClick={handleSubmit}>Submit Feedback</Button>
                </CardActions>
            </Card>

    )
}

export default Review;