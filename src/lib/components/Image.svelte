<script>
	function handleMouseMove(e) {
		const dampingFactor = 0.01;
		const dampedX = e.clientX * dampingFactor;
		const dampedY = e.clientY * dampingFactor;
		document.documentElement.style.setProperty('--damped-x', dampedX + 'px');
		document.documentElement.style.setProperty('--damped-y', dampedY + 'px');
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div class="img-container">
	<img
		class="img"
		srcset="/hero-400w.webp 400w, /hero-600w.webp 600w"
		sizes="(max-width: 600px) 400px, 600px"
		src="/hero-600w.webp"
		alt="Michael Angelo's painting on top of the Palace of Versailles"
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

	<div class="bottom-left">
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
		border-radius: 2rem 0 2rem 0;
	}

	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		aspect-ratio: 16 / 9;
		scale: 1.2;
		transform: translate(var(--damped-x), var(--damped-y));
	}

	.top-right {
		position: absolute;
		top: 0;
		right: 0;
		width: 8.5rem;
		height: 4.5rem;
		background: var(--white-color);
		border-bottom-left-radius: 2rem;

		& .svg-top-left {
			position: absolute;
			top: 0;
			right: 8.5rem;
			fill: var(--white-color);
			transform: rotate(90deg);
			height: auto;
			width: 2rem;
		}

		& .svg-bottom-right {
			position: absolute;
			top: 4.5rem;
			right: 0;
			fill: var(--white-color);
			transform: rotate(90deg);
			height: auto;
			width: 2rem;
		}
	}

	.bottom-left {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 8.5rem;
		height: 4.5rem;
		background: var(--white-color);
		border-top-right-radius: 2rem;

		& .svg-top-left {
			position: absolute;
			bottom: 4.5rem;
			left: 0;
			fill: var(--white-color);
			transform: rotate(-90deg);
			height: auto;
			width: 2rem;
		}

		& .svg-bottom-right {
			position: absolute;
			bottom: 0;
			left: 8.5rem;
			fill: var(--white-color);
			transform: rotate(-90deg);
			height: auto;
			width: 2rem;
		}
	}
</style>
