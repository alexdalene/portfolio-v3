<script>
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let open = false;
</script>

<header class="navbar">
	<span class="navbar-logo" class:open>AD</span>
	<button
		class="navbar-btn"
		class:open
		aria-expanded={open}
		aria-label="Toggle Menu"
		on:click={() => (open = !open)}
	>
		{#if open}
			CLOSE
		{:else}
			MENU
		{/if}
		<span class="material-symbols-outlined">
			{#if open}
				menu_open
			{:else}
				menu
			{/if}
		</span>
	</button>
</header>

{#if open}
	<nav class="navbar-open" transition:fade={{ duration: 200, easing: cubicOut }}></nav>
{/if}

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1rem;
		background: transparent;
		position: sticky;
		top: 0;
		z-index: 2;
	}

	.navbar-logo {
		font-size: 3rem;
		font-family: var(--font-heading);
		z-index: 2;
		line-height: 1;
	}

	.navbar-logo.open {
		color: #fff;
	}

	.navbar-btn {
		background: transparent;
		font-size: 14px;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border: 1px solid #000;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 4px;
		z-index: 2;
		cursor: pointer;
		transition: background-color 200ms ease-out;
	}

	.navbar-btn:hover {
		background-color: #00000020;
	}

	.navbar-btn.open {
		background: #000;
		color: #fff;
		border-color: #fff;
	}

	.navbar-open {
		position: fixed;
		inset: 0;
		background: #000;
		color: #fff;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		z-index: 1;
	}
</style>
