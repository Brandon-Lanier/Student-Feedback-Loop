import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import Slide from '@mui/material/Slide';
import LinearProgress from '@mui/material/LinearProgress';
import DialogModal from '../DialogModal/DialogModal'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function Feeling() {
    
    useEffect(() => {
        setFeeling(oldFeeling)}, // Display on load if the user hits the back button
        []);

    const dispatch = useDispatch();

    const history = useHistory();

    const [feeling, setFeeling] = useState(''); // Hold the user input before sending to reducer.
    
    const oldFeeling = useSelector(store => store.feedbackReducer.feeling);

    const handleSubmit = () => {
        if (feeling) { // If a value is selected, then continue
            dispatch({ type: 'ADD_FEELING', payload: feeling }) // Send to reducer to put in store
            history.push('/understand'); // Continue to next page
        } else {
            Swal.fire({ //Error message if no input is selected.
                confirmButtonColor: '#07aa9e',
                text: 'Please enter a selection!'
            })
        }
    }



    const goBack = () => {
        history.push('/')
    }

    return (
        <>
            <Slide direction="up" in="open" out="close" mountOnEnter unmountOnExit>
                <Card sx={{ width: 700 }} >
                    <LinearProgress variant="determinate" value={20} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            How are you feeling today?
                        </Typography>
                        <FormControl>
                            <FormLabel id="radio-buttons-group-label">Feeling</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="radio-buttons-group-label"
                                value={feeling}
                                name="feeling-radios"
                                onChange={(e) => setFeeling(e.target.value)}
                            >
                                <FormControlLabel value="0" control={<Radio />} label="0" />
                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions className="cardActions" >
                        <Button size="medium" variant="outlined" onClick={goBack}>Go Back</Button>
                        <Button size="medium" variant="contained" onClick={handleSubmit}>Next</Button>
                    </CardActions>
                </Card>
            </Slide>

        </>

    )
}

export default Feeling;