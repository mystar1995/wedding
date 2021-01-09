<?php 
/*
***********************************
Program Custom Post Type
***********************************
*/
function lesson_init() {
// set up product labels
$labels = array(
	'name' => 'Lessons',
	'singular_name' => 'Lesson',
	'add_new' => 'Add New Lesson',
	'add_new_item' => 'Add New Lesson',
	'edit_item' => 'Edit Lesson',
	'new_item' => 'New Lesson',
	'all_items' => 'All Lessons',
	'view_item' => 'View Lesson',
	'search_items' => 'Search Lesson',
	'not_found' =>  'No Lessons Found',
	'not_found_in_trash' => 'No Lessons found in Trash', 
	'parent_item_colon' => '',
	'menu_name' => 'Lessons',
);

// register post type
$args = array(
	'labels' => $labels,
	'public' => true,
	'has_archive' => false,
	'show_ui' => true,
	'capability_type' => 'post',
	'hierarchical' => false,
	'query_var' => true,
	'rewrite' => array('slug' => 'lessons'),
	'query_var' => true,
		'supports' => array(
		'title',
		'editor',
		'custom-fields',
		'revisions',
		'thumbnail',
		)
	);	
	register_post_type( 'lessons', $args );

	// register taxonomy
	register_taxonomy('lessons_category', 'lessons', array('hierarchical' => true, 'label' => 'Category', 'query_var' => true, 'rewrite' => array( 'slug' => 'lessons-category' )));
}
add_action( 'init', 'lesson_init' );

/*
****************************************
 Define the wpcf7_posted_data callback
****************************************
*/
function madaboutweddings_wpcf7_posted_data( $array ) {
	//Message
	if( empty( $array["tell"] ) ){
		$array["tell"] = "-";
	}	
	return $array;
}
add_action( 'wpcf7_posted_data', 'madaboutweddings_wpcf7_posted_data', 10, 1 );

/*
***********************
Video information ajax
***********************
*/
add_action('wp_ajax_video_information', 'video_information');
add_action('wp_ajax_nopriv_video_information', 'video_information');
function video_information() {
	$msg = '';
    $user_id    = $_POST['userinfo'];
    $video_info = $_POST['videoinfo'];
	$post_id    = $_POST['postinfo'];
	$post_url   = $_POST['posturl'];

	// checking is username and password is blank or not
    if( $user_id != '' && $video_info != '' && $post_id != '' && $post_url != '' ){
        update_user_meta( $user_id, '"'.$post_id.'"_video_info', $video_info );
        update_user_meta( $user_id, '"'.$post_id.'"_post_info', $post_url );

        global $post;
		$post = get_post($post_id);
	    // Get next post id
	    $nextPostID = get_next_post()->ID;
	    // Get next post url
	    $msg = get_the_permalink($nextPostID);
    }
    echo json_encode($msg);
    wp_die();
}

