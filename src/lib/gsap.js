import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(TextPlugin);
}

export { gsap };
export { ScrollTrigger };
export { TextPlugin };
