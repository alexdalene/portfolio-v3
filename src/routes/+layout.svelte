<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import Loading from '$lib/components/Loading.svelte';
</script>

{#if $page.loading}
	<Loading />
{:else}
	<Navbar />
	<main>
		<slot />
	</main>
{/if}

<style>
	:global(*) {
		&::selection {
			background-color: var(--black-color);
			color: var(--white-color);
		}
	}

	main {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: -80px;
	}
</style>
