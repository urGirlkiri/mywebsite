<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Christin Nyakanyanga</title>
	<meta
		name="description"
		content="Hello 👋️, its your gal kiri also known as Christin Nyakanyanga. Welcome to my website :)"
	/>
	<meta
		name="keywords"
		content="Christin Nyakanyanga, grimoji maker, Destoryer's Fury creator, Kai's Genesis author, Ghetto Coders, Fluent Epub Maker"
	/>
	<meta property="og:site_name" content="Christin Nyakanyanga" />

	<link rel="canonical" href={`https://girlkiri.me${page.url.pathname}`} />
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
