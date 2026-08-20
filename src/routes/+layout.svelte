<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Christin Nyakanyanga</title>
		<meta
		name="description"
		content="Merge magical elements on a dark runic grid. Discover 800+ unique emoji recipes in Grimoji, the ultimate gothic alchemy puzzle game combining 2048 and match-3 mechanics."
	/>
	<meta
		name="keywords"
		content="Christin Nyakanyanga, grimoji maker, Destoryer's Fury creator, Kai's Genesis author, Ghetto Coders, Fluent Epub Maker"
	/>
	<link rel="canonical" href="https://girlkiri.me" />
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}


