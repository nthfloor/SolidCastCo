<script lang="ts">
	import { siteConfig, getFullTitle } from '$lib/config/seo';

	interface Props {
		title?: string;
		description?: string;
		canonical?: string;
		noindex?: boolean;
		ogImage?: string;
		ogType?: 'website' | 'article';
		jsonLd?: object | object[];
	}

	let {
		title,
		description = siteConfig.description,
		canonical,
		noindex = false,
		ogImage = '/og-image.jpg',
		ogType = 'website',
		jsonLd
	}: Props = $props();

	const fullTitle = $derived(getFullTitle(title));
	const canonicalUrl = $derived(canonical ? `${siteConfig.url}${canonical}` : undefined);
	const ogImageUrl = $derived(ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />

	{#if canonicalUrl}
		<link rel="canonical" href={canonicalUrl} />
	{/if}

	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<!-- Open Graph -->
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:url" content={canonicalUrl || siteConfig.url} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content={siteConfig.locale} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />

	<!-- JSON-LD Structured Data -->
	{#if jsonLd}
		{#if Array.isArray(jsonLd)}
			{#each jsonLd as schema}
				{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
			{/each}
		{:else}
			{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
		{/if}
	{/if}
</svelte:head>
