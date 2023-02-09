import { Box, Typography, Grid, Button } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import profile from '../images/profile.jpg';

import { resumeURL, downloadResume } from "./Navbar";

function Home() {
    return (
        <Box sx={{ paddingTop: '150px', '@media (max-width: 900px)': { paddingTop: '100px' } }} id='Home'>
            <Typography variant="h2" component='h1' textAlign='center' sx={{ '@media (max-width: 900px)': { fontSize: '50px' }, '@media (max-width: 600px)': { fontSize: '40px' } }}>
                Hi, I'm <span style={{ color: '#C83649' }}>Mony</span>. <br />
                Let's build something together.
            </Typography>
            <div style={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '50px auto' }}></div>
            <Grid container gap={10} direction='row' justifyContent='center' alignItems='center' sx={{ '@media (max-width: 600px)': { gap: '40px' } }}>
                <img alt="profile" src={profile} width='300px' />
                {/* Desktop display */}
                <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Typography variant="h5" component='h2' textAlign='center'>
                        I am a <span style={{ color: '#C83649' }}>full stack web developer</span> based in Southern California.
                        I have strong passion for coding and learning and have always been interested in technology.
                        I truly enjoy the process of designing and building websites and web applications, so let’s build something together!
                    </Typography>
                </Grid>
                {/* Mobile display */}
                <Grid item xs={12} md={5} sx={{ display: { xs: 'block', md: 'none' }, paddingX: '40px' }}>
                    <Typography variant="h5" component='h2' textAlign='center' sx={{ fontSize: '20px' }}>
                        I am a <span style={{ color: '#C83649' }}>full stack web developer</span> based in Southern California.
                        I have strong passion for coding and learning and have always been interested in technology.
                        I truly enjoy the process of designing and building websites and web applications, so let’s build something together!
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' m='40px auto 20px'>
                <Button variant="contained" onClick={() => downloadResume(resumeURL)}
                    sx={{
                        backgroundColor: '#C83649',
                        color: '#F5F5F5',
                        '&:hover': {
                            backgroundColor: '#A42C3B',
                        },
                        '@media (max-width: 600px)': {
                            fontSize: '12px'
                        },
                        display: { xs: 'inline-block', md: 'none' }
                    }}>Download Resume</Button>
            </Grid>
            <Grid container justifyContent='center' p='20px'>
                <KeyboardDoubleArrowDownIcon fontSize='large' sx={{ color: '#C83649' }} />
            </Grid>
        </Box>
    )
}

export default Home;