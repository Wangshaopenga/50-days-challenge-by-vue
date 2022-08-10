<template>
	<div class="container">
		<div>
			<i class="ri-twitter-fill icon"></i>
			<p class="number">{{ num[0] }}</p>
			<p class="description">Twitter Followers</p>
		</div>
		<div>
			<i class="ri-youtube-fill icon"></i>
			<p class="number">{{ num[1] }}</p>
			<p class="description">Twitter Followers</p>
		</div>
		<div>
			<i class="ri-facebook-circle-fill icon"></i>
			<p class="number">{{ num[2] }}</p>
			<p class="description">Facebook Fans</p>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';

let num = $ref([0, 0, 0])
onMounted(() => {
	let timer = setInterval(() => {
		if (num[0] >= 14990 && num[1] >= 4990 && num[2] >= 7490) {
			clearInterval(timer)
		}
		if (num[0] <= 14990) num[0] += 20
		if (num[1] <= 4990) num[1] += 10
		if (num[2] <= 7490) num[2] += 10
	}, 1);
})
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");

.container {
	width: 100vw;
	height: 100vh;
	background-color: #8e44ad;
	display: flex;
	justify-content: center;
	font-family: "Roboto Mono", sans-serif;
	align-items: center;
	overflow: hidden;
	div {
		padding: 50px;
		text-align: center;
		color: #fff;

		.number {
			font-size: 60px;
		}

		.icon {
			color: #fff;
			font-size: 60px;
		}
	}

	@media (max-width: 700px) {
		flex-direction: column;
	}
}
</style>
