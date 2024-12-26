<header
	class="text-center p-2 sticky top-0 bg-white/80 backdrop-blur flex items-center justify-between gap-4"
	bind:offsetHeight
>
	<h1><a href="/">One Piece Chapters</a></h1>

	<nav>
		<LanguageSelector />
		<a href="#footer" title="To bottom">⏬</a>
	</nav>
</header>

<script>
	import LanguageSelector from '@/ui/LanguageSelector.svelte'

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
