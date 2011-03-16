/**
 * JavasSript for PAMELA listwidget.
 * @see http://www.mediawiki.org/wiki/Extension:PAMELA
 * 
 * @licence GNU GPL v3
 * @author Jeroen De Dauw < jeroendedauw@gmail.com >
 */

jQuery(document).ready(function() {
	$( '.peoplelist' ).each( function() {
		$( this ).peoplelist();
	} );
});

(function( $ ){ $.fn.peoplelist = function() {
	
	
	
	return this;
	
}; })( jQuery );