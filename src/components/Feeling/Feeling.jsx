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

function Feeling() {

    const [feeling, setFeeling] = useState('');

    const handleSubmit = () => {
        console.log(feeling);
    }

    return (
        <>
            <Card sx={{ width: 700 }} >
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        How are you feeling?
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
                    <Button size="medium" variant="">Go Back</Button>
                    <Button size="medium" onClick={handleSubmit}>Next</Button>
                </CardActions>
            </Card>

        </>

    )
}

export default Feeling;