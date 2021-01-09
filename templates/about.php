<?php
/*
* Template Name: About Page
*/
get_header();
?>
<div class="page-title" style="background-image: url(<?php the_post_thumbnail_url('full'); ?>);">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php the_title(); ?></div>
		</div>
	</div>
</div>
<section class="how-it-all-started pad_tb_100">
	<div class="container text-center">
		<?php while( have_posts() ) : the_post();
		the_content();
		endwhile; ?>
	</div>
</section>
<?php if(have_rows('team_section')) : ?>
<section class="deggie-mindy bg pad_tb_100">
	<div class="container">
		<?php while( have_rows('team_section') ) : the_row(); ?>
		<div class="inner-section">
			<div class="row">
				<?php $team_img = get_sub_field('image');
				if( $team_img ) : ?>
					<div class="col-lg-6 mb-4 mb-lg-0">
						<div class="img-box text-center">
							<img src="<?php echo $team_img['url']; ?>" alt="<?php echo $team_img['alt']; ?>">
						</div>
					</div>
				<?php endif; ?>
				<div class="col-lg-6 mb-4 mb-lg-0">
					<div class="ctn-box">
						<?php if( get_sub_field('name') ): ?><h2 class="box-title"><?php the_sub_field('name') ?></h2> <?php endif; ?>
						<?php if( get_sub_field('designation') ): ?><span class="designation"><?php the_sub_field('designation'); ?></span><?php endif; ?>
						<?php the_sub_field('description'); ?>
						<ul class="social">
							<?php $fb_link = get_sub_field('facebook_link');
							$twt_link = get_sub_field('twitter_url'); 
							$insta_link = get_sub_field('instagram_url');
							if( $fb_link ): ?>
								<li><a href="<?php echo $fb_link; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/facebook.svg" class="imgsvg" alt="facebook" width="19" height="19"></a></li>
							<?php endif; ?>
							<?php if( $twt_link ): ?>
								<li><a href="<?php echo $twt_link; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/twitter.svg" class="imgsvg" alt="twitter" width="19" height="19"></a></li>
							<?php endif; ?>
							<?php if( $insta_link ): ?>
								<li><a href="<?php echo $insta_link; ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/instagram.svg" class="imgsvg" alt="instagram" width="19" height="19"></a></li>
							<?php endif; ?>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<?php endwhile; ?>
	</div>
</section>
<section class="videos about-video pad_tb_100">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-md-6 mb-4 mb-md-0">
				<div class="thumbnail">
					<?php if( get_field('video_image') ):
					$video_img = get_field('video_image'); ?>
					<div class="thumb">
						<img src="<?php echo $video_img['url'];  ?>" alt="<?php echo $video_img['alt'];  ?>" width="702" height="590">
					</div>
					<?php endif; ?>
					<?php if( get_field('video_url')): ?>
						<div class="overlay">
							<a data-fancybox href="<?php the_field('video_url'); ?>">
								<img src="<?php echo get_template_directory_uri(); ?>/images/play-btn.svg" alt="play" width="100" height="100">
							</a>
						</div>
					<?php endif; ?>
				</div>
			</div>
			<div class="col-md-6">
				<?php if( get_field('video_title') ): ?><h2 class="box-title">Learn from the Best</h2> <?php endif; ?>
				<?php if( get_field('button') ): 
				$btn = get_field('button'); ?>
					<a href="<?php echo $btn['url']; ?>" class="btn-buy"><?php echo $btn['title']; ?></a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
<?php endif; ?>
<?php get_footer();