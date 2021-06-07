<template>
    <div class="backbutton">
        <router-link :to="url"><p>← back</p></router-link>
    </div>
</template>
<script>
export default {
    name: 'backbutton',
    props: {
        url : {
            type: String,
            default: "/"
        }
    }
}

</script>

<style scoped>
.backbutton{
    position: fixed;
    z-index: 10;
    margin-left: 40px;
    margin-top: 40px;
}
@media (max-width: 540px)
{
    .backbutton{
        margin-left: 24px;
        margin-top: 24px;
    }
}
</style>