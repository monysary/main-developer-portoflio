import { Box, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Contact() {
    return (
        <Box padding='50px'>
            <Grid container justifyContent='center' alignItems='center' marginBottom='100px'>
                <ArrowBackIosNewIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
                <Typography fontSize='40px' component='h3' marginX='20px' sx={{ '@media (max-width: 600px)': { fontSize: '30px' } }}>Contact</Typography>
                <ArrowForwardIosIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
            </Grid>
        </Box>
    )
}

export default Contact;