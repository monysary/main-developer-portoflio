import { Box, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterIcon from '@mui/icons-material/Filter';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';

function Skills() {
    return (
        <Box backgroundColor='#D9D9D9' padding='70px 20px 100px' id='Skills'>
            <Grid container justifyContent='center' alignItems='center'>
                <ArrowBackIosNewIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
                <Typography fontSize='40px' component='h3' marginX='20px' sx={{ '@media (max-width: 600px)': { fontSize: '30px' } }}>Skills</Typography>
                <ArrowForwardIosIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
            </Grid>
            <Grid container justifyContent='space-evenly' marginTop='100px' sx={{ '@media (max-width: 1200px)': { marginTop: '0px' } }}>
                <Grid item  marginX='20px' sx={{ '@media (max-width: 1200px)': { marginTop: '70px' } }}>
                    <Grid container direction='column' alignItems='center'>
                        <FilterIcon sx={{ fontSize: '80px' }} />
                        <Typography fontSize='30px' component='h3' marginTop='40px' sx={{ '@media (max-width: 900px)': { fontSize: '30px', marginTop: '20px' } }}>Frontend</Typography>
                        <Box sx={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '10px auto 30px', '@media (max-width: 600px)': { margin: '10px auto 10px' } }}></Box>
                        <Typography fontSize='20px' component='p' textAlign='center' width='300px' sx={{ '@media (max-width: 600px)': { width: '90%', fontSize: '20px' } }}>
                            HTML <span style={{ color: "#C83649" }}>|</span> CSS <span style={{ color: "#C83649" }}>|</span> Javascript <span style={{ color: "#C83649" }}>|</span> jQuery <span style={{ color: "#C83649" }}>|</span> Bootstrap <span style={{ color: "#C83649" }}>|</span> Tailwind <span style={{ color: "#C83649" }}>|</span> Handlebars <span style={{ color: "#C83649" }}>|</span> React <span style={{ color: "#C83649" }}>|</span> Material UI
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item  marginX='20px' sx={{ '@media (max-width: 1200px)': { marginTop: '70px' } }}>
                    <Grid container direction='column' alignItems='center'>
                        <SettingsIcon sx={{ fontSize: '80px' }} />
                        <Typography fontSize='30px' component='h3' marginTop='40px' sx={{ '@media (max-width: 900px)': { fontSize: '30px', marginTop: '20px' } }}>Backend</Typography>
                        <Box sx={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '10px auto 30px', '@media (max-width: 600px)': { margin: '10px auto 10px' } }}></Box>
                        <Typography fontSize='20px' component='p' textAlign='center' width='300px' sx={{ '@media (max-width: 600px)': { width: '90%', fontSize: '20px' } }}>
                            Node <span style={{ color: "#C83649" }}>|</span> Express <span style={{ color: "#C83649" }}>|</span> APIs <span style={{ color: "#C83649" }}>|</span> Jest <span style={{ color: "#C83649" }}>|</span> Bcrypt <span style={{ color: "#C83649" }}>|</span> Socket.io
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item  marginX='20px' sx={{ '@media (max-width: 1200px)': { marginTop: '70px' } }}>
                    <Grid container direction='column' alignItems='center'>
                        <StorageIcon sx={{ fontSize: '80px' }} />
                        <Typography fontSize='30px' component='h3' marginTop='40px' sx={{ '@media (max-width: 900px)': { fontSize: '30px', marginTop: '20px' } }}>Database</Typography>
                        <Box sx={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '10px auto 30px', '@media (max-width: 600px)': { margin: '10px auto 10px' } }}></Box>
                        <Typography fontSize='20px' component='p' textAlign='center' width='300px' sx={{ '@media (max-width: 600px)': { width: '90%', fontSize: '20px' } }}>
                            MySQL <span style={{ color: "#C83649" }}>|</span> Sequelize <span style={{ color: "#C83649" }}>|</span> MongoDB <span style={{ color: "#C83649" }}>|</span> Mongoose <span style={{ color: "#C83649" }}>|</span> GraphQL
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Skills;