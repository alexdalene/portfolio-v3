<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';

	import { onMount } from 'svelte';

	let ctx;

	onMount(() => {
		ctx = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger);

			gsap.from('.history .item', {
				scrollTrigger: {
					trigger: '.history',
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

	const history = [
		{
			year: 'NÅ',
			title: 'Frontend Utvikler',
			company: 'RePlan AS'
		},
		{
			year: '2022',
			title: 'Daglig Leder',
			company: 'Pizzabakeren Ranheim'
		},
		{
			year: '2021',
			title: 'Medarbeider',
			company: 'ARK Bokhandel'
		},
		{
			year: '2019',
			title: 'Truckfører',
			company: 'BASF Sandefjord'
		}
	];
</script>

<section class="history">
	<div class="heading">
		<h2>HISTORIE</h2>
	</div>
	<div class="container">
		<div>
			{#each history as item}
				<div class="item-wrapper">
					<div class="item">
						<div>
							<span>{item.year}</span>
						</div>
						<div>
							<h3>{item.company}</h3>
							<p>{item.title}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.history {
		height: auto;
		min-width: 100%;
		background-color: var(--black-color);
		color: var(--white-color);
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
		border-bottom: 0.5px solid #d6d7d3;
		background-color: var(--white-color);
		color: var(--black-color);
		transition: all 200ms ease-in-out;

		&:hover {
			background-color: var(--black-color);
			color: var(--white-color);
		}

		&:last-child {
			border-bottom: none;
		}
	}

	.item {
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
		padding-block: 3rem;
		padding-inline: 0.5rem;
		display: grid;
		grid-template-columns: 0.25fr 1fr;
		align-items: baseline;
		gap: 1rem;

		@media (max-width: 768px) {
			& div {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				text-align: end;
			}
		}
	}

	h3 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	span {
		font-weight: 700;
		font-size: 2rem;
	}

	p {
		font-size: 1rem;
	}
</style>
