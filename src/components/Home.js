import profile from '../images/profile.jpg'
import { Box, Typography, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Home() {
    return (
        <Box sx={{ paddingTop: '150px' }}>
            <Typography variant="h2" component='h1' textAlign='center'>
                Hi, I'm <span style={{ color: '#C83649' }}>Mony</span>. <br />
                Let's build something together.
            </Typography>
            <div style={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '50px auto 100px' }}></div>
            <Grid container gap={10} direction='row' justifyContent='center' alignItems='center'>
                <img alt="profile" src={profile} width='300px' />
                <Grid item md={6}>
                    <Typography variant="h5" component='h2' textAlign='center'>
                        I am a <span style={{ color: '#C83649' }}>full stack web developer</span> based in Southern California.
                        I have strong passion for coding and learning and have always been interested in technology.
                        I truly enjoy the process of designing and building websites, so let’s build something together!
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' p='20px'>
                <KeyboardDoubleArrowDownIcon fontSize='large' sx={{ color: '#C83649' }}/>
            </Grid>
        </Box>
    )
}

export default Home;