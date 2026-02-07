<script lang="ts">
	import {
		generateWhatsAppLink,
		formatQuoteMessage,
		WHATSAPP_NUMBER,
		type QuoteFormData
	} from '$lib/utils/whatsapp';
	import WhatsAppIcon from '$lib/icons/WhatsAppIcon.svelte';

	let serviceType = $state<'flooring' | 'tabletop'>('flooring');
	let size = $state<number | null>(null);
	let tableSource = $state<'existing' | 'provide'>('existing');
	let designRequirements = $state('');
	let jobDescription = $state('');
	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let isSubmitting = $state(false);

	function handleSubmit(event: Event) {
		event.preventDefault();
		if (isSubmitting || size === null) return;

		isSubmitting = true;

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

		setTimeout(() => {
			isSubmitting = false;
		}, 2000);
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

			<p class="text-center text-sm text-gray-500">
				Clicking submit will open WhatsApp with your quote request pre-filled.
			</p>
		</form>
	</div>
</section>
