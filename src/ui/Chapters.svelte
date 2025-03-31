<table class="w-full">
	{#if q() !== ''}
		<thead>
			<tr>
				<td colspan="2" class="text-xs p-2 text-center">
					{count(filteredChapters, 'chapter')} found
				</td>
			</tr>
		</thead>
	{/if}

	<tbody>
		{#each filteredChapters as [key, chapter] (chapter.ja || chapter.en)}
			<tr id="ch-{key}" class="canvas">
				<th>
					<span lang="ja">第{key}話</span>
					<span lang="en">Ch.{key}</span>
				</th>

				<td class="w-full">
					{#each langs_str as lang}
						<div {lang}>
							<a href="#ch-{key}">{chapter[lang]}</a>
						</div>
					{/each}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	:not(thead) > tr {
		&:nth-child(even) {
			background-color: light-dark(
				var(--color-neutral-100),
				var(--color-neutral-900)
			);
		}

		&:hover:not(:target) :is(th, td) {
			background-color: light-dark(
				var(--color-amber-100),
				var(--color-amber-900)
			);
		}

		&:target {
			position: sticky;
			top: var(--header-height);
			bottom: 0;
			z-index: 1;
			background-color: light-dark(
				var(--color-green-100),
				var(--color-green-900)
			);
		}
	}

	th {
		font-weight: normal;
		font-size: smaller;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}

	th,
	td {
		padding-inline: 0.5ch;
	}

	a {
		display: block;
	}
</style>

<script lang="ts">
	import { page } from '$app/state'
	import { l, langs_str } from '@/ui/LanguageSelector.svelte'
	import { q } from '@/ui/search/Query.svelte'
	import { n } from '@/ui/search/ChapterNumber.svelte'
	import { count } from '@/lib/utils'

	const { chapters } = page.data

	const filteredChapters = $derived(
		Object.entries(chapters).filter(
			([key, chapter]) => !hideOnSearch(chapter, Number(key)),
		),
	)

	function hideOnSearch(chapter: OnePiece.Chapter[number], key: number) {
		const query = q()
		const title = String(chapter[l()])
		const number = n()

		if (!!number) {
			return number !== key
		}

		if (!!query && !title.toLowerCase().includes(query.toLowerCase())) {
			return true
		}

		return false
	}
</script>
