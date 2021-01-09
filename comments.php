<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package madaboutwedding
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}


	if ( have_comments() ) :
	?>
	
	<div id="comments" class="comments-area">
		<h2 class="comments-title">Comments</h2>
	<ol class="commentlist">
			<?php wp_list_comments('callback=madaboutwedding_comment'); ?>

	</ol><!-- .comment-list -->
	</div>
	<?php	endif; // if have_comments(); ?>
		<?php
		// Show comment form at bottom if showing newest comments at the bottom.
		if ( comments_open() && 'asc' === strtolower( get_option( 'comment_order', 'asc' ) ) ) :
			?>
			
				<h3 class="comment-reply-title">
				<div class="comment-title"> <h5><?php _e( 'Leave a comment', 'madaboutwedding' ); ?></h5></div>
				<small>
						<a rel="nofollow" id="cancel-comment-reply-link" href="/WD-Explore/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-etiam-vulputate-erat-et-viverra-auctor-etiam-vel-feugiat-lacus-aliquam-erat-volutpat/#respond">Cancel reply</a>
				</small>
				</h3>
			<?php if ( get_option('comment_registration') && !$user_ID ) : ?>
			<p>You must be <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>">logged in</a> to post a comment.</p>
			<?php else : ?>
 
		<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" class="comment-form" method="post" id="commentform">
 		
			
			<?php if ( !$user_ID ) : ?>
				<p class="comment-form-author">
						<label for="firstname">Full Name</label>
						<input id="author" name="author" size="30" type="text" value="<?php echo $comment_author; ?>" required />
				</p>
				<p class="comment-form-email">
						<label for="email">Email</label>
						<input type="text" name="email" id="email" size="30" value="<?php echo $comment_author_email; ?>" required />
				</p>
				<p class="comment-form-phone">
                        	<label for="phone">Phone</label>
						<input type="text" name="phone" size="30" id="phone" value="<?php echo $comment_author_phone; ?>"   />
				</p>
				<p class="comment-form-url">
                        	<label for="url">Website</label>
						<input type="text" name="url" size="30" id="url" value="<?php echo $comment_author_url; ?>"   />
				</p>
				 <p class="comment-form-message">
                      <label for="message">Comment</label>
						<textarea cols="45" rows="8" aria-required="true" name="comment" id="comment"></textarea>
						<?php comment_id_fields(); ?>
						<?php do_action('comment_form', $post->ID); ?>
				</p>
				<p class="form-submit">
					<input name="submit" type="submit" id="submit" class="submit" value="POST A COMMENT">
					<input type="hidden" name="comment_post_ID" value="34" id="comment_post_ID">
					<input type="hidden" name="comment_parent" id="comment_parent" value="0">
				</p>
		<?php else: ?>
 
			<p>Logged in as <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="Log out of this account">Log out &raquo;</a></p>
			 <p class="comment-form-message">
                      <label for="message">Comment</label>
						<textarea cols="45" rows="8" aria-required="true" name="comment" id="comment"></textarea>
						<?php comment_id_fields(); ?>
						<?php do_action('comment_form', $post->ID); ?>
				</p>
				<p class="form-submit">
					<input name="submit" type="submit" id="submit" class="submit" value="POST A COMMENT">
					<input type="hidden" name="comment_post_ID" value="34" id="comment_post_ID">
					<input type="hidden" name="comment_parent" id="comment_parent" value="0">
				</p>
		<?php endif; ?>
		</div>	
			
		</form>
		<?php endif; // If registration required and not logged in ?>
			<?php
	endif;

		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() ) :
			?>
			<p class="no-comments">
				<?php _e( 'Comments are closed.', 'madaboutwedding' ); ?>
			</p>
			<?php
		endif;
	
	?>


