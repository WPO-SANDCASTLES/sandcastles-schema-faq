=== Sandcastles Schema FAQ ===
Contributors: alexseif
Donate link: https://alexseif.com
Tags: faq, schema, json-ld, gutenberg, seo
Requires at least: 6.0
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Lightweight, high-speed Gutenberg FAQ accordion block with automated server-side JSON-LD schema generation for advanced SEO and GEO visibility.

== Description ==

Sandcastles Schema FAQ is an ultra-fast, accessible Gutenberg FAQ block engineered for modern search and AI retrieval. It dynamically renders accessible FAQ accordions and automatically injects valid FAQPage JSON-LD schema into your page footer for superior SEO and Generative Engine Optimization (GEO).

Engineered by Alex Seif and Sandcastle Holdings for agencies, webmasters, and performance professionals who require deterministic search indexing, sub-millisecond front-end overhead, and clean structured data markup.

### Why Sandcastles Schema FAQ?

* High-Speed Performance: Loads zero jQuery and minimal vanilla JavaScript. Front-end assets are featherweight and load only when the block is used.
* Built for SEO and GEO: Generates search-engine compliant FAQPage schema markup automatically from your questions and answers.
* Accessible by Design: Built with full WAI-ARIA compliance, including keyboard navigation, aria-expanded state handling, and proper panel controls.
* Clean Block Editor Integration: Simple, intuitive Gutenberg interface with drag-and-drop ease, inline rich text editing, and instant item management.
* Zero Telemetry: No tracking, no external calls, and no adverts.

== Installation ==

1. Upload the `sandcastles-schema-faq` folder to your `/wp-content/plugins/` directory, or install directly through the WordPress admin plugins screen.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. In the Gutenberg Block Editor, insert the 'Sandcastles Schema FAQ' block wherever you need an FAQ section.
4. Add your questions and answers. The plugin takes care of both the accordion display and the JSON-LD schema injection automatically.

== Frequently Asked Questions ==

= Does this plugin inject schema markup on every page? =
No. Schema markup is generated dynamically and only injected on pages where the Sandcastles Schema FAQ block is present and contains questions.

= Can I style the accordion? =
Yes. The accordion uses semantic, cleanly scoped CSS classes prefixed with `.sandcastles-schema-faq-root` that inherit your theme typography while remaining easy to customize.

= Is there any performance overhead? =
Virtually zero. The script is pure vanilla JavaScript under 1KB minified, with zero external dependencies.

== Changelog ==

= 1.0.0 =
* Initial public release under Sandcastle Holdings.
* Native Gutenberg block with server-side JSON-LD output.
* Full WAI-ARIA accessibility support.
