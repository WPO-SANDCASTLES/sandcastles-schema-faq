import { __ } from '@wordpress/i18n';
import { createElement, Fragment } from '@wordpress/element';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const createEmptyItem = () => ( {
	question: '',
	answer: '',
} );

const updateItem = ( faqs, index, field, value ) =>
	faqs.map( ( item, itemIndex ) => {
		if ( itemIndex !== index ) {
			return item;
		}

		return {
			...item,
			[ field ]: value,
		};
	} );

const removeItem = ( faqs, index ) =>
	faqs.filter( ( item, itemIndex ) => itemIndex !== index );

export default function SandcastlesSchemaFAQEdit( props ) {
	const { attributes, setAttributes } = props;
	const faqs = Array.isArray( attributes.faqs ) ? attributes.faqs : [];
	const blockProps = useBlockProps( { className: 'sandcastles-schema-faq-root' } );

	const addNewItem = () => {
		setAttributes( { faqs: [ ...faqs, createEmptyItem() ] } );
	};

	return createElement(
		Fragment,
		null,
		createElement(
			'div',
			blockProps,
			faqs.map( ( item, index ) => {
				return createElement(
					'div',
					{ className: 'faq-item', key: index },
					createElement(
						'div',
						{ className: 'faq-trigger' },
						createElement( RichText, {
							tagName: 'div',
							className: 'faq-title',
							placeholder: __( 'Add a question', 'sandcastles-schema-faq' ),
							value: item.question,
							onChange: ( value ) =>
								setAttributes( {
									faqs: updateItem( faqs, index, 'question', value ),
								} ),
							allowedFormats: [],
							multiline: false,
						} ),
						createElement(
							Button,
							{
								className: 'sandcastles-schema-faq-remove',
								label: __( 'Remove item', 'sandcastles-schema-faq' ),
								onClick: () =>
									setAttributes( {
										faqs: removeItem( faqs, index ),
									} ),
								isDestructive: true,
								isSmall: true,
							},
							createElement(
								'span',
								{ className: 'sandcastles-schema-faq-remove-icon', 'aria-hidden': 'true' },
								createElement(
									'svg',
									{
										width: 16,
										height: 16,
										viewBox: '0 0 24 24',
										fill: 'none',
										stroke: 'currentColor',
										strokeWidth: '2',
										focusable: 'false',
									},
									createElement( 'polyline', { points: '3 6 5 6 21 6' } ),
									createElement( 'path', {
										d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
									} )
								)
							),
							createElement( 'span', { className: 'screen-reader-text' }, __( 'Remove item', 'sandcastles-schema-faq' ) )
						)
					),
					createElement(
						'div',
						{ className: 'faq-pane' },
						createElement( RichText, {
							tagName: 'div',
							className: 'faq-content',
							placeholder: __( 'Add the answer', 'sandcastles-schema-faq' ),
							value: item.answer,
							onChange: ( value ) =>
								setAttributes( {
									faqs: updateItem( faqs, index, 'answer', value ),
								} ),
						} )
					)
				);
			} ),
			createElement(
				'div',
				{ className: 'sandcastles-schema-faq-add-row' },
				createElement(
					Button,
					{
						className: 'sandcastles-schema-faq-add',
						onClick: addNewItem,
					},
					createElement(
						'span',
						{ className: 'sandcastles-schema-faq-add-icon', 'aria-hidden': 'true' },
						createElement(
							'svg',
							{
								width: 20,
								height: 20,
								viewBox: '0 0 24 24',
								fill: 'none',
								stroke: 'currentColor',
								strokeWidth: '2',
								focusable: 'false',
							},
							createElement( 'line', { x1: '12', y1: '5', x2: '12', y2: '19' } ),
							createElement( 'line', { x1: '5', y1: '12', x2: '19', y2: '12' } )
						)
					),
					createElement( 'span', { className: 'sandcastles-schema-faq-add-label' }, __( 'Add FAQ', 'sandcastles-schema-faq' ) )
				)
			)
		)
	);
}
