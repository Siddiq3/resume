import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  // Remove toggle state and useState hook

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Following major(big) projects showcases my skills and experience through real-world examples of my abilities. Each project is briefly described with links to code repositories and live link to project websites in it. It reflects my ability to solve complex problems, work with different technologies, and build/manage complex projects/architectures effectively.
        </Desc>
        {/* Remove ToggleButtonGroup and related buttons */}
        
        <CardContainer>
          {/* Render all projects */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
