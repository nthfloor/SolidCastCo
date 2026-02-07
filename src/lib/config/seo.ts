import { PHONE_NUMBER } from '$lib/utils/whatsapp';

export const siteConfig = {
	name: 'SolidCast Co.',
	tagline: 'Premium Epoxy Flooring & Tabletops',
	description:
		'Premium epoxy flooring and custom tabletops in South Africa. Transform your spaces with durable, stunning epoxy finishes for garages, showrooms, and custom river tables.',
	url: 'https://solidcast.co.za',
	locale: 'en_ZA',
	phone: PHONE_NUMBER,
	themeColor: '#0d9488'
};

export interface PageSEO {
	title?: string;
	description?: string;
	canonical?: string;
	noindex?: boolean;
	ogImage?: string;
}

export function getFullTitle(pageTitle?: string): string {
	if (!pageTitle) return `${siteConfig.name} | ${siteConfig.tagline}`;
	return `${pageTitle} | ${siteConfig.name}`;
}
