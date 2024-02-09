<script>
	import Hero from '$lib/components/Hero.svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		let sections = gsap.utils.toArray('.section');

		sections.forEach((section) => {
			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: 'top top',
					end: 'bottom top',
					pin: true,
				},
			});
		});
	})

</script>

<section class="section hero">
	<div>
		<Hero />

		<h1>Frontend_utvikler</h1>
		<p>
			Jeg er en kreativ og løsningsorientert webutvikler med en lidenskap for design og teknologi. Jeg
			har jobbet med alt fra små- til mellomstore bedrifter og har erfaring med å utvikle og vedlikeholde nettsider.
		</p>
	</div>
	<span class="material-symbols-outlined">expand_more</span>
</section>

<section class="section skills">
	<div>
		<h1>Frontend_utvikler</h1>
		<p>
			Jeg er en kreativ og løsningsorientert webutvikler med en lidenskap for design og teknologi. Jeg
			har jobbet med alt fra små- til mellomstore bedrifter og har erfaring med å utvikle og vedlikeholde nettsider.
		</p>
	</div>
	<img class="img-skills" src="https://skillicons.dev/icons?i=html,css,js,ts,sass,tailwind,svelte,bootstrap,jest,git,nodejs,express,mysql,mongo&perline=7&theme=light" alt="list of skills that alex has">
</section>

<section class="section projects">
	<div>
		<h1>Frontend_utvikler</h1>
		<p>
			Jeg er en kreativ og løsningsorientert webutvikler med en lidenskap for design og teknologi. Jeg
			har jobbet med alt fra små- til mellomstore bedrifter og har erfaring med å utvikle og vedlikeholde nettsider.
		</p>
	</div>
</section>

<style>
	.section {
		min-height: 100svh;
		min-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--white-color);

		& > div {
			width: clamp(300px, 100%, 568px);
			display: flex;
			flex-direction: column;
		}
	}

	.hero {
		& span {
			font-size: 2rem;
			transform: translateY(4rem);
		}
	}

	.skills {
		background-color: #82816D;
		color: #fff;
		z-index: 1;
	}

	.projects {
		z-index: 2;
	}

	h1 {
		font-size: 1rem;
		text-transform: uppercase;
		margin-top: 2rem;
	}
</style>
