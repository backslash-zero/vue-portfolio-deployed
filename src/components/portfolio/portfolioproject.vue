<template>
    <div class="title-line">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-linecap="miter-clip" stroke-linejoin="round" class="feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <p>
            <router-link class="link" :to="linkto">{{ project.title }}</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name : 'PortfolioProject',
    props: {
      project: Object,
    },
    data: function () {
        return {
            linkto: '/projects/' + this.project.slug
        }
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    $color: rgba(0,0,0,0.6);
    $color-hover: rgba(0,0,0,0.8);
    
    .title-line
    {
        display: flex;
        align-items: center;
        justify-self: left;
        justify-content: left;
        justify-items: left;
        stroke: $color;
        transition: all 0.4s ease;
    }
    .link{
        color: $color;
        text-shadow: none;
        transition: all 0.4s ease;
    }
    .title-line:hover, .link:hover{
        stroke: $color-hover;
    }

    .feather-folder
    {
        margin-right: 8px;
        stroke-width: 1px;   
    }

    @media (max-width: 540px){
    .link
    {
        font-size: 14px;
    }
}

</style>