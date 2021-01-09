<?php
if ( ( !is_user_logged_in() ) ):
	wp_redirect( get_site_url().'/login/' );
	exit;
endif;  


/*Template Name: Mailing (Export) */ 
get_header(); ?>
<div class="page-title" style="background-image: url(<?php the_post_thumbnail_url('full'); ?>);">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php the_title(); ?></div>
		</div>
	</div>
</div>
<section class="profile-setting pad_tb_100">
	<div class="container_fluid px-5">
		
		<div class="row"> 
			<div class="col-md-12"> 
				<div class="btn-group" role="group" aria-label="Button group with nested dropdown"> 
				  <a href="<?php echo esc_url(home_url('/guest'));?>" type="button" class="btn btn-secondary">GUEST List</a>
				  <a href="<?php echo esc_url(home_url('/rsvp-seating'));?>" type="button" class="btn btn-secondary">RSVP + Seating</a>
				  <a  href="<?php echo esc_url(home_url('/rsvp-seating'));?>" type="button" class="btn btn-secondary">Seating (Export)</a>
				  <a href="#dataTableContent" type="button" class="btn btn-secondary">Mailing (Export)</a> 
				</div>
			</div>
		<p>
   
		</div> 
	</div>
	<div class="container_fluid px-5" id="dataTableContent">
		<div class="row"> 
			<div class="col-md-12">
				 <?php while(have_posts()): the_post(); the_content(); endwhile; ?>
			</div>
		</div> 
	</div>
</section>
   
<?php get_footer();