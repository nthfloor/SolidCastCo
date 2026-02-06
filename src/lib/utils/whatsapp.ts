export interface QuoteFormData {
	serviceType: 'flooring' | 'tabletop';
	size: number;
	tableSource?: 'existing' | 'provide';
	designRequirements: string;
	jobDescription: string;
	name: string;
	phone: string;
	email?: string;
}

export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

// Replace with your actual WhatsApp number (including country code, no + or spaces)
export const WHATSAPP_NUMBER = '27XXXXXXXXX';
export const PHONE_NUMBER = '+27 XX XXX XXXX';

export function generateWhatsAppLink(phone: string, message: string): string {
	const encoded = encodeURIComponent(message);
	return `https://wa.me/${phone}?text=${encoded}`;
}

export function formatQuoteMessage(data: QuoteFormData): string {
	const serviceLabel = data.serviceType === 'flooring' ? 'Epoxy Flooring' : 'Epoxy Tabletop';
	const tableSourceLabel = data.tableSource === 'existing'
		? 'Customer has existing table'
		: 'SolidCast to provide table/wood';

	let message = `*New Quote Request - SolidCast Co.*

*Service:* ${serviceLabel}
*Size:* ${data.size} m²`;

	if (data.serviceType === 'tabletop' && data.tableSource) {
		message += `\n*Table:* ${tableSourceLabel}`;
	}

	message += `
*Design Requirements:* ${data.designRequirements || 'Not specified'}
*Job Description:* ${data.jobDescription || 'Not specified'}

*Customer Details:*
Name: ${data.name}
Phone: ${data.phone}`;

	if (data.email) {
		message += `\nEmail: ${data.email}`;
	}

	return message.trim();
}

export function formatContactMessage(data: ContactFormData): string {
	return `*New Contact - SolidCast Co.*

*Name:* ${data.name}
*Email:* ${data.email}

*Message:*
${data.message}`.trim();
}
