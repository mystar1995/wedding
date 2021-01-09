<?php 
/*Template Name: Login*/
get_header(); ?>
<div class="page-title" style="background-image: url(<?php the_post_thumbnail_url('full'); ?>);">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php the_title(); ?></div>
		</div>
	</div>
</div>
<section class="login-screen pad_tb_100">
	<div class="container">
		<div class="row no-gutters">
			<div class="login-wrapper">
				<?php 
				while ( have_posts() ) :
					the_post();
					the_content();
				endwhile;
				?>
			</div>
		</div>
	</div>
</section>
<?php get_footer();

