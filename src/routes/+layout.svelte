<Header />

<main class="max-w-lg mx-auto">{@render children()}</main>

<Footer />

<script>
	import Header from '@/ui/Header.svelte'
	import Footer from '@/ui/Footer.svelte'
	import '@/styles/globals.css'

	const { children } = $props()
</script>
