import { Box, Card, Grid, Typography, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import petPals from '../images/pet-pals.jpg';
import bitsPleaseChat from '../images/bits-please-chat.jpg';
import weatherDashboard from '../images/weather-dashboard.jpg';
import techBlog from '../images/tech-blog.jpg';

function Projects() {
    const projects = [
        {
            name: 'Pet Pals',
            description: 'A social media platform for pet owners to connect and chat with each other about their pets and schedule play dates!',
            tech: ['React.js', 'Material UI', 'Node.js', 'Apollo Server', 'MongoDB', 'GraphQL', 'Socket.io'],
            url: 'https://hidden-headland-00556.herokuapp.com/',
            github: 'https://github.com/BryantTrinh/Pet-Pals-A-Social-Media-App-for-Pets',
            image: petPals
        },
        {
            name: 'Bits Please Chat',
            description: 'An online instant message app where users communicate using only emojis!',
            tech: ['Handlebars.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Socket.io'],
            url: 'https://damp-river-11459.herokuapp.com/',
            github: 'https://github.com/monysary/Bits-Please-Chat',
            image: bitsPleaseChat
        },
        {
            name: 'The Weather Dashboard',
            description: 'A weather app that allows users to search for current and future weather forecasts of cities, as well as save and delete the searches!',
            tech: ['HTML', 'Bootstrap CSS', 'Javascript', 'Third Party API'],
            url: 'https://monysary.github.io/Weather-Dashboard/',
            github: 'https://github.com/monysary/Weather-Dashboard',
            image: weatherDashboard
        },
        {
            name: 'The Tech Blog',
            description: 'A blog website built using the CRUD operation for posting, reading, commenting, updating, and deleting user blog posts! Users must be logged in to see posts.',
            tech: ['Handlebars.js', 'Bootstrap CSS', 'Node.js', 'Express.js', 'MySQL'],
            url: 'https://agile-headland-11573.herokuapp.com/',
            github: 'https://github.com/monysary/Tech-Blog',
            image: techBlog
        },
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
                    <CardContent sx={{ '@media (min-width: 600px)': { height: 190 } }}>
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
                <ArrowBackIosNewIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
                <Typography fontSize='40px' component='h3' marginX='20px' sx={{ '@media (max-width: 600px)': { fontSize: '30px' } }}>Projects</Typography>
                <ArrowForwardIosIcon sx={{ color: '#C83649', fontSize: '40px', '@media (max-width: 600px)': { fontSize: '30px' } }} />
            </Grid>
            <Grid container justifyContent='center' gap={2}>
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