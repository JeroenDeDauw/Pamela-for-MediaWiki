/**
 * JavasSript for PAMELA extension.
 * @see http://www.mediawiki.org/wiki/Extension:PAMELA
 * 
 * @licence GNU GPL v3
 * @author Jeroen De Dauw < jeroendedauw@gmail.com >
 */

window.pamela = new ( function( $ ) {
	
	this.API = function( options ) {
		
		var self = this;
		
		this.options = options;
		this.data = {};
		
		this.hasData = function( group, args ) {
			// TODO: look if already in this.data
			// and if still valid (using optional ttl in args)
			return false;
		};	
		
		this.returnPeople = function( callback ) {
			callback.call( [ this.data.people ] );
		};	
		
		this.getPeople = function( args, callback ) {
			if ( this.hasData( 'people', args ) ) {
				this.returnPeople( callback );
			}
			else {
				requestData( 'people', callback );
			}
		};
		
		function requestData( group, callback ) {
			$.getJSON(
				self.options.url,
				{
					'format': 'json',
				},
				function( data ) {
					if ( data ) {
						self.data.people = data;
						self.returnPeople( callback );
					}
					else {
						handleError( '' ); // TODO
					}
				}
			);
		}
		
		function handleError( message ) {
			// TODO
		}
		
	};	
	
} )( jQuery );

