<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 */

get_header(); ?>
<div class="page-title" style="background-image: url(<?php the_post_thumbnail_url('full'); ?>);">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php the_title(); ?></div>
		</div>
	</div>
</div>
<?php if( is_page('privacy-policy') || is_page('terms-of-use') ) { ?>
	<section class="cms-content pad_tb_100">	
<?php } else { ?>
	<section class="how-it-all-started pad_tb_100">	
<?php } ?>
	<?php if( is_page('privacy-policy') || is_page('terms-of-use') ) { ?>	
		<div class="container">	
	<?php } else {  ?>
		<div class="container text-center">	
	<?php } ?>
		<?php while( have_posts() ) : the_post();
		the_content();
		endwhile; ?>
	</div>
</section>
<?php get_footer();
