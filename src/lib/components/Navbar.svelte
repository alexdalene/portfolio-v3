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
	<nav class="navbar-open" transition:fade={{ duration: 200, easing: cubicOut }}>
		<a href="#about">Om</a>
		<a href="#skills">Ferdigheter</a>
		<a href="#clients">Klienter</a>
		<a href="#history">Historie</a>
		<a href="#contact">Kontakt</a>
	</nav>
{/if}

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0.5rem;
		background: transparent;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.navbar-logo {
		font-size: 3rem;
		font-family: var(--font-heading);
		z-index: 10;
		line-height: 1;
	}

	.navbar-logo.open {
		color: var(--white-color);
	}

	.navbar-btn {
		background: transparent;
		font-size: 14px;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border: 1px solid var(--black-color);
		color: var(--black-color);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 4px;
		z-index: 10;
		cursor: pointer;
		transition: background-color 200ms ease-out;
	}

	.navbar-btn:hover {
		background-color: #00000020;
	}

	.navbar-btn.open {
		background: var(--black-color);
		color: var(--white-color);
		border-color: var(--white-color);
	}

	.navbar-btn.open:hover {
		background-color: #ffffff20;
	}

	.navbar-open {
		position: fixed;
		inset: 0;
		background: var(--black-color);
		color: var(--white-color);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		z-index: 9;

		& a {
			font-size: 3rem;
			font-weight: 700;
			text-transform: uppercase;
			text-decoration: none;
			color: var(--white-color);
			width: 100%;
			text-align: end;
			padding-right: 1rem;
			background-color: var(--black-color);
			transition: all 200ms ease-out;
			padding-block: 1rem;

			&:hover {
				color: var(--black-color);
				background-color: var(--white-color);
			}
		}
	}
</style>
