
<template>
	<div class="bg-container">
		<canvas id="canvas"></canvas>
	</div>
</template>

<script>
import SmokeMachine from '@bijection/smoke';

export default {
	name: 'SmokeCanvas',
	mounted () {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		var ammount = 5;
		var shade = 110;
		// var steps = 0
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;    
		var party = SmokeMachine(ctx, [shade, shade, shade])
		party.step(1000)
		party.start()
		party.setPreDrawCallback(function(){
            for(var i=0; i<=ammount;i++){
				party.addSmoke((canvas.width/ammount) * i, canvas.height * 1, (Math.cos(i) + 2) * 0.1)
            }
        })
		onmousemove = function (e) {
			var x = e.clientX
			var y = e.clientY
			var n = 1
			var t = Math.floor(Math.random() * 200) + 4800
			party.addsmoke(x, y, n, t)
		};
	}
};
</script>

<style scoped>
#canvas {
	position: absolute;
}
.bg-container {
	position: fixed;
	margin: 0;
	padding: 0;
	width: 100%;
	overflow: hidden;
	height: 100%;
}
</style>