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
            subtitle: "Mai 2024 - Fev 2025",
            description: "O projeto Blue Ocean é um site informativo desenvolvido para conscientizar sobre os impactos da poluição marinha e incentivar ações para a preservação dos oceanos. Ele utiliza HTML, CSS e JavaScript para oferecer uma experiência visual e interativa. O design do site é aprimorado com imagens temáticas.",
            technologies: "Tecnologias: JavaScript, HTML, CSS",
            websiteURL: "https://blueoceann.netlify.app/",
            codeURL: "https://github.com/gabimdevs/Project-BlueOcean.git",
        },
        {
            title: "CoworkHub Reservation System",
            subtitle: "Ago 2025 - Set 2025",
            description: "O CoworkHub Reservation é um sistema web de reservas de espaços de coworking que permite gerenciar a disponibilidade de salas, usuários e agendamentos de forma organizada. O projeto simula um produto real de mercado voltado para coworkings, focado em organização de reservas e experiência do usuário.",
            technologies: "Tecnologias: Java, Spring Boot, JavaScript, HTML, CSS, Docker",
            websiteURL: "",
            codeURL: "https://github.com/gabimdevs/coworkhub-reservation.git",
        },
        {
            title: "Cash Up API",
            subtitle: "Abr 2025 - Mai 2025",
            description: "O Cash Up API é uma API REST desenvolvida em Java com Spring Boot voltada para controle financeiro, inicialmente focada no gerenciamento de categorias financeiras. O projeto segue arquitetura em camadas e boas práticas REST, sendo uma base para expansão de um sistema financeiro completo.",
            technologies: "Tecnologias: Java, Spring Boot",
            websiteURL: "",
            codeURL: "https://github.com/gabimdevs/cash-up-api.git",
        },
        {
            title: "My Portfolio",
            subtitle: "Mar 2024 - Abr 2024",
            description: "Meu portfólio pessoal é um site desenvolvido para apresentar minhas habilidades, experiências e projetos como desenvolvedora front-end. Utilizando React e Material UI, o site é responsivo e oferece uma navegação fluida. Ele inclui seções sobre mim, minhas habilidades e meus projetos, com links para repositórios e sites relacionados.",
            technologies: "Tecnologias: React, Material UI, TypeScript",
            websiteURL: "https://gabimdev.vercel.app/",
            codeURL: "https://github.com/gabimdevs/meu-portfolio.git",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
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