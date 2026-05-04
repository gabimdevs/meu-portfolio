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
        "Java", "Python", "AI", "Typescript", "SQL", "Git", "GitHub", "React.js", "HTML", "CSS", "Material UI", "Figma", "Vite", "Node.js"
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
                    Olá, Que bom te ver por aqui! 
                    Sou formada em Análise e Desenvolvimento de Sistemas e atualmente curso Engenharia de Software, com foco em iniciar minha carreira como Engenheira de Software BackEnd.
                    Durante minha formação, desenvolvi projetos web utilizando tecnologias como React, Next.js, TypeScript, Java, SQL e React Native. Atuei na criação de interfaces, autenticação de usuários, validações de dados, consumo de APIs e organização de aplicações completas, sempre buscando transformar necessidades em soluções funcionais e bem estruturadas.
                    Também venho aprofundando meus conhecimentos em backend com Java e boas práticas de desenvolvimento, evoluindo continuamente minha base técnica e minha forma de resolver problemas.
                    Além do código, compartilho minha rotina e evolução na área de tecnologia como IT girl no YouTube @gabimdevs, falando sobre estudos, carreira e a realidade da jornada na área tech, com o objetivo de inspirar e ajudar quem está começando.
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