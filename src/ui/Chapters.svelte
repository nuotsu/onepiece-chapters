<table>
	<tbody>
		{#each Object.entries(chapters) as [key, chapter]}
			<tr id="ch-{key}">
				<th lang="ja">第{key}話</th>
				<th lang="en">Ch.{key}</th>

				{#each langs_str as lang}
					<td {lang}>
						<a href="#ch-{key}">{chapter[lang]}</a>
					</td>
				{/each}
			</tr>
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

<script>
	import { page } from '$app/state'
	import { langs_str } from '@/ui/LanguageSelector.svelte'

	const { chapters } = page.data
</script>
