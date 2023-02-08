import { Box, Card, Grid, Typography, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import petPals from '../images/pet-pals.jpg'

function Projects() {
    const projects = [
        {
            name: 'Pet Pals',
            description: 'A social media platform for pet owners to connect with other owners and chat with each other about their pets and schedule play dates!',
            tech: ['React', 'Material UI', 'Node', 'Express', 'MongoDB', 'GraphQL', 'Socket.io'],
            url: 'https://hidden-headland-00556.herokuapp.com/',
            github: 'https://github.com/BryantTrinh/Pet-Pals-A-Social-Media-App-for-Pets',
            image: petPals
        }
    ]

    function ProjectCard({ name, description, tech, url, github, image }) {
        return (
            <Grid item>
                <Card sx={{ maxWidth: 345, borderRadius: '0' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                            {name}
                        </Typography>
                        <Box height='2px' width='100px' backgroundColor='#C83649' margin='10px auto'></Box>
                        <Typography variant="body2" color="text.primary" textAlign='center'>
                            {description}
                        </Typography>
                        <Box height='2px' width='100px' backgroundColor='#C83649' margin='10px auto'></Box>
                        <Typography variant="body2" color="text.secondary" textAlign='center'>
                            {tech.join(' | ')}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-evenly' }} >
                        <Button size="small" variant='outlined' startIcon={<GitHubIcon />} href={github}
                            sx={{ color: '#C83649', borderColor: '#C83649', '&:hover': { color: '#A42C3B', borderColor: '#A42C3B' } }}>
                            GitHub
                        </Button>
                        <Button size="small" variant='contained' startIcon={<LanguageIcon />} href={url}
                            sx={{ backgroundColor: '#C83649', color: '#F5F5F5', '&:hover': { backgroundColor: '#A42C3B' }, }} >
                            Visit
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    return (
        <Box padding='50px'>
            <Grid container justifyContent='center' alignItems='center' marginBottom='100px'>
                <ArrowBackIosNewIcon sx={{ color: '#C83649', fontSize: '40px' }} />
                <Typography fontSize='40px' component='h3' marginX='20px' sx={{ '@media (max-width: 600px)': { fontSize: '40px' } }}>Projects</Typography>
                <ArrowForwardIosIcon sx={{ color: '#C83649', fontSize: '40px' }} />
            </Grid>
            <Grid container>
                {projects.map(project => <ProjectCard
                    name={project.name}
                    description={project.description}
                    tech={project.tech} url={project.url}
                    github={project.github}
                    image={project.image}
                />)}
            </Grid>
        </Box>
    )
}

export default Projects;