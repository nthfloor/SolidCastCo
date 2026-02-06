<script lang="ts">
	import {
		generateWhatsAppLink,
		formatQuoteMessage,
		WHATSAPP_NUMBER,
		type QuoteFormData
	} from '$lib/utils/whatsapp';

	let serviceType = $state<'flooring' | 'tabletop'>('flooring');
	let size = $state<number>(0);
	let tableSource = $state<'existing' | 'provide'>('existing');
	let designRequirements = $state('');
	let jobDescription = $state('');
	let name = $state('');
	let phone = $state('');
	let email = $state('');

	function handleSubmit(event: Event) {
		event.preventDefault();

		const formData: QuoteFormData = {
			serviceType,
			size,
			tableSource: serviceType === 'tabletop' ? tableSource : undefined,
			designRequirements,
			jobDescription,
			name,
			phone,
			email: email || undefined
		};

		const message = formatQuoteMessage(formData);
		const whatsappLink = generateWhatsAppLink(WHATSAPP_NUMBER, message);
		window.open(whatsappLink, '_blank');
	}
</script>

<section id="quote" class="py-16 lg:py-24 bg-white">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-10">
			<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Get Your Free Quote</h2>
			<p class="mt-4 text-lg text-gray-600">
				Fill out the form below and we'll send you an indicative quote via WhatsApp
			</p>
		</div>

		<form onsubmit={handleSubmit} class="space-y-6 bg-gray-50 rounded-2xl p-6 sm:p-8">
			<!-- Service Type -->
			<fieldset>
				<legend class="block text-sm font-medium text-gray-700 mb-3">Service Type *</legend>
				<div class="flex gap-4">
					<label class="flex-1">
						<input
							type="radio"
							name="serviceType"
							value="flooring"
							bind:group={serviceType}
							class="peer sr-only"
						/>
						<div class="cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-4 text-center transition-all peer-checked:border-teal-600 peer-checked:bg-teal-50 hover:border-gray-300">
							<span class="font-medium text-gray-900">Epoxy Flooring</span>
						</div>
					</label>
					<label class="flex-1">
						<input
							type="radio"
							name="serviceType"
							value="tabletop"
							bind:group={serviceType}
							class="peer sr-only"
						/>
						<div class="cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-4 text-center transition-all peer-checked:border-teal-600 peer-checked:bg-teal-50 hover:border-gray-300">
							<span class="font-medium text-gray-900">Epoxy Tabletop</span>
						</div>
					</label>
				</div>
			</fieldset>

			<!-- Size -->
			<div>
				<label for="size" class="block text-sm font-medium text-gray-700 mb-2">
					Size (m²) *
				</label>
				<input
					type="number"
					id="size"
					bind:value={size}
					required
					min="0.1"
					step="0.1"
					class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all"
					placeholder="e.g., 20"
				/>
			</div>

			<!-- Table Source (conditional) -->
			{#if serviceType === 'tabletop'}
				<fieldset>
					<legend class="block text-sm font-medium text-gray-700 mb-3">Table/Wood Source *</legend>
					<div class="space-y-2">
						<label class="flex items-center gap-3 cursor-pointer">
							<input
								type="radio"
								name="tableSource"
								value="existing"
								bind:group={tableSource}
								class="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
							/>
							<span class="text-gray-700">I have an existing table/surface</span>
						</label>
						<label class="flex items-center gap-3 cursor-pointer">
							<input
								type="radio"
								name="tableSource"
								value="provide"
								bind:group={tableSource}
								class="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
							/>
							<span class="text-gray-700">I need SolidCast to provide the table/wood</span>
						</label>
					</div>
				</fieldset>
			{/if}

			<!-- Design Requirements -->
			<div>
				<label for="designRequirements" class="block text-sm font-medium text-gray-700 mb-2">
					Design & Styling Requirements
				</label>
				<textarea
					id="designRequirements"
					bind:value={designRequirements}
					rows="3"
					class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all resize-none"
					placeholder="Colors, patterns, embedded items, metallic finishes, etc."
				></textarea>
				<p class="mt-1 text-sm text-gray-500">
					Have a reference image? You can share it via WhatsApp after submitting.
				</p>
			</div>

			<!-- Job Description -->
			<div>
				<label for="jobDescription" class="block text-sm font-medium text-gray-700 mb-2">
					Job Description
				</label>
				<textarea
					id="jobDescription"
					bind:value={jobDescription}
					rows="3"
					class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all resize-none"
					placeholder="Any additional details about your project..."
				></textarea>
			</div>

			<!-- Contact Details -->
			<div class="border-t border-gray-200 pt-6">
				<h3 class="text-lg font-medium text-gray-900 mb-4">Your Details</h3>
				<div class="grid gap-4 sm:grid-cols-2">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
							Name *
						</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all"
							placeholder="Your name"
						/>
					</div>
					<div>
						<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
							Phone / WhatsApp *
						</label>
						<input
							type="tel"
							id="phone"
							bind:value={phone}
							required
							class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all"
							placeholder="+27 XX XXX XXXX"
						/>
					</div>
				</div>
				<div class="mt-4">
					<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
						Email (optional)
					</label>
					<input
						type="email"
						id="email"
						bind:value={email}
						class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 outline-none transition-all"
						placeholder="your@email.com"
					/>
				</div>
			</div>

			<!-- Submit -->
			<button
				type="submit"
				class="w-full rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
			>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
				</svg>
				Send via WhatsApp
			</button>

			<p class="text-center text-sm text-gray-500">
				Clicking submit will open WhatsApp with your quote request pre-filled.
			</p>
		</form>
	</div>
</section>
