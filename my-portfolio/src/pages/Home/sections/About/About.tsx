import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Java", "AI", "Typescript", "SQL", "Git", "React.js", "HTML", "CSS", "Material UI", "Figma", "Vite", "React Native", "Node.js"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">+1 ano</Typography>
                                <Typography textAlign="center">Backend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Tecnólogo</Typography>
                                <Typography textAlign="center">ADS</Typography>
                            </StyledCard>
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Bacharelado</Typography>
                                <Typography textAlign="center">Engenharia de Software</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                    Olá! Sou Gabriela, uma engenheira de software apaixonada por tecnologia e inovação. 
                    Com mais de um ano de experiência em desenvolvimento backend, tenho me dedicado a criar 
                    soluções eficientes e escaláveis. Minha jornada na área de tecnologia começou com um curso 
                    técnico em Análise e Desenvolvimento de Sistemas, onde adquiri uma base sólida em programação 
                    e desenvolvimento de software. Atualmente, estou cursando bacharelado em Engenharia de Software, 
                    buscando aprofundar meus conhecimentos e habilidades para enfrentar os desafios do mundo tecnológico. 
                    Estou sempre em busca de novas oportunidades para aprender e crescer profissionalmente, contribuindo 
                    para projetos que façam a diferença.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection