<?php 
/*
* Template Name: Contact Page
*/
get_header();
?>
<div class="page-title" style="background-image: url('<?php the_post_thumbnail_url('full'); ?>');">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php the_title(); ?></div>
		</div>
	</div>
</div>
<section class="contact-us pad_tb_100">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-10 col-md-12 text-center">
				<?php while( have_posts() ) : the_post();
				the_content();
				endwhile; ?>
				<?php echo do_shortcode('[contact-form-7 id="62" title="Contact form"]'); ?>
			</div>
		</div>
	</div>
</section>
<?php get_footer();