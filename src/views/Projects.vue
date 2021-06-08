<template>
    <div class="page-wrapper">
        <BackButton />
        <PortfolioProjects :projects="projects"/>
    </div>
</template>

<script>
import BackButton from '../components/navigation/backbutton'
import PortfolioProjects from '../components/portfolio/portfolioprojects'
import projectsJson from '../data/projects.json'

export default {
    name: 'Projects',
    components: {
        BackButton,
        PortfolioProjects,
    },
    props: ['urltitle'],
    data: function () {
        return {
            projects: projectsJson.projects,
        }
    },
    
}
</script>

<style scoped>
.wrapper-menu {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>