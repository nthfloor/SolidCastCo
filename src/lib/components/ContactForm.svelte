<script lang="ts">
	import {
		generateWhatsAppLink,
		formatContactMessage,
		WHATSAPP_NUMBER,
		PHONE_NUMBER,
		type ContactFormData
	} from '$lib/utils/whatsapp';

	let name = $state('');
	let email = $state('');
	let message = $state('');

	function handleSubmit(event: Event) {
		event.preventDefault();

		const formData: ContactFormData = {
			name,
			email,
			message
		};

		const formattedMessage = formatContactMessage(formData);
		const whatsappLink = generateWhatsAppLink(WHATSAPP_NUMBER, formattedMessage);
		window.open(whatsappLink, '_blank');
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
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
					</svg>
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
				class="w-full rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
			>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
				</svg>
				Send via WhatsApp
			</button>
		</form>
	</div>
</div>
