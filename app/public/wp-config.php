<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ']ar}XhtFTu.*k<h9i 08L<Tnv]}+^]7i_z%22erBB1nUFie0WuKE^7_]yA&6wI?y' );
define( 'SECURE_AUTH_KEY',   '6AY36q^:CJ!a1]twBCw}=}%T~Z6+YRzW, s9*jx|xqu#SgJ{B)J_TyOxlJRy}2Q*' );
define( 'LOGGED_IN_KEY',     '&M`PE**,ZnE`[z{LK^MK(T;o@YN:QgZn0[sC4h:*7?Ri]%p[sk3+3lrTV-b[}#gb' );
define( 'NONCE_KEY',         'M6eo hN^v-em+J`rDm9{vBj1c}hdLTys,RWk9Ox$;.2X/g:-Ip-=}{N_`#Y6d3?i' );
define( 'AUTH_SALT',         'KO:qh(vY/cDNJ#q:v]M+wQ?%=@>(RKJfbpqkx 95m9cC)KM@/mbN`e >?`Mg5Y0<' );
define( 'SECURE_AUTH_SALT',  'Vh,P:9~hUE;e6$/p}$!b?kz V%=o~@efDoBDfU)~je><j>4`x*IRsnbclfNpx z`' );
define( 'LOGGED_IN_SALT',    'kgKgHi|UpBMg:a^$nvDfXWj;|Ve+|T>0(Cas#,CbqLByA4s8Q_)/0n8)IAsTJ$,v' );
define( 'NONCE_SALT',        'Mus2v.>khM>Q1$>T;syMGbj @=SF(ka+h113;eyfI^EgWC4~kLYU1xL9J[WsUAvX' );
define( 'WP_CACHE_KEY_SALT', '[S=5+xkI1vrA|Bx8W2P%aqMF|vXXz&)a&ef*SEJ_IbDp; MVUdJJGlm*@sVzImPc' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
