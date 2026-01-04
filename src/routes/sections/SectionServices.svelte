<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
	import { SchoolOutline, DesktopOutline, PhonePortraitOutline, Star, StarHalfOutline } from 'svelte-ionicons'
	import huskySm from '$lib/images/husky_sm.webp'
	import huskyMd from '$lib/images/husky_md.webp'

	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})

	$: list = [
		{
			title:glosary.section_3.card_title_1,
			description:glosary.section_3.card_description_1,
			Icon:SchoolOutline,
		},
		{
			title:glosary.section_3.card_title_2,
			description:glosary.section_3.card_description_2,
			Icon:DesktopOutline,
		},
		{
			title:glosary.section_3.card_title_3,
			description:glosary.section_3.card_description_3,
			Icon:PhonePortraitOutline,
		},
	]
	
</script>

<section id="services" class="relative bg-[var(--color-surface-secondary)] mb-0 xl:mb-20">
	<div class="max-w-[1512px] w-screen h-full relative flex justify-center items-center pt-8 pb-12 md:pt-18 md:pb-20 xl:pt-9 xl:pb-0">
		<div class=" relative flex flex-col xl:flex-row xl:items-center xl:gap-[110px] h-full w-full max-w-[1288px] z-10">
			<article class="flex flex-col gap-0 items-center md:items-start xl:items-center justify-center max-h-full xl:flex-row">
				<div class="flex flex-col gap-6 items-center md:items-start px-5 md:px-8 pb-6 md:pb-20">
					<div class="flex flex-col gap-3 items-center md:items-start">
						<h3 class="body-overline-medium text-color-brand">{glosary.section_3.section_title}</h3>
						<h1 class="md:display-small-extrabold headline-medium-bold text-color-primary">{glosary.section_3.article_title}</h1>
					</div>
					<p class="text-center body-medium-regular text-color-secondary md:text-left">{glosary.section_3.article_text}</p>
					<div class="flex flex-col md:flex-row gap-2 md:gap-3 items-center">
						<span class="label-medium-semibold text-color-brand text-center md:text-left">{glosary.section_3.article_extra}</span>
						<div class="flex flex-row gap-1 items-center md:items-start justify-center">
							<Star color={"var(--color-states-warning-500)"} size={20}/>
							<Star color={"var(--color-states-warning-500)"} size={20}/>
							<Star color={"var(--color-states-warning-500)"} size={20}/>
							<Star color={"var(--color-states-warning-500)"} size={20}/>
							<StarHalfOutline color={"var(--color-states-warning-500)"} size={20}/>
						</div>
					</div>
				</div>
				<img src={huskySm} alt="husky" class="px-5 max-w-[500px] xl:max-w-[475px] w-full flex md:hidden xl:flex">
				<div class="grid grid-cols-1 xl:grid-cols-3 px-5 gap-y-20 gap-x-8 w-full xl:absolute -bottom-20 left-0 right-0 z-10">
					{#each list as {Icon, description, title}}
						<div class="relative pt-14 pb-8 px-5 flex flex-col gap-3 shadow-md radius-rounded bg-[var(--color-surface-primary)] xl:dark:border-color-primary xl:dark:border">
							<div class="absolute flex justify-center items-center rounded-full bg-[var(--color-surface-brand)] w-16 h-16 left-5 -top-8">
								<Icon color={'var(--color-icon-primary-invert)'} size={24}/>
							</div>
							<h4 class="title-large-semibold text-color-brand">{title}</h4>
							<p class="body-small-regular text-color-secondary">{description}</p>
						</div>
					{/each}
				</div>
			</article>
		</div>
	</div>
</section>

