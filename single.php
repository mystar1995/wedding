<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package madaboutwedding
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
<section class="blog-detail">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-12">
				<article class="post-item">
					<div class="post-thumb">
						<div class="post-date">
							<div class="date"><?php echo get_the_date( 'j' ); ?></div>
							<div class="month"><?php echo get_the_date( 'F' ); ?></div>
						</div>
						<div class="thumb">
							<img src="<?php the_post_thumbnail_url(); ?>" alt="blog" width="786" height="370">
						</div>
					</div>
					<div class="post-meta">
						<div class="post-tag">
							<div class="icon">
								<img src="<?php echo get_template_directory_uri(); ?>/images/tags.svg" alt="tag" class="imgsvg" width="18" height="14">
							</div>
							<div class="tags">
								<?php
									 $categories = get_categories();
									foreach ($categories as $cat) {
									   $category_link = get_category_link($cat->cat_ID);
									   echo '<a href="'.esc_url( $category_link ).'" title="'.esc_attr($cat->name).'">'.$cat->name.'</a>';
									} ?>		
							</div>
						</div>
						<div class="post-author">
							<div class="icon">
								<img src="<?php echo get_template_directory_uri(); ?>/images/user.svg" alt="user" class="imgsvg" width="16" height="15">
							</div>
							<div class="name">Lorem Ipsum</div>
						</div>
						<div class="post-comments">
							<div class="icon">
								<img src="<?php echo get_template_directory_uri(); ?>/images/comments.svg" alt="comments" class="imgsvg" width="17" height="14">
							</div>
							Comments: <span class="number">4</span>
						</div>
					</div>
					<div class="post-content">
						<?php while( have_posts() ) : the_post();
						the_content();
						endwhile; ?>
					</div>
				</article>
				<div class="post-share">
					<label>Share</label>
					<a href="https://www.facebook.com/sharer.php?u=<?php the_title(); ?>">
						<img src="<?php echo get_template_directory_uri(); ?>/images/facebook.svg" class="imgsvg" alt="facebook" width="18" height="18">
					</a>
					<a href="https://twitter.com/share?url=<?php the_title(); ?>">
						<img src="<?php echo get_template_directory_uri(); ?>/images/twitter.svg" class="imgsvg" alt="twitter" width="18" height="18">
					</a>
					<a href="http://instagram.com/sharer.php?u=<?php the_title(); ?>">
						<img src="<?php echo get_template_directory_uri(); ?>/images/instagram.svg" class="imgsvg" alt="instagram" width="18" height="18">
					</a>
				</div>
				<div id="comments" class="comments-area">
					<h2 class="comments-title">Comments</h2>
					<ol class="comment-list">
						<li class="comment">
							<div class="comment-body">
								<div class="comment-author vcard">
									<img src="images/blog-comment-avatar.png" align="blog-comment-avatar" width="80" height="80">
								</div>
								<div class="comment-description">
									<div class="author-name">John Doe</div>
									<div class="comment-date">July 21, 2020</div>
									<div class="comment-text">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
									</div>
									<div class="reply">
										<a class="comment-reply-link" href="#">Reply</a>
									</div>
								</div>
							</div>
							<ol class="children">
								<li class="comment">
									<div class="comment-body">
										<div class="comment-author vcard">
											<img src="images/blog-comment-avatar.png" align="blog-comment-avatar" width="80" height="80">
										</div>
										<div class="comment-description">
											<div class="author-name">John Doe</div>
											<div class="comment-date">July 21, 2020</div>
											<div class="comment-text">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
											</div>
											<div class="reply">
												<a class="comment-reply-link" href="#">Reply</a>
											</div>
										</div>
									</div>
								</li>
							</ol>
						</li>
						<li class="comment">
							<div class="comment-body">
								<div class="comment-author vcard">
									<img src="images/blog-comment-avatar.png" align="blog-comment-avatar" width="80" height="80">
								</div>
								<div class="comment-description">
									<div class="author-name">John Doe</div>
									<div class="comment-date">July 21, 2020</div>
									<div class="comment-text">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
									</div>
									<div class="reply">
										<a class="comment-reply-link" href="#">Reply</a>
									</div>
								</div>
							</div>
						</li>
					</ol>
				</div>
				<div id="respond" class="comment-respond">
					<?php comments_template(); ?>
				
			</div>
			<div class="col-lg-4 col-12">
				<div class="widget-wrapper">
					<div class="blog-search">
						<div class="input-group">
							<label for="bsearch">Search</label>
							<input type="text" class="form-control" placeholder="Search" value="" name="bsearch" id="bsearch">
							<div class="input-group-append">
								<button class="input-group-text">
									<img src="images/magnifying-glass.svg" width="20" height="20" class="imgsvg" alt="search">
								</button>
							</div>
						</div>
					</div>
					<div class="post-categories">
						<h2 class="widget-title">Categories</h2>
						<ul>
							<?php	wp_list_categories(['show_count'=> true,'title_li'=>false,]);		?>
						</ul>
					</div>
					<div class="post-latest">
						<h2 class="widget-title">Latest Post</h2>
						<?php if( have_posts() ) : ?>
							<ul>
								<?php while( have_posts() ) : the_post(); ?>
									<li>
										<div class="date"><?php echo get_the_date('j M Y'); ?></div>
										<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									</li>
								<?php endwhile; ?>
							</ul>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php
get_footer();
