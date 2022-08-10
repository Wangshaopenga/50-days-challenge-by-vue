<template>
	<div class="container active">
		<input
			ref="input"
			:class="{ active: active }"
			type="text"
			placeholder="Search..."
		/>
		<i class="ri-twitter-fill search" @click="click" ></i>
	</div>
</template>

<script setup>
const input = $ref(null);
let active = $ref(false);
const click = () => {
	active = !active;
	input.placeholder = input.placeholder ? "" : "Search...";
};
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100%;
	background: #fab;
	display: flex;
	justify-content: center;
	align-items: center;
	input {
		font-size: 18px;
		box-sizing: border-box;
		width: 250px;
		height: 50px;
		outline: none;
		border: none;
		border-radius: 1px solid rgba(0, 0, 0, 0.2);
		padding: 0px 10px;
		border-radius: 5px;
		transition: all 0.5s;
	}
	.search {
		position: relative;
		left: -35px;
		top: 2px;
		cursor: pointer;
		font-size: 18px;
	}
	.active {
		width: 50px;
	}
}
</style>
