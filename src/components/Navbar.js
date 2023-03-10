import * as React from 'react';
import {
    AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';

const pages = ['Home', 'Skills', 'Projects'];

export const resumeURL = 'https://monysary.github.io/main-developer-portoflio/mony-sary-resume.pdf'

export const downloadResume = url => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
}

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: '100', backgroundColor: "#3C3A40" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop view Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#F5F5F5',
                            textDecoration: 'none',
                        }}
                    >
                        MONY SARY
                    </Typography>
                    {/* Mobile hamburger menu box */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: '#F5F5F5' }} />
                        </IconButton>
                        {/* Mobile view hamburger menu options */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <a key={page} href={`#${page}`}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                </a>
                            ))}
                        </Menu>
                    </Box>
                    {/* Desktop view menu links */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 3 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                href={`#${page}`}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#F5F5F5', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {/* Inquire button */}
                    <Box sx={{ flexGrow: 0, marginLeft: '24px' }}>
                        <Button variant="outlined" onClick={() => downloadResume(resumeURL)} startIcon={<DownloadIcon />}
                            sx={{
                                borderRadius: '18px',
                                borderColor: '#C83649',
                                color: '#F5F5F5',
                                '&:hover': {
                                    borderColor: '#F5F5F5',
                                    color: '#F5F5F5',
                                },
                                '@media (max-width: 600px)': {
                                    fontSize: '12px'
                                },
                                display: { xs: 'none', md: 'inline-flex' }
                            }}>Resume</Button>
                        <Button variant="contained" href='#Contact' sx={{
                            borderRadius: '18px',
                            backgroundColor: '#C83649',
                            color: '#F5F5F5',
                            '&:hover': {
                                backgroundColor: '#A42C3B',
                            },
                            '@media (max-width: 600px)': {
                                fontSize: '12px'
                            },
                            marginLeft: '24px'
                        }}>Contact</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
