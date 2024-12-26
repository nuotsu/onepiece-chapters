<search>
	<label
		class="flex items-center border focus-within:border-gray-300 border-gray-100"
	>
		<img class="px-1" src="https://icons.nuotsu.dev/vsc/VscSearch" alt="" />

		<input
			class="grow outline-none"
			bind:value={query}
			type="search"
			placeholder="Search"
		/>
	</label>
</search>

<script lang="ts" module>
	let query = $state('')
</script>
