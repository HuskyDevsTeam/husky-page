<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
	import { LogoWhatsapp } from 'svelte-ionicons'
	import personBanner from '$lib/images/person_banner_1.webp'
	import personBannerMd from '$lib/images/person_banner_md.webp'
	import personBannerSm from '$lib/images/person_banner_sm.webp'
	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})
</script>

<section id="hero" class="bg-[url('/images/section_hero_background.webp')] bg-bottom md:bg-center bg-cover" >
	<div class="max-w-[1512px] w-screen relative flex justify-center items-center bg-[var(--color-mask-primary)] overflow-hidden">
		<div class="flex flex-col xl:flex-row xl:items-center h-full w-full max-w-[1288px] z-10 pt-[100px]">
			<article class="flex flex-col gap-10 items-center md:items-start px-5 md:px-8 md:max-w-[770px]">
				<div class="flex flex-col gap-6 items-center md:items-start">
					<div class="flex flex-col gap-3 items-center md:items-start">
						<h3 class="body-overline-medium text-color-brand">{glosary.section_0.section_title}</h3>
						<h1 class="md:display-large-bold md:text-left display-small-semibold text-color-primary">{glosary.section_0.article_title}</h1>
					</div>
					<p class="text-center body-medium-regular text-color-secondary md:text-left">{glosary.section_0.article_text}</p>
				</div>
				<a href="https://wa.me/+584120819758" class="button button-active button-large w-full md:max-w-[320px]">
					<LogoWhatsapp color="var(--color-icon-primary-invert)" size={24}/>
					<span>{glosary.section_0.article_button}</span>
				</a>
			</article>
			<div class="relative pt-7 flex justify-end">
				<picture class="w-[313px] min-w-[313px] md:w-[578px] xl:w-[550px] h-[372px] md:h-[720px] xl:h-[652px] z-10 relative flex items-end justify-end">
					<source media="(min-width:1320px)" srcset={personBanner}>
					<source media="(min-width:580px)" srcset={personBannerMd}>
					<img src={personBannerSm} alt="person-banner">
				</picture>
				<div class="absolute shape-color w-3/4 md:w-[480px] xl:w-[520px] h-[292px] md:h-[476px] xl:h-[800px] bottom-0 right-0 xl:-right-[112px]"></div>
			</div>
		</div>
	</div>
</section>

