/**
 * JavasSript for PAMELA openwidget.
 * @see http://www.mediawiki.org/wiki/Extension:PAMELA
 * 
 * @licence GNU GPL v3
 * @author Jeroen De Dauw < jeroendedauw@gmail.com >
 */

jQuery(document).ready(function() {
	$( '.openwidget' ).each( function() {
		$( this ).openwidget();
	} );
});

(function( $ ){ $.fn.openwidget = function() {
	
	this.css( 'display', 'none' ).append(
		$( '<span />' ).attr( 'class', 'openbanner' ).text( mediaWiki.msg( 'pamela-list-open' ) )
	);
	
	this.initInterfaceUpdate = function() {
		this.api.getAll(
			{},
			function( entities ) {
				updateInterface( entities );
			}
		);
	}	
	
	function updateInterface( entities ) {
		var isOpen = entities.people.length > 0 || entities.macs.length > 0;
		openDiv.css( 'display', isOpen ? 'block' : 'none' );			
	}
	
	function doRepeatingUpdates() {
		self.initInterfaceUpdate();
		setTimeout( doRepeatingUpdates, parseInt( self.attr( 'interval' ) ) );
	}
	
	doRepeatingUpdates();	
	
	return this
	
}; })( jQuery );