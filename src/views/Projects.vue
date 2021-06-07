<template>
    <div class="page-wrapper">
        <BackButton />
        <div class="container portfoliowrapper">
            <div class="wrapper">
                <PortfolioProjects :projects="projects"/>
            </div>
        </div>
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
@media (max-width: 540px){
    .wrapper {
        height: calc(100% - 108px);
        margin-top: 48px;
        overflow: auto;
    }
}

</style>