<header
	class="text-center sticky top-0 canvas bg-white/80 dark:bg-black/80 backdrop-blur z-10 max-w-lg mx-auto"
	bind:offsetHeight
>
	<div class="flex items-center justify-between gap-4 p-2">
		<h1><a href="/">One Piece Chapters</a></h1>

		<nav class="flex items-center gap-2">
			<LanguageSelector />
			<a href="#footer" title="To bottom">⏬</a>
		</nav>
	</div>

	<search class="canvas flex gap-2">
		<Query />
		<ChapterNumber />
	</search>
</header>

<script>
	import LanguageSelector from '@/ui/LanguageSelector.svelte'
	import Query from '@/ui/search/Query.svelte'
	import ChapterNumber from '@/ui/search/ChapterNumber.svelte'

	let offsetHeight = $state(0)

	$effect(() => {
		function updateHeaderHeight() {
			document.body.style.setProperty('--header-height', `${offsetHeight}px`)
		}

		updateHeaderHeight()
		window.addEventListener('resize', updateHeaderHeight)

		return () => {
			window.removeEventListener('resize', updateHeaderHeight)
		}
	})
</script>
