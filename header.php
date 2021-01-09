<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package madaboutwedding
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="theme-color" content="#434E28">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<script src="https://player.vimeo.com/api/player.js"></script>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZLTLX34CYG"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-ZLTLX34CYG');
	</script>
	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="header-container">
	<div class="header">
		<div class="container">
			<div class="row no-gutters justify-content-between align-items-center">
				<div class="logo">
					<a href="<?php echo get_site_url(); ?>">
						<img src="<?php echo get_theme_mod('header_logo'); ?>" alt="logo" width="175" height="96">
					</a>
				</div>
				<div class="header-profile ">
					<?php if ( is_user_logged_in() ){ ?>
					<div class="profile-drodpown">
						<div class="dropdown">
							<a href="javascript:;" data-toggle="dropdown">
								<!-- <div class="avatar">
									<?php //$user = wp_get_current_user();?>
									<img src="<?php //echo esc_url( get_avatar_url( $user->ID ) ); ?>" alt="avatar" width="40" height="40">
								</div> -->
								<?php $attachment_id = get_user_meta(get_current_user_id(),'wp_user_avatar',true); 	?>
								<?php if($attachment_id){ ?>
									<div class="avatar">
										<img src="<?php echo wp_get_attachment_url( $attachment_id ); ?>" alt="avatar" width="40" height="40">
									</div>
								<?php } ?>
								
								<?php $firstname = get_user_meta( get_current_user_id(), 'first_name', true ); ?>
								<div class="name"><?php echo $firstname; ?></div>
								<div class="arrow">
									<img src="<?php echo get_template_directory_uri() ?>/images/down-arrow.svg" alt="down" width="14" height="8" class="imgsvg">
								</div>
							</a>
							<div class="dropdown-menu">
								<ul>
									<li><a href="<?php echo home_url();?>/settings/">Settings</a></li>
									<li><a href="<?php echo wc_logout_url(); ?>">Logout</a></li>
								</ul>
							</div>
						</div>
					</div>
					<a href="<?php echo home_url();?>/lessons/your-foundation/" class="dashboard-link">Dashboard</a>
					<a href="<?php echo home_url();?>/budget" class="dashboard-link">Budget</a>
					<a href="<?php echo home_url();?>/guests" class="dashboard-link">Guests</a>
					<?php } else { ?>
					<a href="<?php echo home_url();?>/login/" class="login-link">Login</a>
					<?php } ?>					
				</div>
				<div class="menutoggle">					
					<div class="toggle-icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
<section class="mainmenu">
	<div class="container">
		<?php
		wp_nav_menu( array(
			'theme_location' => 'primary',
			'container' => false,
			'items_wrap' => '<ul>%3$s</ul>'
		) ); 
		?>
	</div>
</section>