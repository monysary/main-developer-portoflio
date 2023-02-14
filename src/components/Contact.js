import { Box, Grid, Typography, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
    return (
        <Box backgroundColor='#3C3A40' padding='70px 20px 30px' id='Contact'>
            <Typography
                fontSize='30px'
                component='h3'
                color='#F5F5F5'
                textAlign='center'
                marginX='20px'
            >Contact</Typography>
            <div style={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '50px auto' }}></div>
            <Grid container justifyContent='center' gap={4}>
                <Button
                    variant="text"
                    sx={{ color: "#F5F5F5" }}
                    startIcon={<EmailIcon sx={{ color: "#F5F5F5" }} />}
                    href='mailto:sary.mony@gmail.com'
                >sary.mony@gmail.com</Button>
                <Button
                    variant="text"
                    sx={{ color: "#F5F5F5" }}
                    startIcon={<LinkedInIcon sx={{ color: "#F5F5F5" }} />}
                    href='https://www.linkedin.com/in/mony-sary-08980b1aa/'
                >LinkedIn</Button>
                <Button
                    variant="text"
                    sx={{ color: "#F5F5F5" }}
                    startIcon={<GitHubIcon sx={{ color: "#F5F5F5" }} />}
                    href='https://github.com/monysary'
                >GitHub</Button>
            </Grid>
        </Box>
    )
}

export default Contact;