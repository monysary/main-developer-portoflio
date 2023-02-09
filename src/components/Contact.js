import { Box, Grid, Typography, TextField, Card, CardActions, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Contact() {
    return (
        <Box backgroundColor='#D9D9D9' padding='50px'>
            <Grid container justifyContent='center' alignItems='center' marginBottom='100px'>
                <ArrowBackIosNewIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
                <Typography fontSize='40px' component='h3' marginX='20px' sx={{ '@media (max-width: 600px)': { fontSize: '30px' } }}>Contact</Typography>
                <ArrowForwardIosIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
            </Grid>
            <Grid container justifyContent='center'>
                <Card component='form' sx={{
                    borderRadius: '0',
                    padding: '50px',
                    backgroundColor: '#F5F5F5',
                    '@media (max-width: 900px)': {
                        padding: '20px'
                    }
                }}>
                    <Typography
                        component='h3'
                        textAlign='center'
                        fontSize='30px'
                        marginBottom='40px'
                        sx={{ '@media (max-width: 600px)': { fontSize: '20px' } }}
                    >Let's chat!</Typography>
                    <Grid container direction='column' alignItems='center' gap={5} sx={{ '@media (max-width: 600px)': { gap: 2 } }}>
                        <Grid container justifyContent='space-evenly' gap={5} sx={{ '@media (max-width: 600px)': { gap: 2 } }}>
                            <Grid item xs={12} md>
                                <TextField
                                    fullWidth
                                    required
                                    label="Name"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            required
                            label='Email'
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            required
                            label='Message'
                            variant="outlined"
                            multiline
                            rows={5}
                        />
                        <CardActions>
                            <Button variant="contained" type="submit"
                                sx={{ backgroundColor: '#C83649', color: '#F5F5F5', '&:hover': { backgroundColor: '#A42C3B' }, }}
                            >Send Message</Button>
                        </CardActions>
                    </Grid>
                </Card>
            </Grid>
        </Box>
    )
}

export default Contact;