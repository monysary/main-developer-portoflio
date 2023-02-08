import { Box, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterIcon from '@mui/icons-material/Filter';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';

function Skills() {
    return (
        <Box sx={{ backgroundColor: '#D9D9D9', padding: '50px' }}>
            <Grid container justifyContent='center' alignItems='center'>
                <ArrowBackIosNewIcon sx={{ color: '#C83649', fontSize: '40px' }} />
                <Typography variant="h4" component='h3' marginX='20px'>Skills</Typography>
                <ArrowForwardIosIcon sx={{ color: '#C83649', fontSize: '40px' }} />
            </Grid>
            <Grid container justifyContent='space-evenly' marginY='100px'>
                <Grid item>
                    <Grid container direction='column' alignItems='center'>
                        <FilterIcon sx={{ fontSize: '80px' }} />
                        <div style={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '25px auto' }}></div>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction='column' alignItems='center'>
                        <SettingsIcon sx={{ fontSize: '80px' }} />
                        <div style={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '25px auto' }}></div>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction='column' alignItems='center'>
                        <StorageIcon sx={{ fontSize: '80px' }} />
                        <div style={{ height: '3px', width: '200px', backgroundColor: '#C83649', margin: '25px auto' }}></div>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Skills;