<?php
/**
 * madaboutwedding functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package madaboutwedding
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'madaboutwedding_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function madaboutwedding_setup() {

		// Woocommerce supported to the theme
		add_theme_support( 'woocommerce' );
		//add_theme_support( 'wc-product-gallery-zoom' );
	    add_theme_support( 'wc-product-gallery-lightbox' );
	    add_theme_support( 'wc-product-gallery-slider' );

		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on madaboutwedding, use a find and replace
		 * to change 'madaboutwedding' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'madaboutwedding', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );


		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'madaboutwedding_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );
}
endif;
add_action( 'after_setup_theme', 'madaboutwedding_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function madaboutwedding_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'madaboutwedding_content_width', 640 );

}
add_action( 'after_setup_theme', 'madaboutwedding_content_width', 0 );

function select_rank(){
	global $wpdb;
	$data1 = $_POST['data1'];
	$data2 = $_POST['data2'];
	$id = $wpdb->get_results('Select * from wp_wpdatatable_1 where lastname = "' . $data2 . '"', 'ARRAY_A')[0]["wdt_ID"];
	$wpdb->query('Update  wp_wpdatatable_1 set rank = "'.$data1.'" where wdt_ID = ' .$id);
	$wpdb->query('Update  wp_wpdatatable_1 set ranking = "<select><option>'.$data1.'</option></select>" where wdt_ID = ' .$id);
	//var_dump('Update wp_wpdatatable_1 set rank = "'.$data1.'" where wdt_ID = ' .$id);
	wp_die();
}
function get_data(){
	global $wpdb;
	$send = $_POST['data'];
	
	$where = array();

	foreach ($send as $key => $value) {
		array_push($where, 'lastname = "' . $value . '"');
	}

	$result = $wpdb->get_results("Select * from wp_wpdatatable_1 where " . join(' or ',$where),'ARRAY_A');

	$senddata = array();
	foreach ($result as $key => $value) {
		$senddata[$value['lastname']] = $value['rank'];
	}

	echo json_encode($senddata);
	wp_die();
}

add_action( 'wp_ajax_rank',  'select_rank');
add_action( 'wp_ajax_get_data',  'get_data');
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function madaboutwedding_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'madaboutwedding' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'madaboutwedding' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'madaboutwedding_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function madaboutwedding_scripts() {
	$rand = rand(0,99);
	// Theme stylesheet.
	wp_enqueue_style( 'madaboutwedding-typekit', 'https://use.typekit.net/hej1ttu.css' );
	wp_enqueue_style( 'madaboutwedding-bootstrap', get_template_directory_uri().'/css/bootstrap.min.css' );
	wp_enqueue_style( 'madaboutwedding-fancybox', get_template_directory_uri().'/css/jquery.fancybox.min.css' );
	//wp_enqueue_style( 'madaboutwedding-swiper-bundle', get_template_directory_uri().'/css/swiper-bundle.min.css' );
	wp_enqueue_style( 'madaboutwedding-style', get_template_directory_uri().'/css/style.css',array(),$rand);
	wp_enqueue_style( 'madaboutwedding-media', get_template_directory_uri().'/css/media.css',array(),$rand);
	wp_enqueue_style( 'new-style-media', get_template_directory_uri().'/css/new-style.css',array(),$rand);
	//wp_enqueue_script( 'rhinelandercollision-mainscript', get_template_directory_uri().'/js/jquery-3.3.1.min.js','','',true);

	wp_enqueue_script( 'bundle.min-js', get_template_directory_uri().'/js/bootstrap.bundle.min.js',array('jquery'),'',true);
	wp_enqueue_script( 'fancybox.min-js', get_template_directory_uri().'/js/jquery.fancybox.min.js', array('bundle.min-js'),'',true);
	wp_enqueue_script( 'slick.min-js', get_template_directory_uri().'/js/slick.min.js', array('bundle.min-js'),'',true);
	//wp_enqueue_script( 'swiper-bundle.min-js', get_template_directory_uri().'/js/swiper-bundle.min.js',array('slick.min-js'),'',true);
	wp_enqueue_script( 'custom-js', get_template_directory_uri().'/js/custom.js','','',true);
	wp_enqueue_script( 'developer', get_template_directory_uri().'/js/developer.js','',$rand,true);
	wp_enqueue_script( 'jquery.validate', get_template_directory_uri() . '/js/jquery.validate.js','', $rand, true );
	wp_localize_script( 'developer', 'ajax_path', array( 'ajax_url' => admin_url( 'admin-ajax.php' ),
	'site_url' => get_site_url() ) );
	
	// wp_localize_script( 'big_law_titans-settingscript', 'object',
 //        array( 
 //            'siteurl' => site_url(),
 //        )
 //    );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
	    wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'madaboutwedding_scripts' );


/**
 * Woocmmerce related functions.
 */
require get_parent_theme_file_path( '/inc/woocommerce-function.php' );

/**
 * Woocmmerce related functions.
 */
require get_parent_theme_file_path( '/inc/custom-function.php' );


/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
function add_file_types_to_uploads($file_types){
$new_filetypes = array();
$new_filetypes['svg'] = 'image/svg+xml';
$file_types = array_merge($file_types, $new_filetypes );
return $file_types;
}
add_filter('upload_mimes', 'add_file_types_to_uploads');

//header logo	
function madaboutwedding_header_logo_customizer($wp_customize){
 //adding section in wordpress customizer   
	$wp_customize->add_section('header_section', array(
	  'title'          => 'Header Logo'
	 ));
	 
	$wp_customize->add_setting('header_logo');
	$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize,'header_logo',array(
	 'label'      => __('Header Logo', 'madaboutwedding'),
	 'width'       => 250,
	 'height'      => 250,
	 'flex-width'  => true,
	 'section'    => 'header_section',
	 'settings'   => 'header_logo',
	 )));
}
add_action('customize_register', 'madaboutwedding_header_logo_customizer');

function madaboutwedding_theme_menu() {
    register_nav_menu( 'primary', 'Main Navigation Menu' );
    register_nav_menu( 'footer', 'Footer Menu' );
  	register_nav_menu( 'footebottom', 'Footer Bottom Menu' );
}
add_action( 'init', 'madaboutwedding_theme_menu' );

//Footer Section
function madaboutwedding_footer_customizer($wp_customize){
 //adding section in wordpress customizer   
 $wp_customize->add_section('footer_section', array(
  'title'          => 'Footer Section'
 ));
 $wp_customize->add_setting('footer_logo');
	$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize,'footer_logo',array(
	 'label'      => __('Footer Logo', 'madaboutwedding'),
	 'width'       => 250,
	 'height'      => 250,
	 'flex-width'  => true,
	 'section'    => 'footer_section',
	 'settings'   => 'footer_logo',
	 )));

	$wp_customize->add_setting('fb_link', array(
	 'default'        => '',
	 ));
	$wp_customize->add_control('fb_link', array(
	 'label'   => 'Facebook Link',
	  'section' => 'footer_section',
	 'type'    => 'text',
	 'settings'   => 'fb_link'
	));


	//adding setting for top header email  text  area
	$wp_customize->add_setting('twt_link', array(
	 'default'        => '',
	 ));
	$wp_customize->add_control('twt_link', array(
	 'label'   => 'Twitter Link',
	  'section' => 'footer_section',
	 'type'    => 'text',
	 'settings'   => 'twt_link'
	));

	$wp_customize->add_setting('insta_link', array(
	 'default'        => '',
	 ));
	$wp_customize->add_control('insta_link', array(
	 'label'   => 'Instagram Link',
	  'section' => 'footer_section',
	 'type'    => 'text',
	 'settings'   => 'insta_link'
	));
}
add_action('customize_register', 'madaboutwedding_footer_customizer');

//Footer Bottom
function madaboutwedding_footer_bottom_customizer($wp_customize){
 //adding section in wordpress customizer   
$wp_customize->add_section('footer_settings_section', array(
  'title'          => 'Footer Bottom'
 ));
//adding setting for footer text area
$wp_customize->add_setting('footer_bottom', array(
 'default'        => 'Copyright@ 2018',
 ));
$wp_customize->add_control('footer_bottom', array(
 'label'   => 'Copyright Section',
  'section' => 'footer_settings_section',
 'type'    => 'textarea',
 'settings'   => 'footer_bottom'
));

}
add_action('customize_register', 'madaboutwedding_footer_bottom_customizer');

/* Comment Template */
function madaboutwedding_comment($comment, $args, $depth) {
    $GLOBALS['comment'] = $comment; ?>
    <li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
	    <div id="comment-<?php comment_ID(); ?>" class="comment">
	       	<div class="comment-body">
				<div class="comment-author vcard">
						<?php echo get_avatar($comment,$size='70'); ?>
				</div>
	            <div class="comment-author-right">
	            	
	            	<?php printf(__('<cite class="fn">%s</cite>'), get_comment_author()) ?>
	            	<div class="comment-meta commentmetadata">
							<a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>">
							<?php  echo get_the_date(); ?></a>
					</div>
		            <div class="comment-desc">
			            <?php if ($comment->comment_approved == '0') : ?>
			            <em><?php _e('Your comment is awaiting moderation.') ?></em>
			            <?php endif; ?>
			            <?php comment_text() ?>
		        	</div>
		        	<?php if($args['max_depth']!=$depth) { ?>
	                    <div class="reply">
	                        <?php comment_reply_link(array_merge($args, array('depth' => $depth, 'max_depth' => $args['max_depth'],'reply_text'=>'<span>Reply</span>'))) ?>
	                    </div>
	                <?php } ?>
	        	</div>
	    	</div>
	    </div>
<?php }

function cf7_footer_script(){ 
 
//if page name is contact.
if ( is_page('contact-us')) {?>
  
    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            location = 'https://madaboutweddings.com/thank-you/';
        }, false );
    </script>
  
<?php } 
     
}
add_action('wp_footer', 'cf7_footer_script');

function wc_login_redirect_custom( $redirect, $user ) {
	if ( wc_user_has_role( $user, 'customer' ) || in_array( 'staff', $user->roles ) ) {
		$redirect_page_id = url_to_postid( $redirect );
		$checkout_page_id = wc_get_page_id( 'checkout' );

		if( $redirect_page_id == $checkout_page_id ) {
			return $redirect;
		}
		$redirect_page = home_url().'/lessons/your-foundation/';
		return $redirect_page;
	} else {
		$redirect_page = home_url();
		return $redirect_page;
	}
}

add_filter( 'woocommerce_login_redirect', 'wc_login_redirect_custom', 9999, 2 );

add_action('wp_ajax_profile_change_password', 'profile_change_password' );
add_action('wp_ajax_nopriv_profile_change_password', 'profile_change_password' );

function profile_change_password() {
       
    global $current_user;
   
    if(isset($_POST['new_password'])) {
       
        //Sanitize received password
        $password = sanitize_text_field($_POST['new_password']);

        // Define arguments that will be passed to the wp_update_user()
        $userdata = array(
            'ID'        =>  $current_user->ID,
            'user_pass' =>  $password // Wordpress automatically applies the wp_hash_password() function to the user_pass field.
        ); 
        $user_id = wp_update_user($userdata);
      
        if($user_id){         
            echo 'success';
        } else {
            echo 'error';
        }  
    }
    // Always exit to avoid further execution
    exit();
}

add_role(
	'staff',
	__( 'Staff' ),
	array(
	'read'         => true,  // true allows this capability
	'edit_posts'   => true,
	'delete_posts' => false
	)
);

function user_disable_admin_bar() {
   if (current_user_can('administrator')) {
     // user can view admin bar
     show_admin_bar(true);
   } else {
     // hide admin bar
     show_admin_bar(false);
   }
}
add_action('after_setup_theme', 'user_disable_admin_bar');