<template>
  <div class="page-wrapper">
        <BackButton />
        <div class="container">
            <div class="wrapper">
                <div class="notfoundwrapper">
                    <h2 class="bigmessage">Nothing Here :(</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackButton from '../components/navigation/backbutton'
export default {
    name: 'NotFound',
    components: {
        BackButton,
    },
}
</script>

<style>

@media (max-width: 540px)
{
    .notfoundwrapper
    {
        padding: 40px;
        text-align: center;
    }
}
</style>