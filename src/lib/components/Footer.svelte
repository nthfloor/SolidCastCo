<script lang="ts">
	import { PHONE_NUMBER } from '$lib/utils/whatsapp';
</script>

<footer class="bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-8 md:grid-cols-3">
			<!-- Brand -->
			<div>
				<div class="flex items-center gap-2 mb-4">
					<span class="text-xl font-bold text-teal-400">SolidCast</span>
					<span class="text-xl font-light">Co.</span>
				</div>
				<p class="text-gray-400 text-sm">
					Premium epoxy flooring and custom tabletops. Transforming spaces with durable, stunning finishes.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="font-semibold mb-4">Quick Links</h3>
				<ul class="space-y-2 text-sm text-gray-400">
					<li><a href="/#services" class="hover:text-teal-400 transition-colors">Services</a></li>
					<li><a href="/#how-we-work" class="hover:text-teal-400 transition-colors">How We Work</a></li>
					<li><a href="/#quote" class="hover:text-teal-400 transition-colors">Get a Quote</a></li>
					<li><a href="/contact" class="hover:text-teal-400 transition-colors">Contact Us</a></li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="font-semibold mb-4">Contact</h3>
				<ul class="space-y-2 text-sm text-gray-400">
					<li>
						<a href="tel:{PHONE_NUMBER.replace(/\s/g, '')}" class="hover:text-teal-400 transition-colors">
							{PHONE_NUMBER}
						</a>
					</li>
					<li>
						<a href="/contact" class="hover:text-teal-400 transition-colors">
							Send us a message
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
			<p>&copy; {new Date().getFullYear()} SolidCast Co. All rights reserved.</p>
		</div>
	</div>
</footer>
