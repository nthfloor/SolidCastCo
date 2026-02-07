import { siteConfig } from './seo';

export function getLocalBusinessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${siteConfig.url}/#organization`,
		name: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		telephone: siteConfig.phone,
		priceRange: '$$',
		image: `${siteConfig.url}/og-image.jpg`
	};
}

export function getWebSiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${siteConfig.url}/#website`,
		url: siteConfig.url,
		name: siteConfig.name,
		description: siteConfig.description,
		publisher: {
			'@id': `${siteConfig.url}/#organization`
		}
	};
}

export function getEpoxyFlooringServiceSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		'@id': `${siteConfig.url}/#epoxy-flooring`,
		name: 'Epoxy Flooring',
		description:
			'Durable, seamless floor coatings perfect for garages, showrooms, warehouses, and residential spaces. Chemical, stain, and traffic resistant.',
		provider: {
			'@id': `${siteConfig.url}/#organization`
		},
		serviceType: 'Flooring Installation',
		areaServed: {
			'@type': 'Country',
			name: 'South Africa'
		}
	};
}

export function getEpoxyTabletopsServiceSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		'@id': `${siteConfig.url}/#epoxy-tabletops`,
		name: 'Epoxy Tabletops',
		description:
			'Custom river tables, bar tops, coffee tables, and countertops with embedded designs, live edges, and crystal-clear finishes.',
		provider: {
			'@id': `${siteConfig.url}/#organization`
		},
		serviceType: 'Custom Furniture',
		areaServed: {
			'@type': 'Country',
			name: 'South Africa'
		}
	};
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: `${siteConfig.url}${item.url}`
		}))
	};
}

export function getContactPageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		'@id': `${siteConfig.url}/contact#webpage`,
		url: `${siteConfig.url}/contact`,
		name: 'Contact Us | SolidCast Co.',
		description:
			'Get in touch with SolidCast Co. for your epoxy flooring and tabletop needs.',
		mainEntity: {
			'@id': `${siteConfig.url}/#organization`
		}
	};
}
