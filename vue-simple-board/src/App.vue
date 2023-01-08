<template>
	<v-app>

		<NavComp />

		<v-card class="view-content">
			<router-view />
		</v-card>

	</v-app>
</template>

<script>
	import NavComp from '@/components/NavComp';

	export default {
		name: 'App',
		components: {
			NavComp
		}
	}
</script>

<style lang="scss">
	.v-application--wrap {
		flex-direction: row;
		padding: 20px;
		.view-content {
			flex: 1;
			margin-left: 20px;
		}
	}
</style>
