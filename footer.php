<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package madaboutwedding
 */

if ( !is_user_logged_in() && !is_page('login') ) { ?>
	<div class="subscribe">
		<div class="container">
			<div class="subscribe-wrap">
				<div class="row justify-content-between no-gutters align-items-center">
					<div class="text">Join Our Email List!</div>
					<div class="action">
						<a href="javascript:;" class="btn btn-md btn-white" data-toggle="modal" data-target="#subscribe">subscribe</a>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php } ?>
<footer>
	<div class="container">
		<div class="footer">
			<div class="footer-logo">
				<img src="<?php echo get_theme_mod('footer_logo'); ?>" alt="footer logo" width="175" height="96">
			</div>
			<div class="footer-link">
				<?php
					wp_nav_menu( array(
						'theme_location' => 'primary',
						'container' => false,
						'items_wrap' => '<ul>%3$s</ul>'
					) ); 
				?>
			</div>
			<div class="social-media">
				<?php if( get_theme_mod('fb_link') ) : ?>
					<a href="<?php echo get_theme_mod('fb_link'); ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/facebook.svg" class="imgsvg" alt="facebook" width="10" height="19"></a>
				<?php endif; ?>
				<?php if( get_theme_mod('twt_link') ) : ?>
					<a href="<?php echo get_theme_mod('twt_link'); ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/twitter.svg" class="imgsvg" alt="twitter" width="19" height="19"></a>
				<?php endif; ?>
				<?php if( get_theme_mod('insta_link') ) : ?>
					<a href="<?php echo get_theme_mod('insta_link'); ?>" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/instagram.svg" class="imgsvg" alt="instagram" width="19" height="19"></a>
				<?php endif; ?>
			</div>
		</div>
		<div class="copyright">
			<?php echo get_theme_mod('footer_bottom'); ?> <a href="<?php echo get_site_url(); ?>">madaboutweddings.com</a>
		</div>
	</div>
</footer>
<!-- subscribe modal -->
<div class="modal fade" id="subscribe">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<button type="button" class="close" data-dismiss="modal">
			<span aria-hidden="true"><img src="<?php echo get_template_directory_uri() ?>/images/modal-close.svg" alt="close" width="55" height="55"></span>
			</button>
			<div class="modal-body">
				<h2>Join Our Email List</h2>
				<h3>Join Our Mailing List to receive updates straight to your inbox! </h3>
				<h4>Enter your email below and we will let you know about all the exciting things</h4>
				<?php  echo do_shortcode( '[notify-subscribers]' );  ?>
			</div>
		</div>
	</div>
</div>
<?php wp_footer(); ?>

</body>
</html>
