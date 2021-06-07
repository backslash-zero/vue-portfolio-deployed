<template>
    <div class="crosshair-wrapper">
        <div id="hline"></div>
        <div id="vline"></div>
    </div>

</template>

<script>
export default {
    name: 'CrossHair',
	mounted () {
        var hline = document.getElementById('hline');
        var vline = document.getElementById('vline');

        window.onmousemove = function (e) {
            var x = e.pageX;
            var y = e.pageY;
            hline.style.top = y + 'px';
            vline.style.left = x + 'px';
        };
    }
}
</script>

<style lang="scss" scoped>
    $background-color: rgba(0,0,0,0.25);
    $line-width: 1px;
    #hline, #vline
    {
        position: absolute;
        background-color: $background-color;
        opacity: 0.5;
        z-index: 9999;
        pointer-events: none;
    }
    #hline
    {
        width: 100%;
        height: $line-width;
    }
    #vline
    {
        width: $line-width;
        height: 100%;
    }
    @media (max-width: 540px)
    {

        .crosshair-wrapper ,#hline, #vline
        {
            display: hidden;
        }
    }
</style>