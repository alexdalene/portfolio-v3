<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';

	import { onMount } from 'svelte';

	let ctx;

	onMount(() => {
		ctx = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger);

			gsap.from('.clients .item', {
				scrollTrigger: {
					trigger: '.clients',
					start: 'top bottom',
					end: 'bottom center',
					scrub: 1
				},
				yPercent: 100,
				duration: 0.6,
				stagger: 0.2
			});
		});

		return () => ctx.revert();
	});

	const clients = ['Omsorgs kollektivet', 'Le Monde Tapas', 'Guttas Campus', 'Sound of Happiness'];
</script>

<section class="clients">
	<div class="heading">
		<h2>Klienter</h2>
	</div>
	<div class="container">
		<div>
			{#each clients as client}
				<div class="item-wrapper">
					<div class="item">
						<h3>{client}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.clients {
		height: auto;
		min-width: 100%;
	}

	.heading {
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
	}

	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		margin-block: 2rem;
		font-weight: 400;
		padding-left: 0.5rem;
	}

	.item-wrapper {
		border-bottom: 0.5px solid #373133;
		background-color: var(--black-color);
		color: var(--white-color);
		transition: all 200ms ease-in-out;
		overflow: hidden;

		&:hover {
			background-color: var(--white-color);
			color: var(--black-color);
		}

		&:last-child {
			border-bottom: none;
		}
	}

	.item {
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
		padding-block: 1rem;
		padding-inline: 0.5rem;
	}

	h3 {
		font-size: 6rem;
		text-transform: uppercase;

		@media (max-width: 768px) {
			font-size: 3rem;
		}
	}
</style>
