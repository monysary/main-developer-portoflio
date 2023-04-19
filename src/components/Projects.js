import { Box, Card, Grid, Typography, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import petPals from '../images/pet-pals.jpg';
import bitsPleaseChat from '../images/bits-please-chat.jpg';
import weatherDashboard from '../images/weather-dashboard.jpg';
import techBlog from '../images/tech-blog.jpg';
import vacayte from '../images/vacayte.jpg';
import botw from '../images/botw-encyclopedia.jpg'

function Projects() {
    const projects = [
        {
            name: 'Vacayte',
            description: "A travel app designed for adventurers to quickly make an itinerary by leveraging Yelp's API.",
            tech: ['React.js', 'Material UI', 'Node.js', 'Apollo Server', 'MongoDB', 'GraphQL', 'Yelp API'],
            url: 'https://obscure-fjord-08413.herokuapp.com/',
            github: 'https://github.com/monysary/vacayte-travel-app',
            image: vacayte
        },
        {
            name: 'Pet Pals',
            description: 'A social media platform for pet owners to connect and chat with each other about their pets and schedule play dates.',
            tech: ['React.js', 'Material UI', 'Node.js', 'Apollo Server', 'MongoDB', 'GraphQL', 'Socket.io'],
            url: 'https://hidden-headland-00556.herokuapp.com/',
            github: 'https://github.com/BryantTrinh/Pet-Pals-A-Social-Media-App-for-Pets',
            image: petPals
        },
        {
            name: 'Breath of the Wild Encyclopedia',
            description: 'A Legend of Zelda: Breath of the Wild encyclopedia made in the style of the games in-game item menu. Users can click and view in-game material to learn more about each item.',
            tech: ['React.js', 'Material UI', 'Web API'],
            url: 'https://monysary.github.io/Breath-of-the-Wild-Encyclopedia/',
            github: 'https://github.com/monysary/Breath-of-the-Wild-Encyclopedia',
            image: botw
        },
        {
            name: 'Bits Please Chat',
            description: 'An online instant message app where users communicate using only emojis.',
            tech: ['Handlebars.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Socket.io'],
            url: 'https://damp-river-11459.herokuapp.com/',
            github: 'https://github.com/monysary/Bits-Please-Chat',
            image: bitsPleaseChat
        },
        {
            name: 'The Tech Blog',
            description: 'A blog website built using the CRUD operation for posting, reading, commenting, updating, and deleting user blog posts! Users must be logged in to see posts.',
            tech: ['Handlebars.js', 'Bootstrap CSS', 'Node.js', 'Express.js', 'MySQL'],
            url: 'https://agile-headland-11573.herokuapp.com/',
            github: 'https://github.com/monysary/Tech-Blog',
            image: techBlog
        },
        {
            name: 'The Weather Dashboard',
            description: 'A weather app that allows users to search for current and future weather forecasts of cities, as well as save and delete the searches.',
            tech: ['HTML', 'Bootstrap CSS', 'Javascript', 'Third Party API'],
            url: 'https://monysary.github.io/Weather-Dashboard/',
            github: 'https://github.com/monysary/Weather-Dashboard',
            image: weatherDashboard
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
                        <Button size="small" variant='outlined' endIcon={<GitHubIcon />} href={github} target='_blank'
                            sx={{ color: '#C83649', borderColor: '#C83649', '&:hover': { color: '#A42C3B', borderColor: '#A42C3B' } }}>
                            GitHub
                        </Button>
                        <Button size="small" variant='contained' endIcon={<LaunchIcon />} href={url} target='_blank'
                            sx={{ backgroundColor: '#C83649', color: '#F5F5F5', '&:hover': { backgroundColor: '#A42C3B' }, }} >
                            Visit
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    return (
        <Box padding='70px 20px' id='Projects'>
            <Grid container justifyContent='center' alignItems='center' marginBottom='100px'>
                <Typography fontSize='40px' component='h3' marginX='20px' sx={{ '@media (max-width: 600px)': { fontSize: '30px' } }}>Projects</Typography>
            </Grid>
            <Grid container justifyContent='center' gap={2}>
                {projects.map(project => <ProjectCard
                    key={project.name}
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