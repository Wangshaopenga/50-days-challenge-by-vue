<template>
	<div class="container">
		<audio ref="audio" :src="boo"></audio>
		<div class="btn">
			<button @click="play(1)">applause</button>
			<button @click="play(2)">boo</button>
			<button @click="play(3)">gasp</button>
			<button @click="play(4)">tada</button>
			<button @click="play(5)">victory</button>
			<button @click="play(6)">wrong</button>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import applause from "../assets/viedo/day9/applause.mp3";
import boo from "../assets/viedo/day9/boo.mp3";
import gasp from "../assets/viedo/day9/gasp.mp3";
import tada from "../assets/viedo/day9/tada.mp3";
import victory from "../assets/viedo/day9/victory.mp3";
import wrong from "../assets/viedo/day9/wrong.mp3";
const audio = $ref();
let flag = $ref(1);
const Play = () => {
	audio.play();
};
const play = (itme) => {
	switch (itme) {
		case 1:
			audio.src = applause;
			break;
		case 2:
			audio.src = boo;
			break;
		case 3:
			audio.src = gasp;
			break;
		case 4:
			audio.src = tada;
			break;
		case 5:
			audio.src = victory;
			break;
		case 6:
			audio.src = wrong;
			break;
		default:
			break;
	}
	Play();
};
</script>

<style scoped lang="scss">
* {
	box-sizing: border-box;
}
.container {
	height: 100vh;
	width: 100vw;
	background: #a164df;
	audio {
		display: none;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	.btn {
		button {
			color: #fff;
			font-size: 18px;
			outline: none;
			border: none;
			background: #663399;
			width: 150px;
			height: 75px;
			padding: 10px;
			margin: 10px;
			&:hover {
				background: #6c38a0;
			}
		}
	}
}
</style>
