<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
	import { LogoInstagram, LogoLinkedin, LogoGithub } from 'svelte-ionicons'
	import techMd from '$lib/images/tech_md.webp'
	import techSm from '$lib/images/tech_sm.webp'

	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})

	const listTitle1 = "Front - end"
	const listTitle2 = "Back - end"
	const list1 = [
		"HTML",
		"SASS",
		"JavaScript",
		"React",
		"CSS",
		"Bootstrap",
		"Vue",
		"Angular",
	]
	const list2 = [
		"Node JS",
		"Laravel",
		"Django",
		"MongoDB",
		"PHP",
		"Python",
		"MySQL",
		"Posgress SQL",
	]
	
</script>

<section id="tech" class="relative">
	<div class="max-w-[1512px] w-screen h-full relative flex justify-center items-center overflow-hidden pt-16 md:py-20 xl:px-20 xl:pt-[120px]">
		<div class="flex flex-col xl:flex-row xl:items-center xl:gap-[110px] h-full w-full max-w-[1288px] z-10">
			<div class="xl:block hidden relative w-[632px] h-[752px] px-5 md:px-8">
				<div class="absolute bg-[var(--color-surface-brand)] rounded bottom-0 left-0 w-[500px] h-[670px]">
				</div>
				<picture class="absolute top-0 right-0 w-[524px] h-[670px] z-10 overflow-hidden object-cover rounded">
					<source media="(min-width:580px)" srcset={techMd} class="w-[524px] h-[670px]">
					<img src={techSm} alt="techguy" class="relative top-0 right-0 w-[524px] h-[670px] rounded">
				</picture>
			</div>
			<article class="flex flex-col gap-10 items-center max-h-full">
				<div class="flex flex-col gap-6 items-center px-5 md:px-8">
					<h1 class="md:display-small-extrabold headline-medium-bold text-color-primary text-center xl:text-left">{glosary.section_4.article_title}</h1>
				</div>
				<div class="xl:hidden relative w-[320px] md:w-[620px] h-[380px] md:h-[736px] px-5 md:px-8">
					<div class="absolute bg-[var(--color-surface-brand)] rounded top-0 right-0 w-[254px] h-[340px] md:w-[493px] md:h-[657px]">
					</div>
					<picture class="absolute bottom-0 left-0 w-[254px] h-[340px] md:w-[493px] md:h-[657px] z-10 overflow-hidden object-cover rounded">
						<source media="(min-width:580px)" srcset={techMd} class="w-[254px] h-[340px]">
						<img src={techSm} alt="techguy" class="relative bottom-0 left-0 w-[254px] h-[340px] md:w-[493px] md:h-[657px] rounded">
					</picture>
				</div>

				<div class="flex flex-col gap-12 items-stretch w-full px-5 md:px-8">
					<div class="flex flex-col gap-8 items-stretch w-full">
						<div class="pb-5 text-left label-medium-regular text-color-secondary border-b border-color-primary w-full">
							<span>{listTitle1}</span>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-y-5">
							{#each list1 as item}
								<div class="flex flex-row items-center gap-3">
									<div class="rounded-full bg-[var(--color-surface-brand)] w-2 h-2"></div>
									<p>{item}</p>
								</div>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-8 items-stretch w-full">
						<div class="pb-5 text-left label-medium-regular text-color-secondary border-b border-color-primary w-full">
							<span>{listTitle2}</span>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-y-5">
							{#each list2 as item}
								<div class="flex flex-row items-center gap-3">
									<div class="rounded-full bg-[var(--color-surface-brand)] w-2 h-2"></div>
									<p>{item}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

