<template>
    <div v-if="visible" class="thumbwrapper">
        <img :src="thumbs[index]" class="thumb">
    </div>
    <div class="wrappermain">
        <div class="projectwrapper">
            <div :key="project.id" v-for="project in projects">
                <PortfolioProject :project="project" @mouseenter="showImg(project.id)" @mouseleave="handleHide()"/>
            </div>
        </div>
    </div>
</template>

<script>
import PortfolioProject from './portfolioproject'
import thumbsJson from '../../data/thumbs.json'

export default {
    name: 'PortfolioProjects',
    components: {
        PortfolioProject,
    },
    props: {
        projects: Array,
    },
    data: function () {
        return {
            visible: false,
            index: 0,
            thumbs: thumbsJson
        }
    },
    methods: {
        showImg(index) {
            this.index = index - 1
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    },
}
</script>

<style scoped>
.wrappermain
{
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    align-items: center;
    justify-content: center;
}
.projectwrapper
{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;
    overflow: scroll;
}
.thumbwrapper
{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.thumb
{
    max-width: 50%;
    max-height: 50%;
    opacity: 0.75;
}

</style>
