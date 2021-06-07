<template>
    <div class="main-menu-item">
        <h2>
            <router-link v-if="type === 'router-link'" :to="url">{{title}}</router-link>
            <a v-else :href="url" target="_blank">{{title}}</a>
        </h2>
    </div>
</template>

<script>
export default {
    name: 'MainMenuItem',
    props : {
        title: String,
        url: String,
        type: String
    },
}
</script>

<style lang="scss" scoped>

.main-menu-item{
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    text-align: center;
}
h2 {
    font-size: 10vh;
    -webkit-text-fill-color: rgba(0, 0, 0, 0); /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black ;
    margin: 0;
}
@media (max-width: 540px) {
    h2 {
        font-size: 17vw;
    }
}
</style>