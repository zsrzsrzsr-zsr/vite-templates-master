<template>
	<div class="card content-box">
		<div v-draggable class="drag-box flx-center">点击拖拽哦~</div>
	</div>
</template>

<script setup lang="ts" name="dragDirect"></script>

<style scoped lang="scss">
.content-box {
	position: relative;
	width:100%;
	height:100%;
	.drag-box {
		position: absolute;
		top: 110px;
		width: 300px;
		height: 300px;
		font-size: 23px;
		font-weight: bold;
		color: var(--el-color-primary-light-3);
		background: var(--el-color-primary-light-9);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

</style>
