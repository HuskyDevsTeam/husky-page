<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
	import work00 from '$lib/images/work_00.webp'
	import work01 from '$lib/images/work_01.webp'
	import work02 from '$lib/images/work_02.webp'
	import work03 from '$lib/images/work_03.webp'
	import work04 from '$lib/images/work_04.webp'
	import work05 from '$lib/images/work_05.webp'
	import work06 from '$lib/images/work_06.webp'
	import work07 from '$lib/images/work_07.webp'
	import work08 from '$lib/images/work_08.webp'
	import work09 from '$lib/images/work_09.webp'

	let glosary = dict["en"]
	let open = false

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})
	const toggleMore = ()=>{
		open = !open
	}

	$: list = [
		{
			title:glosary.section_1.card_title_0,
			description:glosary.section_1.card_description_0,
			image:work00,
			live_demo:"https://rifas.huskydevs.com/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_1,
			description:glosary.section_1.card_description_1,
			image:work01,
			live_demo:"https://ganaconivan.com/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_2,
			description:glosary.section_1.card_description_2,
			image:work02,
			live_demo:"https://russafortuna.com/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_3,
			description:glosary.section_1.card_description_3,
			image:work03,
			live_demo:"https://ganaconelguerrero.com/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_4,
			description:glosary.section_1.card_description_4,
			image:work04,
			live_demo:"https://libling.lu/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_5,
			description:glosary.section_1.card_description_5,
			image:work05,
			live_demo:"https://globalrifasvzla.com/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_6,
			description:glosary.section_1.card_description_6,
			image:work06,
			live_demo:"https://keicash.com/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_7,
			description:glosary.section_1.card_description_7,
			image:work07,
			live_demo:"https://ganamasconandrea.com/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_8,
			description:glosary.section_1.card_description_8,
			image:work08,
			live_demo:"https://ganaconkadiccs.com/",
			github_repo:"",
		},
		{
			title:glosary.section_1.card_title_9,
			description:glosary.section_1.card_description_9,
			image:work09,
			live_demo:"https://vergacionderifa.com/",
			github_repo:"",
		},
		
	]
	
</script>

<section id="work" class="relative bg-[var(--color-surface-secondary)]">
	<div class="max-w-[1512px] w-screen h-full relative flex justify-center items-center overflow-hidden pt-16 md:pt-20 xl:px-20">
		<div class="flex flex-col xl:flex-row xl:items-center xl:gap-[110px] h-full w-full max-w-[1288px] z-10">
			<article class="flex flex-col gap-20 items-center max-h-full">
				<div class="flex flex-col gap-3 items-center px-5 md:px-8">
					<h3 class="body-overline-medium text-color-brand text-center">{glosary.section_1.section_title}</h3>
					<h1 class="md:display-small-extrabold headline-medium-bold text-color-primary">{glosary.section_1.article_title}</h1>
				</div>
				<div class="flex flex-col gap-12">
					<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-5 md:px-8 gap-y-8 gap-x-8 xl:gap-x-6">
						{#each open ? list : list.slice(0, 8) as work}
							<div class="flex flex-col gap-0 justify-center items-center text-center bg-[var(--color-surface-primary)] shadow-md rounded-xl overflow-hidden grow">
								<img src={work.image} alt={work.title} class="w-full h-1/2 object-center object-cover">
								<div class="flex flex-col justify-center w-full items-center gap-4 grow p-4">
									<div class="self-start flex flex-col items-start gap-2 grow">
										<h5 class="title-large-medium text-color-primary text-left">{work.title}</h5>
										<span class="title-small-regular text-color-secondary text-left grow">{work.description}</span>
									</div>
									<div class="flex flex-row items-center justify-center gap-4 w-full">
										{#if work.github_repo}
											<a href={work.github_repo} target="_blank" class="button button-medium button-outline shrink grow"><span>{glosary.section_1.card_button_1}</span></a>
										{/if}
										{#if work.live_demo}
											<a href={work.live_demo} target="_blank" class="button button-medium button-active grow"><span>{glosary.section_1.card_button_2}</span></a>
										{/if}
									</div>
								</div>
							</div>
						{/each}
					</div>
					<div class="flex flex-col px-5 md:px-8">
						<button class="button-large button-outline" on:click={toggleMore}>
							{#if !open}
								<span>{glosary.section_1.card_button_3}</span>
							{:else}
								<span>{glosary.section_1.card_button_4}</span>
							{/if}
						</button>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

