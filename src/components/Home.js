import { Box, Typography, Grid } from "@mui/material";

function Home() {
    return (
        <Box sx={{ paddingTop: '200px' }}>
            <Typography variant="h2" component='h1' textAlign='center'>
                Hi, I'm <span style={{ color: '#C83649' }}>Mony</span>. <br />
                Let's build something together.
            </Typography>
            <div style={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '50px auto' }}></div>
            <Grid>

            </Grid>
        </Box>
    )
}

export default Home;