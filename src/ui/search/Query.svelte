<svelte:window
	on:keydown={(e) => {
		if (e.metaKey && e.key === 'k') {
			input.select()
		}
	}}
/>

<label
	class="grow flex items-center border focus-within:border-gray-300 border-gray-100"
>
	<img
		class="px-1 size-6"
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
	import { page } from '$app/state'
	import { replaceState } from '$app/navigation'

	let input: HTMLInputElement
	let query = $state(page.url.searchParams.get('q') ?? '')

	export const q = () => query
</script>

<script lang="ts">
	import { afterNavigate } from '$app/navigation'

	query = page.url.searchParams.get('q') ?? ''

	afterNavigate(() => {
		query = page.url.searchParams.get('q') ?? ''
	})
</script>
