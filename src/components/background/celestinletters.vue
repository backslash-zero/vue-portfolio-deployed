<template>
	<div class="bgcontainer">
		<div class="mainLetterWrapper">
			<div class="doubleLetterWrapper lettersTop">
				<div class="pairLetterWrapper">
					<div class="letter first">
                     <div class="letter-block hTopFull"></div>
                     <div class="letter-block vLeftFull"></div>
                     <div class="letter-block hBottomFull"></div>
					</div>
					<div class="letter second">
                  <div class="letter-block hTopFull"></div>
                  <div class="letter-block vLeftFull"></div>
                  <div class="letter-block hBottomFull"></div>
                  <div class="letter-block hCenterFull"></div>
					</div>
				</div>
				<div class="pairLetterWrapper">
					<div class="letter third">
						<div class="letter-block vLeftFull"></div>
                  <div class="letter-block hBottomFull"></div>
					</div>
					<div class="letter fourth">
							<div class="letter-block hTopFull"></div>
                     <div class="letter-block vLeftFull"></div>
                     <div class="letter-block hBottomFull"></div>
                     <div class="letter-block hCenterFull"></div>
					</div>
				</div>
			</div>
			<div class="doubleLetterWrapper lettersBottom">
				<div class="pairLetterWrapper">
					<div class="letter fifth">
						<div class="letter-block hTopFull"></div>
						<div class="letter-block vLeftHalfTop"></div>
						<div class="letter-block hCenterFull"></div>
						<div class="letter-block hBottomFull"></div>
						<div class="letter-block vRightHalfBottom"></div>
					</div>
					<div class="letter sixth">
						<div class="letter-block hTopFull"></div>
						<div class="letter-block vCenterFull"></div>
					</div>
				</div>
				<div class="pairLetterWrapper">
					<div class="letter seventh">
						<div class="letter-block hTopFull"></div>
						<div class="letter-block vCenterFull"></div>
						<div class="letter-block hBottomFull"></div>
					</div>
					<div class="letter eigths">
						<div class="letter-block vLeftFull"></div>
						<div class="letter-block vRightFull"></div>
						<div class="letter-block vNleft"></div>
						<div class="letter-block vNright"></div>
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
$padding-half: 4px;

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
   position: relative;
   width: 50%;
   height: 100%;
   margin-right: $padding-unit;
   margin-bottom: $padding-unit;
}

.lettersTop {
   margin-bottom: $padding-half;
}

.lettersBottom {
   margin-top: $padding-half;
}

.first
{
   margin-top: 0px;
   margin-left: 0px;
}

.second
{
   margin-top: 0px;
}
.third
{
   margin-top: 0px;
}
.fourth
{
   margin-top: 0px;
   margin-right: 0px;  
}
.fifth
{
   margin-bottom: 0px;
   margin-left: 0px;  
}
.sixth
{
   margin-bottom: 0px;
}
.seventh
{
   margin-bottom: 0px;
}
.eigths
{
   margin-bottom: 0px;
   margin-right: 0px;  
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

   .lettersTop {
      margin-bottom: $padding-unit;
      box-sizing: border-box;
   }

   .lettersBottom {
      margin-top: $padding-unit;
      box-sizing: border-box;
   }

   .first
   {
      margin-top: 0px;
      margin-left: 0px;
   }

   .second
   {
      margin-top: 0px;
      margin-right: 0px;
   }
   .third
   {
      margin-top: $padding-unit;
      margin-left: 0px;
   }
   .fourth
   {
      margin-top: $padding-unit;
      margin-right: 0px;  
   }
   .fifth
   {
      margin-bottom: $padding-unit;
      margin-left: 0px;  
   }
   .sixth
   {
      margin-bottom: $padding-unit;
      margin-right: 0px;  
   }
   .seventh
   {
      margin-top: $padding-unit;
      margin-left: 0px; 
      margin-bottom: 0px;
   }
   .eigths
   {
      margin-top: $padding-unit;
      margin-bottom: 0px;
      margin-right: 0px;  
   }
}

</style>