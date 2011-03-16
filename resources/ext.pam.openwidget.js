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
	
	return this
	
}; })( jQuery );