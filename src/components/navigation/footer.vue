<template>
   <div class="fixed-bottom">
		<div class="last-text-container">
			<div class="square wave-box">
				<svg class="svg-item" width="90px" height="26px" viewBox="0 0 90 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<defs>
					<clipPath id="cut-off-1">
						<rect x="0" y="0" width="48" height="48" />
					</clipPath>
				</defs>
					<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" clip-path="url(#cut-off-1)">
						<path c d="M0,24.5 C12.4634419,24.5 12,1.74444444 23,1.5 C34,1.25555556 33.75,23.6264045 45,23.5 C56.25,23.3735955 56.25,1 67.5,1 C78.75,1 78.75,23.5 90,23.5" id="sin-wave" stroke-width="2" fill-rule="nonzero"></path>
					</g>
				</svg>
			</div>
			<div class="box-link wave-box"></div>
			<div class="content-rectangle">
				<p>hello@celest.in</p>
			</div>
			<div class="box-link"></div>
			<div class="square">
				<a href="https://instagram.com/cele_stin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
			</div>
			<div class="box-link"></div>
			<div class="square">
				<a href="https://open.spotify.com/user/supersucre?si=57dc033cc36e4f2a"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
$opacity-default: 0.6;
$opacity-hover: 0.3;
$color-style: rgba(0, 0, 0, $opacity-default);
$color-hover: rgba(55, 55, 55, $opacity-default);
$el-size: 48px;

.fixed-bottom {
  position: fixed;
  bottom: 16px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: left;
  justify-content: stretch;
  opacity: 1;
  transition: all 0.4s ease;
}

.last-text-container {
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 0 auto;
}

.box-link {
  width: $el-size / 2;
  height: 0px;
  border-top: 1px solid $color-style;
  opacity: $opacity-default;
}

.square {
  width: $el-size;
  height: $el-size;
  border: 1px solid $color-style;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: scale(1);
}

.content-rectangle {
  padding: 0px 16px 0px 16px;
  height: $el-size;
  border: 1px solid $color-style;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.iconbox {
  display: flex;
  align-items: center;
  justify-content: stretch;
}

.feather {
  display: block;
	margin: 0 auto;
	color: $color-style;
	stroke-width: 2;
  transition: all 0.4s ease;
}
  
.feather:hover {
	color: $color-hover;
}

.svg-item {
  display: block;
  margin: auto;
}

#sin-wave {
  stroke: $color-style;
  opacity: $opacity-default;
  -webkit-animation: slide-right 1s linear infinite both;
  animation: slide-right 1s linear infinite both;
}

@media (max-width: 540px) {
  $el-size: 40px;
  
  .box-link {
    width: $el-size / 4;
    height: 0px;
    border-top: 1px solid $color-style;
  }

  .square {
    width: $el-size;
    height: $el-size;
    border: 1px solid $color-style;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .content-rectangle {
    padding: 0px 16px 0px 16px;
    height: $el-size;
    border: 1px solid $color-style;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .wave-box {
    display: none;
  }
}

@-webkit-keyframes slide-right {
  0% {
	-webkit-transform: translateX(-45px);
	transform: translateX(-45px);
  }
  100% {
	-webkit-transform: translateX(0px);
	transform: translateX(0px);
  }
}
@keyframes slide-right {
  0% {
	-webkit-transform: translateX(-45px);
	transform: translateX(-45px);
  }
  100% {
	-webkit-transform: translateX(0px);
	transform: translateX(0px);
  }
}
</style>