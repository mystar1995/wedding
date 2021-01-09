<?php

/*

* Template Name: Programs Page

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

<section class="videos about-video pad_tb_100">

	<div class="container">

		<div class="row align-items-start">
			<?php $video_first_paragraph = get_field('video_first_paragraph');
			if($video_first_paragraph){	
			?>
			<div class="video_first_text">
				<?php echo $video_first_paragraph; ?>
			</div>
			<?php } ?>
			<div class="col-lg-6 mb-4 mb-lg-0">

				<div class="thumbnail">

					<?php 

					$program_video_image = get_field('program_video_image');

					$program_video_url = get_field('program_video_url');

					?>

					<div class="thumb">

						<img src="<?php echo $program_video_image; ?>" alt="video" width="702" height="590">

					</div>

					<div class="overlay">

						<a data-fancybox href="<?php echo $program_video_url; ?>">

							<img src="<?php echo get_template_directory_uri() ?>/images/play-btn.svg" alt="play" width="100" height="100">

						</a>

					</div>

				</div>

			</div>

			<div class="col-lg-6">

				<div class="packages-list">

					<?php $products = new WP_Query( array( "post_type" => "product", "order" => "ASC", "posts_per_page" => 3 ) ); 

					while( $products->have_posts()):$products->the_post();

					$product = wc_get_product( get_the_ID() );

					$sale_price = $product->get_sale_price();

					$quntity = $product->get_stock_quantity();
					$id = $product->get_id();
					if( $id == 131 && $quntity == 0 ){
						exit();
					}
					?>

					<div class="card">

						<div class="card-body">

							<?php if($sale_price) { ?>

							<div class="card-badge">Limited offer</div>

							<?php } ?>

							<div class="row no-gutters justify-content-between align-items-center">

								<div class="card-description">

									<div class="card-title"><?php the_title();?></div>

									<div class="package-price">

										<div class="price-wrap">

											<div class="price"><?php echo $product->get_price_html(); ?></div>

										</div>

									</div>

									<div class="package-detail">

										<?php the_content();?>

									</div>

								</div>

								<div class="card-buy">

									<a href="<?php echo site_url();?>/checkout/?add-to-cart=<?php echo get_the_ID();?>" class="buy-btn">Buy</a>

								</div>

							</div>

						</div>

					</div>

					<?php endwhile; wp_reset_postdata();?>

				</div>

			</div>
			<?php $video_bottom_text = get_field('video_bottom_text');
				if( $video_bottom_text ){
			?>
			<div class="video_bottom_text">
				<?php echo $video_bottom_text; ?>
			</div>
			<?php } ?>
		</div>

	</div>

</section>

<?php if( have_rows('program_list') ):  $i=0; ?>

<section class="services-list pad_tb_100">

	<div class="container">

		<?php while( have_rows('program_list') ) : the_row(); 

		$i++;

		$program_title = get_sub_field('program_title');

		$program_description = get_sub_field('program_description');

		$program_image = get_sub_field('program_image');
		
		if($i == 1){
			$service_id = 'services-foundation';
		} else if($i == 2){
			$service_id = 'services-landing';
		}else{
			$service_id = 'services-memorable';
		}

		?>

		<div class="row align-items-center" id="<?php echo $service_id; ?>">

			<div class="col-lg-6">

				<div class="thumbnail">

					<div class="thumb">

						<img src="<?php echo $program_image; ?>" alt="services" width="702" height="626">

					</div>

					<div class="overlay">

						<!-- <a data-fancybox href="https://player.vimeo.com/video/482884777">

							<img src="images/play-btn.svg" alt="play" width="100" height="100">

						</a> -->

					</div>

				</div>

			</div>

			<div class="col-lg-6">

				<div class="description">

					<div class="number">0<?php echo $i; ?></div>

					<div class="block-title"><?php echo $program_title; ?></div>

					<p><?php echo $program_description; ?></p>

<!-- 					<div class="actions">

						<a href="#">Buy course</a>

					</div> -->

				</div>

			</div>

		</div>

		<?php endwhile; ?>

	</div>

</section>

<?php endif; ?>

<?php $testimonial_posts = new WP_Query( array('post_type'=>'testimonials','posts_per_page'=>'-1','order'=>'DESC') ); 

	if( $testimonial_posts->have_posts() ) : ?>

<section class="home-testimonial pad_tb_100">

	<div class="container">

		<?php $testimonial_title = get_field('testimonial_title'); ?>

		<div class="block-title">

			<?php echo $testimonial_title; ?>

		</div>

		<div class="swiper-container">

			<div class="swiper-wrapper">

				<?php while( $testimonial_posts->have_posts() ) : $testimonial_posts->the_post(); ?>

				<div class="swiper-slide">

					<div class="slide">

						<div class="thumb">

							<img src="<?php the_post_thumbnail_url('full'); ?>" alt="testimonial" width="200" height="200">

						</div>

						<div class="description">

							<?php the_content(); ?>

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

	</div>

</section>

<?php endif;

wp_reset_postdata(); ?>

<?php get_footer();