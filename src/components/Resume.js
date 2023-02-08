import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const resumeURL = 'http://localhost:3000/profile.jpg'

function Resume() {
    const downloadResume = url => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return (
        <Box backgroundColor='#D9D9D9' padding='50px'>
            <Grid container justifyContent='center' alignItems='center' marginBottom='100px'>
                <ArrowBackIosNewIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
                <Typography fontSize='40px' component='h3' marginX='20px' sx={{ '@media (max-width: 600px)': { fontSize: '30px' } }}>Resume</Typography>
                <ArrowForwardIosIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
            </Grid>
            <Grid container justifyContent='center'>
                <Button variant="contained" onClick={() => downloadResume(resumeURL)}
                    sx={{
                        borderRadius: '18px',
                        backgroundColor: '#C83649',
                        color: '#F5F5F5',
                        '&:hover': {
                            backgroundColor: '#A42C3B',
                        },
                        '@media (max-width: 600px)': {
                            fontSize: '12px'
                        }
                    }}>Download Resume</Button>
            </Grid>
        </Box>
    )
}

export default Resume;