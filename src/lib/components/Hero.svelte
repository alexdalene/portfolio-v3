<script>
	import { spring } from "svelte/motion";

	let x = spring(0, { stiffness: 0.005, damping: 0.9 });
    let y = spring(0, { stiffness: 0.005, damping: 0.9 });

    function handleMouseMove(event) {
        let moveX = event.clientX - window.innerWidth / 2;
        let moveY = event.clientY - window.innerHeight / 2;

        // Limit the movement
        moveX = Math.max(Math.min(moveX, 25), -25);
        moveY = Math.max(Math.min(moveY, 25), -25);

        x.set(moveX);
        y.set(moveY);
    }

	function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseleave={handleMouseLeave}/>

<div class="img-container">
	<img
		class="img"
		src="/hero.webp"
		alt="Michael Angelo's painting on top of the Palace of Versailles"
		style="transform: translate3d({$x}px, {$y}px, 0)"
	/>
	<div class="top-right">
		<svg
			width="13"
			height="13"
			viewBox="0 0 13 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="svg-top-left"
		>
			<path
				d="M0.000212396 0H13.0002C2.87774 0 0.163678 7.61338 0.000212396 12.1365V13C-0.0102433 12.7282 -0.0107289 12.4392 0.000212396 12.1365V0Z"
				fill="#currentColor"
			/>
		</svg>
		<svg
			width="13"
			height="13"
			viewBox="0 0 13 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="svg-bottom-right"
		>
			<path
				d="M0.000212396 0H13.0002C2.87774 0 0.163678 7.61338 0.000212396 12.1365V13C-0.0102433 12.7282 -0.0107289 12.4392 0.000212396 12.1365V0Z"
				fill="#currentColor"
			/>
		</svg>
	</div>
</div>

<style>
	.img-container {
		position: relative;
		width: 100%;
		height: auto;
		overflow: hidden;
		z-index: -1;
		border-radius: 2rem 0 2rem 2rem;
	}

	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		aspect-ratio: 16 / 9;
		scale: 1.2;
	}

	.top-right {
		position: absolute;
		top: 0;
		right: 0;
		width: 8.5rem;
		height: 4.5rem;
		background: #fff;
		border-bottom-left-radius: 2rem;
	}

	.svg-top-left {
		position: absolute;
		top: 0;
		right: 8.5rem;
		fill: #fff;
		transform: rotate(90deg);
		height: auto;
		width: 2rem;
	}

	.svg-bottom-right {
		position: absolute;
		top: 4.5rem;
		right: 0;
		fill: #fff;
		transform: rotate(90deg);
		height: auto;
		width: 2rem;
	}
</style>
