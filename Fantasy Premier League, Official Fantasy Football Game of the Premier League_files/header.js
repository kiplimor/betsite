/* eslint-disable */
if ( window.matchMedia( '(min-width: 900px)' ).matches ) {

} else {
    $( '.navLink' ).on( 'keypress, click', function() {
        $( '.navLink' ).removeClass( 'active' );
        $( this ).addClass( 'active' );

        if ( !$( this ).parents( 'li' ).hasClass( 'clubs' ) ) {
            $( '.clubNavigation' ).removeClass( 'open' );
        }
    } );
}

$( '.clubs .navLink' ).on( 'keypress, click', function() {
    $( '.clubNavigation' ).addClass( 'open' );
} );

$( '.moreLinks .moreLinksBtn' ).on( 'keypress, click', function() {
    $( this ).parents( '.moreLinks' ).toggleClass( 'open' );
} );

$( '.masthead .menuBtn' ).click( function() {
    $( 'body' ).toggleClass( 'mastheadOpen' );
} );

$( '.masthead .searchBtn' ).on( 'click', function() {
    $( '.masthead' ).toggleClass( 'searchOpen' );
    $( '#mastheadSearch' ).focus();
} );

$( '.masthead .searchBtn' ).keypress( function( e ) {
    if ( e.which == 13 ) {
        $( '.masthead' ).toggleClass( 'searchOpen' );
        $( '#mastheadSearch' ).focus();
    }
} );

if ( window.matchMedia( '(min-width: 900px)' ).matches ) {
    var bottom = $( '.navBar' ).offset().top;
    var logoH = $( '.plLogo' ).height();
    var logoH = 120;
    var navH = $( '.navBar' ).height();
    var scroll;

    $( window ).scroll( function() {
        scroll = $( window ).scrollTop();
        if ( scroll >= bottom ) {
            $( '.fixedContainer' ).addClass( 'fixed' );
            $( '.plLogo img' ).css( 'height', navH + 'px' );
        } else {
            $( '.fixedContainer' ).removeClass( 'fixed' );
            logoSize = logoH - scroll;
            if ( logoSize >= navH ) {
                $( '.plLogo img' ).css( 'height', logoSize + 'px' );
            }
        }
    } );
}
/* eslint-enable */
