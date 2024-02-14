<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from('.history .item', {
			scrollTrigger: {
				trigger: '.history .item',
				start: 'top bottom',
				end: 'bottom center',
				scrub: 1,
			},
			opacity: 0,
			yPercent: 100,
			duration: 0.6,
			stagger: 0.2
		});
	});
</script>

<section class="history">
	<div class="heading">
		<h2>HISTORIE</h2>
	</div>
	<div class="container">
		<div>
			<div class="item-wrapper">
				<div class="item">
					<span>NÅ</span>
					<div>
						<h3>Frontend Utvikler</h3>
						<p>RePlan AS</p>
					</div>
				</div>
			</div>
			<div class="item-wrapper">
				<div class="item">
					<span>2022</span>
					<div>
						<h3>Daglig Leder</h3>
						<p>Pizzabakeren Ranheim</p>
					</div>
				</div>
			</div>
			<div class="item-wrapper">
				<div class="item">
					<span>2021</span>
					<div>
						<h3>Medarbeider</h3>
						<p>ARK Bokhandel</p>
					</div>
				</div>
			</div>
			<div class="item-wrapper">
				<div class="item">
					<span>2019</span>
					<div>
						<h3>Truckfører</h3>
						<p>BASF Sandefjord</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.history {
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
	}

	.item-wrapper {
		border-bottom: 0.5px solid #373133;
		background-color: var(--black-color);
		color: var(--white-color);
		transition: all 200ms ease-in-out;

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
		padding-block: 3rem;
		display: grid;
		grid-template-columns: 0.25fr 1fr;
		align-items: baseline;
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
