<template>
  <div class="tree">
		<div id="box" :style="boxStyle">
			<div class="move">
				<div id="bg" >
					<img :style="boxStyle" src="./img/tree/tree-3200x786.png"/>
				</div>
				<div id="svg" >
						<embed id="tree-bg" :src="src" width="100%" height="100%"></embed>
				</div>
			</div>
			<div class="logo"></div>
		</div>
  </div>
</template>

<script>
import svg from './img/tree/tree-yz-3200x786.svg'
//var width = window.innerWidth;
var height = window.innerHeight-80;
//var svgBox = document.querySelector('#box');
//svgBox.style.width = width + 'px';
//svgBox.style.height = height + 'px';
window.addEventListener('resize',function(){
	height = window.innerHeight-80;
	console.log(height)
});

export default {
  name: 'tree',
  data () {
    return {
      src: svg,
      mes: height,
      boxStyle:{
//    	width: width+'px',
      	height: height+'px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree{
	width: 100%;
	/*overflow: hidden;*/
	/*position: relative;*/
	background-color: rosybrown;
}

			#box{
				position: relative;
				width: 100%;
				overflow: hidden;
				background-color: aquamarine;
			}
			
			.move{
				position: absolute;
				height: 100%;
			}
			.logo{
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: 999;
				background-image: url(./img/tree/tree-logo.png);
				background-position: center;	
				background-size: 25% 35%;
				background-repeat: no-repeat;
				/*background-color: red;*/
			}
			#bg{
				position: absolute;
				
			}
			#svg{
				position: absolute;
			}
</style>
