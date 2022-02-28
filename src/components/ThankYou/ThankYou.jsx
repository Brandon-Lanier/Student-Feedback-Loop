import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Slide } from '@mui/material';
import { useHistory } from 'react-router-dom';


function ThankYou() {

    const history = useHistory();

    const handleSubmit = () => {
        history.push('/') // Go back to homepage to start over
    }

    return (
        <Slide direction="right" in="open" mountOnEnter unmountOnExit>
            <Card sx={{ width: 700 }} >
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Thank You For Your Feedback!
                    </Typography>
                    <Typography variant="b1">
                        We value your input.
                    </Typography>
                </CardContent>
                <CardActions className="review-buttons">
                    <Button size="medium" justify="center" variant="contained" onClick={handleSubmit}>Start Over</Button>
                </CardActions>
            </Card>
        </Slide>
    )
}

export default ThankYou;