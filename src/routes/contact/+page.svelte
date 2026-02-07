<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import {
		getLocalBusinessSchema,
		getContactPageSchema,
		getBreadcrumbSchema
	} from '$lib/config/schema';

	const jsonLd = [
		getLocalBusinessSchema(),
		getContactPageSchema(),
		getBreadcrumbSchema([
			{ name: 'Home', url: '/' },
			{ name: 'Contact', url: '/contact' }
		])
	];
</script>

<SEO
	title="Contact Us"
	description="Get in touch with SolidCast Co. for your epoxy flooring and tabletop needs. Contact us via WhatsApp or phone for a free quote."
	canonical="/contact"
	{jsonLd}
/>

<section class="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h1>
			<p class="mt-4 text-lg text-gray-600">
				We'd love to hear from you. Get in touch and let's discuss your project.
			</p>
		</div>

		<ContactForm />
	</div>
</section>
