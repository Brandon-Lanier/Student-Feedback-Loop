import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';


function Feeling() {

    const [feeling, setFeeling] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        console.log(feeling);
        if (feeling) 
            {dispatch({type: 'ADD_FEELING', payload: feeling})
            history.push('/understand');
        } else {
            Swal.fire('Please enter a selection!')
        }
    }

    return (
        <>
            <Card sx={{ width: 700 }} >
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
                <CardActions >
                    <Button size="medium" variant="outlined">Go Back</Button>
                    <Button size="medium" variant="contained" onClick={handleSubmit}>Next</Button>
                </CardActions>
            </Card>

        </>

    )
}

export default Feeling;