<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package madaboutwedding
 */

get_header();
?>
<?php 
	$page_id = 315;
	$page_title = get_the_title( $page_id ); 
	$page_object = get_page( $page_id );
	$featured_img_url = get_the_post_thumbnail_url($page_object, 'full'); 
?>
<div class="page-title" style="background-image: url(<?php echo $featured_img_url; ?>);">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php echo $page_title; ?></div>
		</div>
	</div>
</div>
<section class="page-404 pad_tb_100">
	<div class="container">
		<div class="row no-gutters justify-content-center">
			<div class="col-lg-8 col-md-10 text-center">
				<?php echo $page_object->post_content; ?>
				<a href="<?php echo site_url(); ?>" class="btn-back-home"><img src="<?php echo get_template_directory_uri() ?>/images/back-arrow.svg" width="15" height="9" alt="back">Back to home page</a>
			</div>
		</div>
	</div>
</section>
<?php
get_footer();
