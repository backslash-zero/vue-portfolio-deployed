<template>
    <div v-if="visible" class="thumbwrapper">
        <img :src="thumbs[index]" class="thumb">
    </div>
    <div class="projectcontainer">
        <div class="wrappermain">
            <div class="projectwrapper">
                <div :key="project.id" v-for="project in projects">
                    <PortfolioProject :project="project" @mouseenter="showImg(project.id)" @mouseleave="handleHide()"/>
                </div>
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

<style>
.projectcontainer
{
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 80px 0px 80px 0px;
    box-sizing: border-box;
}
.wrappermain
{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100%;
    box-sizing: border-box;
}

.projectwrapper
{
    height: auto;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    overflow: auto;
}

</style>
