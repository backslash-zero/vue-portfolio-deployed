<template>
	<div class="bgcontainer">
		<div class="mainLetterWrapper">
			<div class="doubleLetterWrapper">
				<div class="pairLetterWrapper">
					<div class="letter first">
						<svg class="char-svg" width="200" height="200" viewBox="0 0 200 200"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="25%" height="100%"/>
							<rect width="100%" height="25%"/>
							<rect y="75%" width="100%" height="25%"/>
						</svg>
					</div>
					<div class="letter second">
						<svg class="char-svg" width="200" height="200" viewBox="0 0 200 200"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="25%" height="100%"/>
							<rect width="100%" height="25%"/>
							<rect y="75" width="100%" height="25%"/>
							<rect y="150" width="100%" height="25%"/>
						</svg>
					</div>
				</div>
				<div class="pairLetterWrapper">
					<div class="letter third">
						<svg class="char-svg" width="200" height="200" viewBox="0 0 200 200"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="50" height="200"/>
							<rect y="150" width="200" height="50"/>
						</svg>
					</div>
					<div class="letter fourth">
						<svg class="char-svg" width="200" height="200" viewBox="0 0 200 200"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="25%" height="100%"/>
							<rect width="100%" height="25%"/>
							<rect y="75" width="100%" height="25%"/>
							<rect y="150" width="100%" height="25%"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="doubleLetterWrapper">
				<div class="pairLetterWrapper">
					<div class="letter fifth">
						<svg class="char-svg" width="200" height="200" viewBox="0 0 200 200"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="150" width="200" height="50"/>
							<rect y="75" width="200" height="50"/>
							<rect width="200" height="50"/>
							<rect width="50" height="125"/>
							<rect x="150" y="75" width="50" height="125"/>
						</svg>
					</div>
					<div class="letter sixth">
						<svg class="char-svg" width="200" height="200" viewBox="0 0 200 200"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="200" height="50"/>
							<rect x="75" width="50" height="200"/>
						</svg>
					</div>
				</div>
				<div class="pairLetterWrapper">
					<div class="letter seventh">
						<svg class="char-svg" width="200" height="200" viewBox="0 0 200 200"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="200" height="50"/>
							<rect y="150" width="200" height="50"/>
							<rect x="75" width="50" height="200"/>
						</svg>
					</div>
					<div class="letter eigths">
						<svg class="char-svg" width="200" height="200" viewBox="0 0 200 200"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="50" y="50" width="50" height="50"/>
							<rect width="50" height="200"/>
							<rect x="150" width="50" height="200"/>
							<rect x="100" y="100" width="50" height="50"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script >
export default {
  name: 'CelestinLetters',
}
</script>

<style lang="scss" scoped>
$padding-unit: 8px;

body{
   margin:0;
}

.bgcontainer{
   height: 100%;
   width: 100%;
   position: absolute;
}

.mainLetterWrapper{
   display: flex;
   height: 100%;
   width: 100%;
   align-content: stretch;
   flex-direction: column;
   flex-grow: 1;
}
.doubleLetterWrapper{
   height: 50%;
   display: flex;
   flex-direction: row;
}

.pairLetterWrapper{
   width: 50%;
   display: flex;
   align-content: stretch;
   flex-direction: row;
   flex-grow: 1;
}

.letter{
   width: 50%;
   flex-grow: 1;
   padding: $padding-unit $padding-unit $padding-unit $padding-unit;
}

.letter-top{
   padding-top: 0px;
}

.letter-bottom{
   padding-bottm: 0px;
}

.letter-left{
   padding-left: 0px;  
}

.letter-right{
   padding-right: 0px;  
}

.first
{
   padding-top: 0px;
   padding-left: 0px;  
}

.second
{
   padding-top: 0px;
}
.third
{
   padding-top: 0px;
}
.fourth
{
   padding-top: 0px;
   padding-right: 0px;  
}
.fifth
{
   padding-bottom: 0px;
   padding-left: 0px;  
}
.sixth
{
   padding-bottom: 0px;
}
.seventh
{
   padding-bottom: 0px;
}
.eigths
{
   padding-bottom: 0px;
   padding-right: 0px;  
}

.char-svg {
  position: block;
  height: 100%;
  width: 100%;
  fill: #c8c8c8;
  mix-blend-mode: invert;
  min-width: 0;
  min-height: 0;
}

@media (max-width: 540px) {
   .doubleLetterWrapper{
      height: 50%;
      flex-direction: column;
   }

   .pairLetterWrapper{
      width: 100%;
      height: 50%;
   }
   .first
   {
      padding-top: 0px;
      padding-left: 0px;  
   }

   .second
   {
      padding-top: 0px;
      padding-right: 0px;
   }
   .third
   {
      padding-top: $padding-unit;
      padding-left: 0px;
   }
   .fourth
   {
      padding-top: $padding-unit;
      padding-right: 0px;  
   }
   .fifth
   {
      padding-bottom: $padding-unit;
      padding-left: 0px;  
   }
   .sixth
   {
      padding-bottom: $padding-unit;
      padding-right: 0px;  
   }
   .seventh
   {
      padding-left: 0px; 
      padding-bottom: 0px;
   }
   .eigths
   {
      padding-bottom: 0px;
      padding-right: 0px;  
   }
}

</style>