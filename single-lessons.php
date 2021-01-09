<?php
/*if ( !is_user_logged_in() ) :
	wp_redirect( get_site_url() );
	exit;
endif;*/

get_header();
$user_id = get_current_user_id();
$post_url = get_permalink();
$post_id = get_the_id();?>

<div class="page-title" style="background-image: url(<?php echo site_url();?>/wp-content/uploads/2020/11/home-banner-1.jpg);">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1">
				Learn From The Best
			</div>
		</div>
	</div>
</div>
<section class="services-glossary pad_tb_100">
	<div class="container">
		<div class="row no-gutters">
			<div class="left mb-4 mb-lg-0">
				<div class="lesson-wrap">
					<h2 class="lesson-title">Lessons</h2>
					<?php
					$terms = get_terms(
					    array(
					        'taxonomy'   => 'lessons_category',
					        'hide_empty' => true,
					        'order' => 'ASC',
					    )
					);
					// Check if any term exists
					if ( ! empty( $terms ) && is_array( $terms ) ) {
				    foreach ( $terms as $term ) { ?>
				        <div class="lesson-video-list">
							<h3 class="video-title"><?php echo $term->name; ?></h3>
							<ul>
								<?php $i = 1;
									$args = array(
							          	'post_type' => 'lessons',
							          	'order' => 'ASC',
							          	'posts_per_page' => -1,
							          	'tax_query' => array(
							            	array(
							                	'taxonomy' => 'lessons_category',
							                	'field'    => 'slug',
							                	'terms'    => $term->slug,
							            	),
							            )
							        );

							        $loop = new WP_Query($args);
							        while( $loop->have_posts()):$loop->the_post();

									$video_info = get_user_meta( $user_id, '"'.$id.'"_video_info', true );
									$post_info = get_user_meta( $user_id, '"'.$id.'"_post_info', true );

									if( $post_url == get_permalink() ) { ?>
										<li class="watch">
											<a href="<?php the_permalink();?>" class="video-code" data-video-title="482950384"><?php the_field( 'sidebar_title' );?></a>
										</li>
									<?php } elseif( $video_info == 'complete' && $post_info == get_permalink() ) { ?>
										<li class="completed">
											<a href="<?php the_permalink();?>" class="video-code" data-video-title="482950384"><?php the_field( 'sidebar_title' );?></a>
										</li>
									<?php } else { ?>
										<li class="normal">
											<a href="<?php the_permalink();?>" class="video-code" data-video-title="482950384"><?php the_field( 'sidebar_title' );?></a>
										</li>
									<?php } ?>

								<?php $i++; endwhile; wp_reset_postdata(); ?>
							</ul>
						</div>
				    <?php } } ?>
				</div>
			</div>

			<div class="right">
				<div class="services-video-title">
					<?php $terms = get_the_terms( $post->ID , 'lessons_category' );
						foreach ( $terms as $term ) {
							echo $term->name;
						}
					?>
				</div>
				<div class="services-video-sub-title"><?php the_title();?></div>
				<div class="services-video-description mb-4">
					<?php the_content();?>
				</div>
				<div class="lesson-video-iframe">
					<?php the_field( 'video_link' ); ?>
				</div>
				<?php $file = get_field( 'download_file' );?>
				<div class="lession-video-download">
					<a href="<?php echo $file['url']; ?>" class="btn-download">
						<span class="icon">
							<img src="<?php echo get_template_directory_uri();?>/images/download-video.svg" alt="download" width="20" height="20">
						</span>
						<span class="text">Download MAD Organizer</span>
					</a>
					<?php if( is_single(250) ) { ?>
						<a href="https://docs.google.com/spreadsheets/d/1d9Uh0QwqIIEn8wymDDuhmaPWfVsJX3sG2e2YrP2oGEA/copy" target="_blank" class="btn-download">
							<span class="text">Create Budget & Guest List</span>
						</a>
					<?php } ?>
				</div>
			</div>

			<input type="hidden" name="post-data" id="post-info" value="<?php echo $post_id;?>">
			<input type="hidden" name="post-url"  id="post-url" value="<?php echo $post_url;?>">
			<input type="hidden" name="user-data" id="user-id" value="<?php echo $user_id;?>">
		</div>
	</div>
</section>
<?php get_footer();