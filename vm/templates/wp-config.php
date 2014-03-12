<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', 'wordpress');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '^!_TV ]0lO~wt.9@<^{X!WVM[R3_5I[1ablzv>g?*k5L7rk::/YrX&o4NzeLYxY}');
define('SECURE_AUTH_KEY',  '.-Q:t*9;~ @#hM?g98&QKg>F5j1b3rc]i7S$<$+Y&Sp1X0J@D5C[f(s7]Bts:zz4');
define('LOGGED_IN_KEY',    '<},joZxdM)ZiY/&D}5Vo;2:|-|r._b7J}L9|bzpn mOIzktGoI1cif9!RR.Fe@je');
define('NONCE_KEY',        'PmZF9k^s/U eKe SSjYx7)?$ium/bg3+TRW@/$~1h3XV9nEV90%D%N&fTbdk&e[n');
define('AUTH_SALT',        'R@16%FBB<v]z~}s6Bf.W5avGH&maz+4m(nrbea+z?@N-^ MA;Y@_C:Qs[2vJ)&f^');
define('SECURE_AUTH_SALT', 'n)i3=z.GBl4gl1Sml5JtMwl9(,h2VU0`/~N#9}d%iSu}pE1EdH-|$8lb1pU2[v6?');
define('LOGGED_IN_SALT',   '_SQ$bM]GPUEkEW:Z+NdV3a<xCr=v(9D*df,prkcUH+bOotya, )<ob/8#t@WsJ|s');
define('NONCE_SALT',       'KD3|^||f<nP@rs-xWfX:fQtYz}xZ7l;`,PT,u>7J`S@4P]3YdBerbq#) PR&y>=]');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

