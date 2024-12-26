<table class="w-full">
	<tbody>
		{#each Object.entries(chapters) as [key, chapter]}
			{#if !hideOnSearch(chapter)}
				<tr id="ch-{key}">
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
			{/if}
		{/each}
	</tbody>
</table>

<style>
	tr {
		background-color: #fff;

		&:nth-child(even) {
			background-color: var(--color-gray-100);
		}

		&:hover:not(:target) :is(th, td) {
			background-color: var(--color-amber-100);
		}

		&:target {
			position: sticky;
			top: var(--header-height);
			bottom: 0;
			z-index: 1;
			background-color: var(--color-green-100);
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
	import { q } from '@/ui/Search.svelte'

	const { chapters } = page.data

	function hideOnSearch(chapter: OnePiece.Chapter[number]) {
		const query = q()
		const title = String(chapter[l()])

		if (!!query && !title.toLowerCase().includes(query.toLowerCase()))
			return true

		return false
	}
</script>
