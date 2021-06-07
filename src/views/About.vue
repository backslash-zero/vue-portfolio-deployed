<template>
    <div class="page-wrapper">
        <BackButton />
        <div class="container">
            <div class="wrapper">
                <div class="bio">
                    <p>My name is Célestin, I'm a french designer, developer and visual artist.
                        <br>
                        <br>I'm currently focusing on learning how to code at <a href="https://www.42.fr" target="_blank">42</a> school.
                        <br>
                        <br>You can find out more about my corporate work on my <a href="https://linkedin.com/in/celestin" target="_blank">linkedin</a>.
                        <br>
                        <br>For inquiries please reach out to me at <em>hello@celest.in</em>
                        <br>
                        <br>
                    </p>
                    <p id="copyright"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackButton from '../components/navigation/backbutton';

export default {
    name: 'About',
    components: {
        BackButton,
    },
    mounted() {
        var copyrightElement = document.getElementById( "copyright" );
        var currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = "© " + currentYear+ " - Célestin. All rights reserved.";
    }
}
</script>

<style scoped>
h2 {
    font-size: 10vh;
}
.bio{
    padding: 24px;
}
.deneb{
    color:red;
    transform: scale(1) rotate(0deg);
    transition: all 1.2s ease;
}
.deneb:hover{
    color:green;
    transform: scale(1.3) rotate(360deg);
}
</style>