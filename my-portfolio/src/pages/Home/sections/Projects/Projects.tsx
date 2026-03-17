import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [ 
        {
            title: "Blue Ocean",
            subtitle: "Maio 2024 - Fev 2025",
            description: "O projeto Blue Ocean é um site informativo desenvolvido para conscientizar sobre os impactos da poluição marinha e incentivar ações para a preservação dos oceanos. Ele utiliza HTML, CSS e JavaScript para oferecer uma experiência visual e interativa. O design do site é aprimorado com imagens temáticas.",
            technologies: "Tecnologias: JavaScript, HTML, CSS",
            websiteURL: "https://blueoceann.netlify.app/",
            codeURL: "https://github.com/gabimmdev/Project-BlueOcean.git",
        },
        {
            title: "MotoTrack App",
            subtitle: "Maio 2025 - Dez 2025",
            description: "O projeto MotoTrack App é uma aplicação mobile desenvolvida para facilitar a gestão e o controle de motos em pátios. Utiliza React Native para o desenvolvimento, garantindo uma experiência consistente entre dispositivos Android e iOS. O app oferece funcionalidades como cadastro de motos e registro de entradas e saídas.",
            technologies: "Tecnologias: React Native, Expo, TypeScript, Context API",
            websiteURL: "https://mottupatioapp.netlify.app/",
            codeURL: "https://github.com/gabimmdev/mototrack.git",
        },
        {
            title: "My Portfolio",
            subtitle: "Mar 2024 - Abr 2024",
            description: "Meu portfólio pessoal é um site desenvolvido para apresentar minhas habilidades, experiências e projetos como desenvolvedora front-end. Utilizando React e Material UI, o site é responsivo e oferece uma navegação fluida. Ele inclui seções sobre mim, minhas habilidades e meus projetos, com links para repositórios e sites relacionados.",
            technologies: "Tecnologias: React, Material UI, TypeScript",
            websiteURL: "https://gabimdev.vercel.app/",
            codeURL: "https://github.com/gabimmdev/meu-portfolio.git",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection