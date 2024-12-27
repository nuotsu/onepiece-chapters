<svelte:window
	on:keydown={(e) => {
		if (e.metaKey && e.key === 'k') {
			input.select()
		}
	}}
/>

<label class="grow flex items-center bordered">
	<img
		class="px-1 mx-1 size-6 dark:invert"
		src="https://icons.nuotsu.dev/vsc/VscSearch"
		alt=""
		loading="lazy"
	/>

	<input
		bind:this={input}
		class="grow outline-none"
		type="search"
		bind:value={query}
		placeholder="Search"
		oninput={() => {
			const url = new URL(page.url)

			if (query) {
				url.searchParams.set('q', query)
			} else {
				url.searchParams.delete('q')
			}

			replaceState(url.toString(), {})
		}}
	/>
</label>

<script lang="ts" module>
	import { replaceState } from '$app/navigation'

	let input: HTMLInputElement
	let query = $state('')

	export const q = () => query
</script>

<script lang="ts">
	import { page } from '$app/state'
	import { afterNavigate } from '$app/navigation'

	function setQuery() {
		query = page.url.searchParams.get('q') ?? ''
	}

	setQuery()
	afterNavigate(setQuery)
</script>
