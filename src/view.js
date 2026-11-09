( function () {
	const rootSelector = '.sandcastles-schema-faq-root[data-accordion]';
	const triggerSelector = '.faq-trigger';

	const toggleItem = ( button ) => {
		const item = button.closest( '.faq-item' );
		if ( ! item ) {
			return;
		}

		const isOpen = item.classList.contains( 'is-open' );
		item.classList.toggle( 'is-open', ! isOpen );
		button.setAttribute( 'aria-expanded', String( ! isOpen ) );
	};

	document.addEventListener( 'click', ( event ) => {
		const target = event.target;
		if ( ! target || ! target.closest ) {
			return;
		}

		const button = target.closest( triggerSelector );
		if ( ! button ) {
			return;
		}

		if ( ! button.closest( rootSelector ) ) {
			return;
		}

		event.preventDefault();
		toggleItem( button );
	} );
} )();
