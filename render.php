<?php
/**
 * Server-side rendering and schema injection for Sandcastles Schema FAQ.
 *
 * @package Sandcastles_Schema_FAQ
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$GLOBALS['sandcastles_schema_faq_schema_items'] = array();

/**
 * Add a schema entry for later JSON-LD output.
 *
 * @param string $question Question text.
 * @param string $answer Answer text.
 * @return void
 */
function sandcastles_schema_faq_add_schema_item( $question, $answer ) {
	if ( '' === $question || '' === $answer ) {
		return;
	}

	$GLOBALS['sandcastles_schema_faq_schema_items'][] = array(
		'@type'          => 'Question',
		'name'           => $question,
		'acceptedAnswer' => array(
			'@type' => 'Answer',
			'text'  => $answer,
		),
	);
}

/**
 * Render callback for the block output.
 *
 * @param array $attributes Block attributes.
 * @return string
 */
function sandcastles_schema_faq_render_block( $attributes ) {
	$faqs = array();
	if ( isset( $attributes['faqs'] ) && is_array( $attributes['faqs'] ) ) {
		$faqs = $attributes['faqs'];
	}

	if ( empty( $faqs ) ) {
		return '';
	}

	$instance_id = wp_unique_id( 'sandcastles-schema-faq-' );

	ob_start();
	?>
	<div class="sandcastles-schema-faq-root" data-accordion>
		<?php foreach ( $faqs as $index => $item ) : ?>
			<?php
			$question_raw = isset( $item['question'] ) ? $item['question'] : '';
			$answer_raw   = isset( $item['answer'] ) ? $item['answer'] : '';
			$question     = wp_strip_all_tags( $question_raw );
			$answer_text  = wp_strip_all_tags( $answer_raw );
			$answer_html  = wp_kses_post( $answer_raw );
			$panel_id     = $instance_id . '-' . intval( $index );

			if ( '' === trim( $question ) && '' === trim( $answer_text ) ) {
				continue;
			}

			sandcastles_schema_faq_add_schema_item( $question, $answer_text );
			?>
			<div class="faq-item">
				<button class="faq-trigger" type="button" aria-expanded="false" aria-controls="<?php echo esc_attr( $panel_id ); ?>">
					<span class="faq-title"><?php echo esc_html( $question ); ?></span>
					<svg class="faq-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
					</svg>
				</button>
				<div class="faq-pane" id="<?php echo esc_attr( $panel_id ); ?>">
					<div class="faq-content">
						<?php echo wp_kses_post( $answer_html ); ?>
					</div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
	<?php

	return ob_get_clean();
}

/**
 * Print the JSON-LD schema in the footer when needed.
 *
 * @return void
 */
function sandcastles_schema_faq_print_schema() {
	if ( empty( $GLOBALS['sandcastles_schema_faq_schema_items'] ) ) {
		return;
	}

	$schema = array(
		'@context'   => 'https://schema.org',
		'@type'      => 'FAQPage',
		'mainEntity' => $GLOBALS['sandcastles_schema_faq_schema_items'],
	);

	$schema_json = wp_json_encode( $schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES );

	if ( empty( $schema_json ) ) {
		return;
	}

	echo '<script type="application/ld+json">' . $schema_json . '</script>';
}
add_action( 'wp_footer', 'sandcastles_schema_faq_print_schema', 20 );
