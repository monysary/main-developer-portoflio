import { Box, Grid, Typography } from "@mui/material";

function Footer() {
    return (
        <Box backgroundColor='#3C3A40' padding='20px' color='#F5F5F5'>
            <Grid container justifyContent='center'>
                <Typography variant="overline" textAlign='center'>Created by Mony Sary ©2023 All Rights Reserved</Typography>
            </Grid>
        </Box>
    )
}

export default Footer;