<template>
    <div class="container">
        <div class="wrapper">
            <MainMenuItem title="About" type="router-link" url="/about"/>
            <MainMenuItem title="Projects"   type="router-link" url="/projects"/>
            <MainMenuItem title="UI/UX" type="a" url="https://behance.net/cele_stin/"/>
            <MainMenuItem title="Dev"   type="a" url="https://github.com/backslash-zero"/>
        </div>
    </div>
</template>

<script>
import MainMenuItem from './main-menu-item'
export default {
    name: 'MainMenu',
    components: {
        MainMenuItem,
    },
}
</script>

<style>
</style>