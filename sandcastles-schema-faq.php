<?php
/**
 * Plugin Name:       Sandcastles Schema FAQ
 * Plugin URI:        https://alexseif.com
 * Description:       Lightweight, high-speed Gutenberg FAQ accordion block with automated server-side JSON-LD schema generation for advanced SEO and GEO visibility.
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Alex Seif
 * Author URI:        https://alexseif.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sandcastles-schema-faq
 * Domain Path:       /languages
 *
 * @package           Sandcastles_Schema_FAQ
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SANDCASTLES_SCHEMA_FAQ_VERSION', '1.0.0' );
define( 'SANDCASTLES_SCHEMA_FAQ_FILE', __FILE__ );
define( 'SANDCASTLES_SCHEMA_FAQ_PATH', plugin_dir_path( __FILE__ ) );
define( 'SANDCASTLES_SCHEMA_FAQ_URL', plugin_dir_url( __FILE__ ) );

require_once SANDCASTLES_SCHEMA_FAQ_PATH . 'render.php';

/**
 * Register the Sandcastles Schema FAQ block and server-side render callback.
 *
 * @return void
 */
function sandcastles_schema_faq_register_block() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'sandcastles_schema_faq_render_block',
		)
	);
}
add_action( 'init', 'sandcastles_schema_faq_register_block' );
