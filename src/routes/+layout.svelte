<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<style>
	main {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: end;
		min-height: calc(80svh - 80px);
	}
</style>
