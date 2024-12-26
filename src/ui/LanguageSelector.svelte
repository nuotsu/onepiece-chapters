<select id="lang" bind:value={lang} data-lang={lang}>
	{#each langs as lang}
		<option value={lang.value}>{lang.label}</option>
	{/each}
</select>

<style>
	:global(body:has(#lang[data-lang='ja']) [lang]:not([lang='ja'])),
	:global(body:has(#lang[data-lang='en']) [lang]:not([lang='en'])) {
		display: none;
	}
</style>

<script lang="ts" module>
	const langs = [
		{ value: 'ja', label: '🇯🇵' },
		{ value: 'en', label: '🇺🇸' },
	]

	export const langs_str = langs.map((lang) => lang.value)

	let lang = $state(langs[0].value)
</script>
