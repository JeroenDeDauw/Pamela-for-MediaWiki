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
		this.data = { // TODO
			'people': [ 'foo', 'bar', 'baz' ],
			'devices': [ 'device 1', 'device 2' ],
			'macs': [ '0:0:0:0:0:0' ]
		};
		
		this.groups = [];
		for ( i in this.data ) this.groups.push( i );
		
		this.hasData = function( group, args ) {
			// TODO: look if already in this.data
			// and if still valid (using optional ttl in args)
			return true;
		};
		
		this.returnAll = function( callback ) {
			callback( this.data );
		}
		
		this.returnGroups = function( groups, callback ) {
			if ( groups == this.groups ) {
				callback( this.data );
			}
			else {
				var result = {};
				
				for ( i in groups ) {
					result[groups[i]] = this.data[groups[i]]; 
				}
				
				callback( result );
			}
		};
		
		this.getAll = function( args, callback ) {
			this.getGroups( this.groups, args, callback );
		};
		
		this.getGroups = function( groups, args, callback ) {
			if ( this.hasData( groups, args ) ) {
				this.returnGroups( groups, callback );
			}
			else {
				requestData( groups, callback );
			}
		};
		
		function requestData( groups, callback ) {
			$.getJSON(
				self.options.url + '?callback=?',
				{ // TODO
					//'format': 'json',
					//'groups': groups.join( '|' )
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
						
						self.returnGroups( groups, callback );
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

