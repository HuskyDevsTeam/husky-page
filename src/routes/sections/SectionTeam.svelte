<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
	import { LogoInstagram, LogoLinkedin, LogoGithub } from 'svelte-ionicons'
	import teamChemi from '$lib/images/team_chemi.jpg'
	import teamLuis from '$lib/images/team_luis.jpg'
	import teamManuel from '$lib/images/team_manuel.jpg'
	import teamJavier from '$lib/images/team_javier.jpg'
	import teamDaniel from '$lib/images/team_daniel.jpg'

	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})

	$: list = [
		{
			title:glosary.section_5.team_title_1,
			description:glosary.section_5.team_description_1,
			image:teamChemi,
			name:"Chemi Martínez",
			linkedin:"https://www.linkedin.com/in/chemi-martinez-ff9616/",
			github:"https://github.com/chemimartinez10",
		},
		{
			title:glosary.section_5.team_title_2,
			description:glosary.section_5.team_description_2,
			image:teamDaniel,
			name:"Daniel Campos",
			linkedin:"https://www.linkedin.com/in/daniel-campos-a2993a11a",
		},
		{
			title:glosary.section_5.team_title_3,
			description:glosary.section_5.team_description_3,
			image:teamJavier,
			name:"Javier Nuñez",
			linkedin:"https://www.linkedin.com/in/javier-alejandro-núñez-gómez-52ab9b330/",
			behance:"https://www.behance.net/javiernunezgomez",
		},
		{
			title:glosary.section_5.team_title_4,
			description:glosary.section_5.team_description_4,
			image:teamLuis,
			name:"Luis Vásquez",
			github:"https://github.com/DonPasticho",
		},
		{
			title:glosary.section_5.team_title_5,
			description:glosary.section_5.team_description_5,
			image:teamManuel,
			name:"Manuel Farias",
			linkedin:"https://www.linkedin.com/in/manuel-farias-8402a1251/",
			github:"https://github.com/manuelrrk",
		},
	]
	
</script>

<section id="team" class="relative">
	<div class="max-w-[1512px] w-screen h-full relative flex justify-center items-center overflow-hidden py-16 md:py-20 xl:px-20">
		<div class="flex flex-col xl:flex-row xl:items-center xl:gap-[110px] h-full w-full max-w-[1288px] z-10">
			<article class="flex flex-col gap-14 items-center max-h-full">
				<div class="flex flex-col gap-6 items-center px-5 md:px-8">
					<h1 class="md:display-small-extrabold headline-medium-bold text-color-primary">{glosary.section_5.article_title}</h1>
					<p class="text-center body-medium-regular text-color-secondary">{glosary.section_5.article_text}</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-8 gap-y-12 gap-x-8">
					{#each list as member}
						<div class="flex flex-col gap-4 justify-center items-center text-center">
							<div class="w-[112px] h-[112px] rounded-full overflow-hidden flex justify-center items-center">
								<img src={member.image} alt={member.name} class="w-[114px] h-[114px] rounded-full object-center object-cover">

							</div>
							<div class="flex flex-col justify-center items-stretch gap-3 grow">
								<div>
									<h5 class="label-medium-medium text-color-primary">{member.name}</h5>
									<span class="body-small-regular text-color-secondary">{member.title}</span>
								</div>
								<p class="border-color-primary border-t border-b py-3 body-xsmall-regular text-color-secondary h-full">
									{member.description}
								</p>
							</div>
							<div class="flex flex-row gap-4 items-center justify-center">
								{#if member?.instagram}
									<a href={member.instagram} target="_blank">
										<LogoInstagram color={'var(--color-icon-neutral)'} size={24}/>
									</a>
								{/if}
								{#if member?.linkedin}
									<a href={member.linkedin} target="_blank">
										<LogoLinkedin color={'var(--color-icon-neutral)'} size={24}/>
									</a>
								{/if}
								{#if member?.github}
									<a href={member.github} target="_blank">
										<LogoGithub color={'var(--color-icon-neutral)'} size={24}/>
									</a>
								{/if}
								{#if member?.behance}
									<a href={member.behance} target="_blank">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM9.89458 6.69978C9.46738 6.60858 8.99506 6.5625 8.47762 6.5625H3.35986V17.4383H8.63122C9.11122 17.4393 9.59026 17.3779 10.0549 17.2559C10.5167 17.134 10.9275 16.9468 11.2885 16.6924C11.6495 16.439 11.9365 16.1116 12.1496 15.7103C12.3627 15.3091 12.4693 14.8339 12.4693 14.2857C12.4693 13.6051 12.3042 13.0233 11.9739 12.5414C11.6437 12.0595 11.1435 11.7215 10.4735 11.5286C10.9602 11.2953 11.3288 10.9958 11.5775 10.63C11.8261 10.2643 11.9509 9.8073 11.9509 9.25914C11.9509 8.7513 11.8674 8.32506 11.6994 7.97946C11.5314 7.63386 11.2952 7.35738 10.9909 7.14906C10.6866 6.94074 10.3218 6.79098 9.89458 6.69978ZM9.2245 10.6598C8.94994 10.8623 8.59954 10.9641 8.1733 10.9641L5.75218 10.966V8.42202H7.98994C8.1973 8.42106 8.4037 8.4393 8.60722 8.47482C8.80498 8.51034 8.9797 8.5737 9.13234 8.6649C9.28498 8.7561 9.4069 8.88378 9.4981 9.04602C9.5893 9.20826 9.63538 9.41658 9.63538 9.67002C9.63634 10.127 9.49906 10.4563 9.2245 10.6598ZM8.98066 15.5107C8.76082 15.5567 8.53618 15.5798 8.31058 15.5788L5.75218 15.5798V12.5942H8.35666C8.8741 12.5942 9.29074 12.7132 9.60562 12.9523C9.9205 13.1903 10.0779 13.5897 10.0779 14.1475C10.0779 14.4316 10.029 14.6659 9.93298 14.8483C9.83602 15.0307 9.70642 15.1756 9.54418 15.2822C9.38194 15.3887 9.19378 15.4646 8.98066 15.5107ZM16.8795 15.8227C16.2699 15.8227 15.8024 15.6652 15.4779 15.3503C15.1535 15.0364 14.9759 14.5286 14.9461 13.8307H20.6274C20.6677 13.2211 20.6168 12.6374 20.4747 12.0787C20.3327 11.5199 20.1013 11.0227 19.7816 10.5859C19.4619 10.1491 19.053 9.80154 18.5557 9.54234C18.0575 9.28314 17.4738 9.15354 16.8037 9.15354C16.2047 9.15354 15.6584 9.2601 15.1659 9.47322C14.6735 9.68634 14.2491 9.97818 13.8939 10.3487C13.5387 10.7193 13.2642 11.158 13.0712 11.6659C12.8783 12.1737 12.7823 12.7219 12.7823 13.3103C12.7823 13.919 12.8763 14.4777 13.0635 14.9855C13.2507 15.4934 13.5176 15.9292 13.8632 16.295C14.2088 16.6607 14.6303 16.943 15.1275 17.1407C15.6248 17.3385 16.1835 17.4374 16.8027 17.4374C17.6965 17.4374 18.4578 17.2339 19.0875 16.8278C19.7173 16.4217 20.1848 15.7468 20.4891 14.8022H18.5855C18.5144 15.046 18.3215 15.2774 18.0066 15.4953C17.6917 15.7132 17.3163 15.8227 16.8795 15.8227ZM16.7423 10.7817C17.2703 10.7817 17.6639 10.9238 17.9231 11.2079C18.1813 11.4921 18.3618 11.9087 18.4645 12.4559H14.9461C14.9557 12.3043 14.9893 12.1315 15.045 11.9385C15.1007 11.7455 15.1967 11.5631 15.3339 11.3903C15.4712 11.2175 15.6536 11.0735 15.8821 10.9564C16.1096 10.8403 16.3967 10.7817 16.7423 10.7817ZM18.9714 7.1145H14.5755V8.3337H18.9714V7.1145Z" fill="var(--color-icon-neutral)"/>
										</svg>
									</a>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</article>
		</div>
	</div>
</section>

