<template>
<CelestinLetters></CelestinLetters>
<MainMenu></MainMenu>
</template>

<script>
import CelestinLetters from './background/celestinletters.vue'
import MainMenu from './menu/main-menu/main-menu'

export default {
    name: 'Main',
    components: {
        CelestinLetters,
        MainMenu,
    },
}
</script>