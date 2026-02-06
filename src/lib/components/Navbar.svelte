<script lang="ts">
	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-2">
				<span class="text-xl font-bold text-teal-600">SolidCast</span>
				<span class="text-xl font-light text-gray-700">Co.</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:gap-8">
				<a href="/#services" class="text-gray-600 hover:text-teal-600 transition-colors">Services</a>
				<a href="/#how-we-work" class="text-gray-600 hover:text-teal-600 transition-colors">How We Work</a>
				<a href="/contact" class="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
				<a
					href="/#quote"
					class="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors"
				>
					Get a Quote
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				type="button"
				class="md:hidden p-2 text-gray-600"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden bg-white border-t">
			<div class="px-4 py-4 space-y-3">
				<a href="/#services" class="block text-gray-600 hover:text-teal-600" onclick={closeMenu}>Services</a>
				<a href="/#how-we-work" class="block text-gray-600 hover:text-teal-600" onclick={closeMenu}>How We Work</a>
				<a href="/contact" class="block text-gray-600 hover:text-teal-600" onclick={closeMenu}>Contact</a>
				<a
					href="/#quote"
					class="block rounded-lg bg-teal-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-700"
					onclick={closeMenu}
				>
					Get a Quote
				</a>
			</div>
		</div>
	{/if}
</nav>
