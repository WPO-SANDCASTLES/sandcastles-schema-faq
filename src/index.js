import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import './style.scss';
import './editor.scss';

registerBlockType( 'sandcastles/schema-faq', {
	title: __( 'Sandcastles Schema FAQ', 'sandcastles-schema-faq' ),
	description: __( 'Lightweight, high-speed Gutenberg FAQ accordion block with automated server-side JSON-LD schema generation for advanced SEO and GEO visibility.', 'sandcastles-schema-faq' ),
	icon: 'editor-help',
	category: 'widgets',
	attributes: {
		faqs: {
			type: 'array',
			default: [],
		},
	},
	edit: Edit,
	save() {
		return null;
	},
} );
