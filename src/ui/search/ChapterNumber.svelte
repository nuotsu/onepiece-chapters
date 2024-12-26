<label
	class="flex items-center border focus-within:border-gray-300 border-gray-100"
>
	<img
		class="px-1 size-6"
		src="https://icons.nuotsu.dev/bs/BsHash"
		alt=""
		loading="lazy"
	/>

	<input
		class="outline-none"
		type="number"
		bind:value={number}
		min="1"
		{max}
		maxlength={max.toString().length}
		placeholder={max.toString()}
		inputmode="numeric"
	/>
</label>

<script lang="ts" module>
	let number = $state<number | undefined>()

	export const n = () => number
</script>

<script lang="ts">
	import { page } from '$app/state'

	const { chapters } = page.data
	const max = Object.keys(chapters).length
</script>
