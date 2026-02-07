<script lang="ts">
	import {
		generateWhatsAppLink,
		formatContactMessage,
		WHATSAPP_NUMBER,
		PHONE_NUMBER,
		type ContactFormData
	} from '$lib/utils/whatsapp';
	import WhatsAppIcon from '$lib/icons/WhatsAppIcon.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let isSubmitting = $state(false);

	function handleSubmit(event: Event) {
		event.preventDefault();
		if (isSubmitting) return;

		isSubmitting = true;

		const formData: ContactFormData = {
			name,
			email,
			message
		};

		const formattedMessage = formatContactMessage(formData);
		const whatsappLink = generateWhatsAppLink(WHATSAPP_NUMBER, formattedMessage);
		window.open(whatsappLink, '_blank');

		setTimeout(() => {
			isSubmitting = false;
		}, 2000);
	}
</script>

<div class="grid gap-12 lg:grid-cols-2">
	<!-- Contact Info -->
	<div>
		<h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
		<p class="text-gray-600 mb-8">
			Have questions or want to discuss your project? Reach out to us directly or fill out the form.
		</p>

		<div class="space-y-6">
			<!-- WhatsApp -->
			<a
				href="https://wa.me/{WHATSAPP_NUMBER}"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
			>
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
					<WhatsAppIcon class="h-6 w-6" />
				</div>
				<div>
					<p class="font-medium text-gray-900 group-hover:text-green-700">WhatsApp</p>
					<p class="text-sm text-gray-600">Message us directly</p>
				</div>
			</a>

			<!-- Phone -->
			<a
				href="tel:{PHONE_NUMBER.replace(/\s/g, '')}"
				class="flex items-center gap-4 p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors group"
			>
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
				</div>
				<div>
					<p class="font-medium text-gray-900 group-hover:text-teal-700">Phone</p>
					<p class="text-sm text-gray-600">{PHONE_NUMBER}</p>
				</div>
			</a>
		</div>
	</div>

	<!-- Contact Form -->
	<div>
		<form onsubmit={handleSubmit} class="space-y-5 bg-gray-50 rounded-2xl p-6 sm:p-8">
			<div>
				<label for="contact-name" class="block text-sm font-medium text-gray-700 mb-2">
					Name *
				</label>
				<input
					type="text"
					id="contact-name"
					bind:value={name}
					required
					class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all"
					placeholder="Your name"
				/>
			</div>

			<div>
				<label for="contact-email" class="block text-sm font-medium text-gray-700 mb-2">
					Email *
				</label>
				<input
					type="email"
					id="contact-email"
					bind:value={email}
					required
					class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all"
					placeholder="your@email.com"
				/>
			</div>

			<div>
				<label for="contact-message" class="block text-sm font-medium text-gray-700 mb-2">
					Message *
				</label>
				<textarea
					id="contact-message"
					bind:value={message}
					required
					rows="5"
					class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all resize-none"
					placeholder="How can we help you?"
				></textarea>
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				class="w-full rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{#if isSubmitting}
					<svg class="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
					Opening WhatsApp...
				{:else}
					<WhatsAppIcon />
					Send via WhatsApp
				{/if}
			</button>
		</form>
	</div>
</div>
