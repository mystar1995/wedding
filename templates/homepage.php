<?php
/*
* Template Name: Homepage
*/
get_header();
?>
<section class="banner home-banner">
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
			<?php $banner_image = get_field('banner_image');
				if( $banner_image ): ?>
				<div class="banner-thumb">
					<img src="<?php echo $banner_image['url']; ?>" width="1920" height="761" alt="<?php echo $banner_image['alt']; ?>">
				</div>
				<?php endif; ?>
				<div class="banner-text">
					<div class="container h-100">
						<div class="banner-description">
							<?php if( get_field('banner_heading') ): ?><div class="banner-title"><?php the_field('banner_heading') ?></div> <?php endif; ?>
							<?php if( get_field('banner_button') ):
							$button = get_field('banner_button'); ?>
								<div class="banner-action">
									<a href="<?php echo $button['url']; ?>" class="btn btn-md btn-white"><?php echo $button['title']; ?></a>
								</div>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="videos home-video pad_tb_100">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-md-6 mb-4 mb-md-0">
				<?php if( get_field('video_image') && get_field('video_url') ) :
				$video_bg = get_field('video_image');
				$video_url = get_field('video_url'); ?>
					<div class="thumbnail">
						<?php if( $video_bg ) : ?>
							<div class="thumb">
								<img src="<?php echo $video_bg['url']; ?>" alt="<?php echo $video_bg['alt']; ?>" width="702" height="590">
							</div>
						<?php endif; ?>
						<?php if( $video_url ) : ?>
							<div class="overlay">
								<a data-fancybox href="<?php the_field('video_url'); ?>">
									<img src="<?php echo get_template_directory_uri(); ?>/images/play-btn.svg" alt="play" width="100" height="100">
								</a>
							</div>
						<?php endif; ?>
					</div>
				<?php endif; ?>
			</div>
			<?php if( get_field('video_text') ): ?>
				<div class="col-md-6">
					<h2 class="box-title"><?php the_field('video_text'); ?></h2>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>
<?php/*
<section class="wedding-solution pad_tb_100">
	<div class="container">
		<?php if( get_field('heading') ): ?>
			<h2 class="block-title">
				<?php the_field('heading'); ?>
			</h2>
		<?php endif; ?>
		<?php if( get_field('small_description') ) : ?>
			<div class="description">
				<p><?php the_field('small_description'); ?></p>
			</div>
		<?php endif;
		$buy_btn = get_field('button');
		if( $buy_btn ) : ?>
			<div class="actions text-center">
				<a href="<?php echo $buy_btn['url'];  ?>" class="btn btn-md btn-white"><?php echo $buy_btn['title'];  ?></a>
			</div>
		<?php endif; ?>
	</div>
	<?php if( have_rows('designs') ) : ?>
		<div class="swiper-container">
			<div class="swiper-wrapper row justify-content-center">
				<?php $i= 1; while( have_rows('designs') ) : the_row(); ?>
					<div class="swiper-slide col-xl-4 col-lg-6 col-md-6">						<?php 						$design_link = get_sub_field('design_link');						?>						<a href="<?php echo $design_link; ?>">
						<div class="thumbnail">
							<?php $design_img = get_sub_field('design_image');
							if( $design_img ) : ?>
								<div class="thumb">
									<img src="<?php echo $design_img['url']; ?>" alt="<?php echo $design_img['alt']; ?>" width="620" height="501">
								</div>
							<?php endif; ?>
							<div class="overlay">
								<div class="text">
									<div class="bullet">0<?php echo $i; ?></div>
									<h3 class="box-title"><?php the_sub_field('design_name'); ?></h3>
									<p><?php the_sub_field('design_short_description'); ?></p>
								</div>
							</div>
						</div>						</a>
					</div>
				<?php $i++; endwhile; ?>
			</div>
		</div>
	<?php endif; ?>
</section>
*/?>

<section class="wedding-solution pad_tb_100">
	<div class="container">
		<h2 class="block-title">
			<?php the_field('heading'); ?>
		</h2>
		<div class="actions text-center">
			<a href="<?php the_permalink(155);?>" class="btn btn-md btn-white">Buy course</a>
		</div>
		<?php
			if( have_rows('designs') ):
			while( have_rows('designs') ) : the_row();
			$image = get_sub_field('design_image');
		?>
			<div class="row align-items-center align-items-lg-start align-items-xl-center">
				<div class="col-lg-6">
					<div class="thumbnail">
						<div class="thumb">
							<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" width="702" height="907">
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="description">
						<h2><?php the_sub_field( 'design_name' );?></h2>

						<div class="text">
							<?php
								if( have_rows('design_data') ):
								while( have_rows('design_data') ) : the_row();
							?>
								<h3><?php the_sub_field( 'title' );?></h3>
								<ul>
									<?php
										if( have_rows('design_content') ):
										while( have_rows('design_content') ) : the_row();
									?>
										<li><?php the_sub_field( 'title' );?></li>
									<?php endwhile; endif;?>
								</ul>
							<?php endwhile; endif;?>
						</div>
					</div>
				</div>
			</div>
		<?php endwhile; endif;?>
	</div>
</section>


<section class="meet-mindy pad_tb_100">
	<div class="container">
		<?php if(get_field('title')) : ?><h2 class="block-title"><?php the_field('title'); ?></h2> <?php endif; ?>
		<div class="row align-items-center">
			<div class="col-lg-6 mb-4 mb-lg-0">
				<div class="thumbnail">
					<div class="thumb">
						<img src="<?php the_post_thumbnail_url('full'); ?>" alt="meet-debbie-mindy" width="702" height="746">
					</div>
					<?php if( have_rows('about') ): ?>
						<div class="share d-flex">
							<?php while( have_rows('about') ): the_row(); ?>
								<div class="col-md-6 mb-3 mb-md-0">
									<label><?php the_sub_field('full_name'); ?></label>
									<?php $fb_link = get_sub_field('facebook_link');
									 	  $twt_link = get_sub_field('twitter_link');
									 	  $insta_link = get_sub_field('instagram_link'); ?>
									<?php if( $fb_link ): ?>
										<a href="<?php echo $fb_link; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/facebook.svg" class="imgsvg" alt="facebook" width="10" height="19"></a>
									<?php endif; ?>
									<?php if( $twt_link ): ?>
										<a href="<?php echo $twt_link; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/twitter.svg" class="imgsvg" alt="twitter" width="19" height="19"></a>
									<?php endif; ?>
									<?php if( $insta_link ): ?>
										<a href="<?php echo $insta_link; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/instagram.svg" class="imgsvg" alt="instagram" width="19" height="19"></a>
									<?php endif; ?>
								</div>
							<?php endwhile; ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
			<?php if( get_field('description') ): ?>
				<div class="col-lg-6">
					<div class="description">
						<?php the_field('description'); ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>
<section class="home-testimonial pad_tb_100">
	<div class="container">
		<div class="block-title">
			Testimonials
		</div>
		<?php $testimonials_posts = new WP_Query( array('post_type'=>'testimonials','posts_per_page'=>'-1','orderby' => 'menu_order') );
		if( $testimonials_posts -> have_posts() ):	 ?>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<?php while( $testimonials_posts -> have_posts() ) : $testimonials_posts->the_post(); ?>
					<div class="swiper-slide">
						<div class="slide">
							<div class="thumb">
								<img src="<?php the_post_thumbnail_url(); ?>" alt="testimonial" width="200" height="200">
							</div>
							<div class="description">
								<?php echo wp_trim_words( get_the_content(), 20 ); ?>
								<div class="name"><?php the_title(); ?></div>
							</div>
						</div>
					</div>
				<?php endwhile; ?>
			</div>
    		<div class="swiper-pagination"></div>
		</div>
		<div class="swiper-button-next"></div>
    	<div class="swiper-button-prev"></div>
    	<?php endif;
    	wp_reset_postdata(); ?>
	</div>
</section>
<?php get_footer();