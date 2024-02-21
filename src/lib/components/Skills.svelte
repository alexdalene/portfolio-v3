<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';

	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from('.skills .item', {
			scrollTrigger: {
				trigger: '.skills',
				start: 'top bottom',
				end: 'bottom center',
				scrub: 1
			},
			yPercent: 100,
			duration: 0.6,
			stagger: 0.2
		});
	});

	const skills = ['Utvikling', 'UI/UX', 'Motion'];
</script>

<section class="skills">
	<div class="heading">
		<h2>Hva jeg gjør</h2>
	</div>
	<div class="container">
		<div>
			{#each skills as skill}
				<div class="item-wrapper">
					<div class="item">
						<h3>{skill}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.skills {
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
		display: grid;
		grid-template-columns: 0.25fr 1fr;
		align-items: baseline;
	}

	h3 {
		font-size: 6rem;
		text-transform: uppercase;

		@media (max-width: 768px) {
			font-size: 4rem;
		}
	}
</style>
