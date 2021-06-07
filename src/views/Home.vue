<template>
    <div class="page-wrapper">
        <CelestinLetters></CelestinLetters>
        <MainMenu></MainMenu>
    </div>    
</template>
 
<script>
import CelestinLetters from '../components/background/celestinletters.vue'
import MainMenu from '../components/menu/main-menu/main-menu'

export default {
    components: {
        CelestinLetters,
        MainMenu,
    },
}
</script>