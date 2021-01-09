<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package madaboutwedding
 */

get_header();
?>
<div class="page-title" style="background-image: url('<?php the_post_thumbnail_url('full'); ?>');">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php single_cat_title(); ?></div>
		</div>
	</div>
</div>
<section class="blog-list">
	<div class="container">
		<div class="row">
			<?php 
				$qobj = get_queried_object();
				global $paged;
				$curpage = $paged ? $paged : 1;
				$args = array(
				'post_type'        => 'post',
				'paged' => $paged,
				'tax_query' => array(
					array(
					  'taxonomy' => $qobj->taxonomy,
					  'field' => 'id',
					  'terms' => $qobj->term_id,
					)
				  )
				);
				$the_query = new WP_Query( $args );
			?>
			<?php if( $the_query->have_posts() ) : ?>
			<div class="col-lg-8 col-12">
				<?php while( $the_query->have_posts() ) : $the_query->the_post(); ?>
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
								<div class="name"><?php echo get_the_author(); ?></div>
							</div>
							<div class="post-comments">
								<div class="icon">
									<img src="<?php echo get_template_directory_uri(); ?>/images/comments.svg" alt="comments" class="imgsvg" width="17" height="14">
								</div>
								Comments: <span class="number">4</span>
							</div>
						</div>
						<div class="post-content">
							<h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							<div class="post-description">
								<p><?php the_excerpt(); ?></p>
							</div>
							<div class="post-action">
								<a href="<?php the_permalink(); ?>" class="post-more">Read more</a>
							</div>
						</div>
					</article>
				<?php endwhile; ?>
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
			 <?php wp_reset_postdata(); 
			 endif; ?>
			<div class="col-lg-4 col-12">
				<div class="widget-wrapper">
					<div class="blog-search">
						<div class="input-group">
							<label for="bsearch">Search</label>
							<input type="text" class="form-control" placeholder="Search" value="" name="bsearch" id="bsearch">
							<div class="input-group-append">
								<button class="input-group-text">
									<img src="<?php echo get_template_directory_uri() ?>/images/magnifying-glass.svg" width="20" height="20" class="imgsvg" alt="search">
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