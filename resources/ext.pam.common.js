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
		this.data = {
			'people': [ 'foo', 'bar', 'baz' ],
			'devices': [ 'device 1', 'device 2' ],
			'enities': [ 'unknown thing' ]
		};
		
		this.hasData = function( group, args ) {
			// TODO: look if already in this.data
			// and if still valid (using optional ttl in args)
			return true;
		};
		
		this.returnAll = function( callback ) {
			callback( this.data );
		}
		
		this.returnPeople = function( callback ) {
			callback( this.data.people );
		};
		
		this.getPeople = function( args, callback ) {
			if ( this.hasData( 'people', args ) ) {
				this.returnPeople( callback );
			}
			else {
				requestData( 'people', callback );
			}
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
					//'format': 'json',
				},
				function( data ) {
					if ( data ) {
						for ( var i = data.length; i >= 0; i-- ) {
							var type;
							
							if ( data[i].indexOf('(') != -1 ) {
								type = self.data.devices;
							}
							else if ( data[i].split( ':' ).length == 6 ) {
								type = self.data.enities
							}
							else {
								type = self.data.people;
							}
							
							type.unshift( data[i] );
						}
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

