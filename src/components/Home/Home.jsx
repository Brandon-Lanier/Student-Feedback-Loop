import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";


function Home() {

    const history = useHistory();

    const start = () => {
        history.push('/feeling')
    }

    return (
        <Box>
            <Typography variant="h3">
                Welcome
            </Typography>
            <Typography>&nbsp;</Typography>
            <Typography variant="h6">
                Please submit your daily feedback.  We appreciate your insight!
            </Typography>
            <Typography>&nbsp;</Typography>
            <Button color="primary" onClick={start} variant="contained">
                Start Feedback
            </Button>
        </Box>

    )
}

export default Home;