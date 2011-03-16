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
	
	this.api = new pamela.API( {
		'url': this.attr( 'apiurl' )
	} );
	
	this.api.getPeople(
		{},
		function( people ) {
			showPeopleList( people );
		}
	);
	
	function showPeopleList() {
		
	}
	
	return this;
	
}; })( jQuery );