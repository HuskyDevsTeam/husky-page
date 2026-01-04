<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
	import { LogoWhatsapp } from 'svelte-ionicons'
	import huskyCall from '$lib/images/husky_call.webp'
	import videoBanner from '$lib/videos/contact_banner_video.webm'

	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})
	
</script>

<section id="contact" class="relative xl:h-[684px] md:h-[1020px] h-[740px] overflow-hidden">
	<!-- svelte-ignore a11y-media-has-caption -->
	 <div class="absolute xl:h-[684px] md:h-[1020px] h-[740px] overflow-hidden w-full" id="videoContainer">
		 <video id="backgroundVideo" autoplay muted loop class="object-cover object-center xl:h-[684px] md:h-[1020px] h-[740px] w-full">
			 <source src={videoBanner} type="video/mp4">
		 </video>
	 </div>
	<div class="max-w-[1512px] w-screen h-full relative flex justify-center items-center bg-[var(--color-mask-primary)] overflow-hidden py-16 md:py-20 xl:px-20">
		<div class="flex flex-col xl:flex-row xl:items-center xl:gap-[110px] h-full w-full max-w-[1288px] z-10">
			<article class="flex flex-col gap-6 items-center xl:items-start px-5 md:px-8 max-h-full">
				<div class="flex flex-col gap-6 items-center xl:items-start">
					<div class="flex flex-col gap-3 items-center xl:items-start">
						<h3 class="body-overline-medium text-color-brand">{glosary.section_6.section_title}</h3>
						<h1 class="md:display-small-extrabold xl:text-left headline-medium-bold text-color-primary">{glosary.section_6.article_title}</h1>
					</div>
					<a href="https://wa.me/+584120819758" target="_blank">
						<img src={huskyCall} alt="person-banner" class="xl:hidden max-w-[288px] max-h-[288px] md:max-w-[524px] md:max-h-[524px] my-2">
					</a>
					<p class="text-center body-medium-regular text-color-secondary xl:text-left">{glosary.section_6.article_text}</p>
				</div>
				<a href="https://wa.me/+584120819758" class="button button-active button-large w-full md:max-w-[320px]">
					<LogoWhatsapp color="var(--color-icon-primary-invert)" size={24}/>
					<span>{glosary.section_6.article_button}</span>
				</a>
			</article>
			<div class="hidden xl:flex">
				<a href="https://wa.me/+584120819758" target="_blank">
					<img src={huskyCall} alt="person-banner" class="max-w-[524px] max-h-[524px]">
				</a>
			</div>
		</div>
	</div>
</section>

