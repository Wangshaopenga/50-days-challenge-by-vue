<template>
	<div class="container">
		<div class="box" :class="{ active: is }">
			<ul>
				<li>Home</li>
				<li>Works</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<button @click="is = !is">
				<div class="line line1"></div>
				<div class="line line2"></div>
			</button>
		</div>
	</div>
</template>

<script setup>
let is = $ref(false);
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100%;
	background-color: #eafbff;
	background-image: linear-gradient(
		to bottom,
		#eafbff 0%,
		#eafbff 50%,
		#5290f9 50%,
		#5290f9 100%
	);
	display: flex;
	justify-content: center;
	align-items: center;
	.box {
		width: 80px;
		height: 70px;
		background-color: #fff;
		border-radius: 3px;
		box-shadow: 0 2px 5px rgb(0 0 0 / 30%);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: width 0.6s linear;
		button {
			border: none;
			cursor: pointer;
			position: relative;
			height: 30px;
			width: 30px;
			left: -3px;
			background-color: initial;
			.line {
				width: 30px;
				height: 3px;
				background-color: #5290f9;
				position: absolute;
				top: 10px;
				left: 5px;
				transition: transform 0.6s linear;
			}
			.line2 {
				top: auto;
				bottom: 10px;
			}
		}
		ul {
			display: flex;
			list-style-type: none;
			padding: 0;
			margin: 0;
			width: 0;
			transition: width 0.6s linear;
			li {
				transform: rotateY(0deg);
				opacity: 0;
				transition: transform 0.6s linear, opacity 0.6s linear;
				// position: relative;
				color: #000;
				text-decoration: none;
				margin: 0 10px;
			}
		}
	}
	.active {
		width: 380px;
		padding: 20px;
		button {
			padding: 15px;
			.line2 {
				transform: rotate(-855deg) translateY(5px);
			}
			.line1 {
				transform: rotate(855deg) translateY(-5px);
			}
		}
		ul {
			width: 100%;
			li {
				opacity: 1;
				transform: rotateY(360deg);
			}
		}
	}
}
</style>
