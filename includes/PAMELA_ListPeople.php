<?php

/**
 * Class for the 'listpeople' parser hook.
 * 
 * @since 0.1
 * 
 * @file PAMELA_ListPeople.php
 * @ingroup PAMELA
 * 
 * @licence GNU GPL v3
 * @author Jeroen De Dauw < jeroendedauw@gmail.com >
 */
class PAMELAListPeople extends ParserHook {
	
	/**
	 * No LSB in pre-5.3 PHP *sigh*.
	 * This is to be refactored as soon as php >=5.3 becomes acceptable.
	 */
	public static function staticMagic( array &$magicWords, $langCode ) {
		$instance = new self;
		return $instance->magic( $magicWords, $langCode );
	}
	
	/**
	 * No LSB in pre-5.3 PHP *sigh*.
	 * This is to be refactored as soon as php >=5.3 becomes acceptable.
	 */	
	public static function staticInit( Parser &$parser ) {
		$instance = new self;
		return $instance->init( $parser );
	}	
	
	/**
	 * Gets the name of the parser hook.
	 * @see ParserHook::getName
	 * 
	 * @since 0.1
	 * 
	 * @return string
	 */
	protected function getName() {
		return 'listpeople';
	}
	
	/**
	 * Returns an array containing the parameter info.
	 * @see ParserHook::getParameterInfo
	 * 
	 * @since 0.1
	 * 
	 * @return array
	 */
	protected function getParameterInfo( $type ) {
		$params = array();
		
		
		
		return $params;
	}
	
	/**
	 * Returns the list of default parameters.
	 * @see ParserHook::getDefaultParameters
	 * 
	 * @since 0.1
	 * 
	 * @return array
	 */
	protected function getDefaultParameters( $type ) {
		return array();
	}
	
	/**
	 * Renders and returns the output.
	 * @see ParserHook::render
	 * 
	 * @since 0.1
	 * 
	 * @param array $parameters
	 * 
	 * @return string
	 */
	public function render( array $parameters ) {
		
		return '';		
	}
	
	/**
	 * @see ParserHook::getDescription()
	 * 
	 * @since 0.1
	 */
	public function getDescription() {
		return wfMsg( '' );
	}	
	
}
