<?php 

/*

* Template Name: Testimonial Page

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

<?php $testimonial_posts = new WP_Query( array('post_type'=>'testimonials','posts_per_page'=>'-1','order'=>'ASC') ); 

if( $testimonial_posts->have_posts() ) : ?>

<section class="testimonial-list">

	<div class="container">

		<ul>

			<?php while( $testimonial_posts->have_posts() ) : $testimonial_posts->the_post(); ?>

				<li>

					<div class="thumb">

						<img src="<?php the_post_thumbnail_url('full'); ?>" alt="testimonial" width="200" height="200">

					</div>

					<div class="description">

						<?php the_content(); ?>

						<div class="name"><?php the_title(); ?></div>

					</div>

				</li>

			<?php endwhile; ?>

		</ul>

		<ul class="pagination">
			<?php if($curpage > 1){ ?>
			<li class="page-item"><a class="page-link page-prev" href="<?php echo get_pagenum_link($i); ?>">Previous</a></li>
			<?php } ?>
			<?php 
				for($i=1;$i<=$the_query->max_num_pages;$i++){
					if($the_query->max_num_pages > 1){
			?>
			<li class="page-item <?php echo $i == $curpage ? 'active ' : ''; ?>"><a class="page-link" href="<?php echo get_pagenum_link($i); ?>"><?php echo $i; ?></a></li>
			<?php
					}
				} 
			?>
			<?php if($curpage != $the_query->max_num_pages){ ?>
			<li class="page-item"><a class="page-link page-next" href="<?php echo get_pagenum_link(($curpage+1 <= $the_query->max_num_pages ? $curpage+1 : $the_query->max_num_pages)); ?>">Next</a></li>
			<?php } ?>
		</ul>

	</div>

</section>

<?php endif;

wp_reset_postdata(); ?>

<?php get_footer();