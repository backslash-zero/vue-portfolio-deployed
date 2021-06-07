<template>
    <div class="page-wrapper">
        <div class="lightbox">
            <vue-easy-lightbox
            loop
            :visible="visible"
            :imgs="filteredPhotos"
            :index="index"
            @hide="handleHide">
            </vue-easy-lightbox>
        </div>
        <BackButton url="/projects" />
        <div class="container">
                <transitiongroup tag="div" class="project-wrapper">
                    <div class="info-wrapper">
                        <div class="info-box">
                            <h2>{{ project.title }}</h2>
                            <p class="info-content">{{ project.description }}</p>
                            <div v-if="project.thanks">
                                <h3 class="dropdownTitle" @click="() => showHideThanks()">Special Thanks</h3>
                                <transition name="slidedown">
                                    <div v-if="specialThanksVisible" class="dropdown">
                                        <div v-for="(person, index) in project.thanks" :key="index" class="personthankeddiv">
                                            <p v-if="person.link" class="personthanked" ><a :href="person.link" class="thankedlinked">{{ person.name }}</a></p>
                                            <p v-else class="personthanked">{{ person.name }} </p>
                                        </div>
                                    </div>
                                </transition>
                            </div>    
                            <div v-if="project.externalLinks">
                                <h3 class="dropdownTitle" @click="() => showHideLinks()">External Links</h3>
                                <transition name="slidedown">
                                <div v-if="externalLinkVisible" class="dropdown">
                                    <div v-for="(link, index) in project.externalLinks" :key="index" class="personthankeddiv">
                                        <p class="personthanked" >
                                            <a class="thankedlinked" :href="link.url">{{ link.name }}</a>
                                        </p>
                                    </div>
                                </div>
                                </transition>      
                            </div>      
                        </div>
                    </div>
                    <div class="photo-wrapper">
                        <div class="photo-box">
                            <!-- <div class="photo">
                                <div
                                    class="image"
                                    v-for="(image, imageIndex) in filteredPhotos"
                                    :key="imageIndex"
                                    @click="index = imageIndex"
                                    :style="{ backgroundImage: 'url(' + image.src + ')' }"
                                ></div>
                            </div> -->
                            <!-- 
                            <light-box :media="filteredPhoto" class="photo"></light-box>
                            -->

                            <div v-for="(photo, index) in filteredPhotos" :key="index" class="photo" @click="() => showImg(index)">
                                <img :src="photo.thumb" :alt="photo.name" class="image"/>
                            </div> 
                        </div>
                    </div>
                </transitiongroup>
        </div>
    </div>
</template>

<script>
import BackButton from '../components/navigation/backbutton';
import projectsJson from '../data/projects.json';
import photosJson from '../data/photos.json';
import VueEasyLightbox from 'vue-easy-lightbox';


export default {
    name: 'Project',
    components: {
        BackButton,
        VueEasyLightbox,
    },
    data: function () {
        return {
            projects: projectsJson.projects,
            photos: photosJson,
            index: 0,
            visible: false,
            specialThanksVisible: false,
            externalLinkVisible: false
        }
    },
    methods: {
        showHideThanks() {
            if (this.specialThanksVisible == true)
                this.specialThanksVisible = false
            else {
                this.specialThanksVisible = true
            }
        },
        showHideLinks() {
            if (this.externalLinkVisible == true)
                this.externalLinkVisible = false
            else {
                this.externalLinkVisible = true
            }
        },
        showImg(index) {
        this.index = index
        this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    },
    computed: {
        filteredPhotos: function() {
            var photoProject = this.photos.find(photo => photo.name === this.$route.params.slug)
            return photoProject.photos
        },
        project: function() {
            return this.projects.find(project => project.slug === this.$route.params.slug)
        }
    }

}

</script>
<style>
    .photo{
        width: 120px;
        height: 120px;
        padding: 8px;
        margin-bottom: 48px;
        display: flex;
        justify-content: center;
    }
    img{
        max-width: 100%;
        max-height: 100%;
        display: block;
        align-self: center;
        z-index: 5;
    }
    img:hover{
        z-index: 0;
    }
    .info-wrapper,.photo-wrapper 
    {
        width:50%;
        margin: 0;
    }
    .info-content
    {
        font-size: 12px;
    }
    .project-wrapper
    {
        display: flex;
        height: 100%;
    }
    .info-wrapper
    {
        display: flex;
        flex-direction: vertical;
        justify-content: center;
        align-items: center;
    }
    .info-box
    {
        max-width: 50%;
    }
    .project-title{
        color: black;
    }
    .project-description{
        color: black;
    }

    .photo-wrapper{
        width: 60%;
        overflow: hidden;
        height: 100%;
    }

    .photo-box{
        height: 100%;
        display: flex;
        max-width: 100%;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: row wrap;
        overflow: auto;
        padding: 24px 0px 24px 0px;
        box-sizing: border-box;
    }
    .photo-box:after
    {
        content: "";
        display: block;
        height: 80px;
        width: 100%;
    }

    .vel-img-modal, .vel-modal
    {
        background: rgba(255, 255, 255, 0.5);
    }

    .vel-toolbar, .vel-toolbar .toolbar-btn
    {
        background: rgba(255, 255, 255, 0.5);
    }

    .vel-toolbar .toolbar-btn:active, .vel-toolbar .toolbar-btn:hover
    {
        background: rgba(255, 255, 255, 1);
    }

    .vel-toolbar
    {
        border-radius: 0px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        bottom: 8px;
        background: rgba(255, 255, 255, 1);
    }
    .vel-toolbar:hover, .vel-toolbar:active
    {
        border: 1px solid rgba(0, 0, 0, 1);
        transition: all 0.4s ease;
    }

    .vel-img-wrapper
    {
        cursor: none;
    }
    .icon
    {
        fill: rgba(0, 0, 0, 0.5);
    }
    .icon:hover
    {
        fill: rgba(0, 0, 0, 0.75);
    }
    .dropdown
    {
        position: absolute;
        padding: 0px 12px 0px 12px;
        background-color: rgba(255, 255, 255, 0.5);
        border: 1px solid rgba(0, 0, 0, 1)
    }

    @media (max-width: 540px) {
        .project-wrapper
        {
            flex-direction: column;
            padding: 0px 24px 80px 24px;
            height: 100%;
            margin-top: 64px;
            margin-bottom: 64px;
        }
        .photo-wrapper, .info-wrapper, .info-box, .photo-box
        {
            width: 100%;
            max-width: 100%;
            overflow: none;
        }
        .photo-wrapper
        {
            height: 100%;
            overflow: none;
        }
        .photo-box
        {
            padding: 0px;
            height: 100%;
            overflow: none;
            justify-content: none;
            box-sizing: border-box;
            padding-bottom: 40px;
        }
        .photo-box:after
        {
            display: block;
            position: static;
            height: 80px;
        }
        .photo{
            height: auto;
            padding: 0px;
            margin-bottom: 12px;
            display: block;
        }
        img{
            width: 100%;
            display: block;
            align-self: center;
        }
    }
</style>