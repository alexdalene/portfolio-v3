<script>
	import { page } from '$app/stores';

	import Navbar from '$lib/components/default/Navbar.svelte';
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
		margin-top: -80px;
	}
</style>
