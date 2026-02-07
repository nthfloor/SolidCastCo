<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import HowWeWork from '$lib/components/HowWeWork.svelte';
	import QuoteForm from '$lib/components/QuoteForm.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import {
		getLocalBusinessSchema,
		getWebSiteSchema,
		getEpoxyFlooringServiceSchema,
		getEpoxyTabletopsServiceSchema
	} from '$lib/config/schema';

	const jsonLd = [
		getLocalBusinessSchema(),
		getWebSiteSchema(),
		getEpoxyFlooringServiceSchema(),
		getEpoxyTabletopsServiceSchema()
	];
</script>

<SEO
	description="Premium epoxy flooring and custom tabletops in South Africa. Transform your garages, showrooms, and homes with durable, stunning epoxy finishes. Get a free quote today!"
	canonical="/"
	{jsonLd}
/>

<Hero />
<Services />
<HowWeWork />
<QuoteForm />
