/**
 * JavasSript for PAMELA personwidget.
 * @see http://www.mediawiki.org/wiki/Extension:PAMELA
 * 
 * @licence GNU GPL v3
 * @author Jeroen De Dauw < jeroendedauw@gmail.com >
 */

jQuery(document).ready(function() {
	$( '.personwidget' ).each( function() {
		$( this ).personwidget();
	} );
});

(function( $ ){ $.fn.personwidget = function() {
	
	var self = this;
	
	this.api = new pamela.API( {
		'url': this.attr( 'apiurl' )
	} );
	
	return this
	
}; })( jQuery );