<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

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
