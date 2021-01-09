<?php
if ( ( !is_user_logged_in() ) ):
	wp_redirect( get_site_url() );
	exit;
endif; 
/*Template Name: Profile*/
if(isset($_POST['submit'])){
	
	$email = sanitize_text_field( $_POST['email'] );
	$phone = sanitize_text_field( $_POST['phone'] );
	$fname = sanitize_text_field( $_POST['fname'] );
	$lname = sanitize_text_field( $_POST['lname'] );
	$country = sanitize_text_field( $_POST['country'] );
	$address = sanitize_text_field( $_POST['address'] );
	$city = sanitize_text_field( $_POST['city'] );
	$state = sanitize_text_field( $_POST['state'] );
	$zipcode = sanitize_text_field( $_POST['zipcode'] );

	$partner_fname = sanitize_text_field( $_POST['partner_fname'] );
	$partner_lname = sanitize_text_field( $_POST['partner_lname'] );
	$gender = sanitize_text_field( $_POST['gender'] );
	$wedding_date = sanitize_text_field( $_POST['wedding_date'] );
	
	$user_id = get_current_user_id();
	
	if( $fname != '' ){
		update_user_meta( $user_id, 'first_name', $fname );
	}

	if( $lname != '' ){
		update_user_meta( $user_id, 'last_name', $lname);
	}

	if( $phone != '' ){
		update_user_meta( $user_id, 'phone_number', $phone);
	}

	if( $country != '' ){
		update_user_meta( $user_id, 'billing_country', $country);
	}

	if( $address != '' ){
		update_user_meta( $user_id, 'billing_address_1', $address);
	}

	if( $city != '' ){
		update_user_meta( $user_id, 'billing_city', $city);
	}

	if( $state != '' ){
		update_user_meta( $user_id, 'billing_state', $state);
	}

	if( $zipcode != '' ){
		update_user_meta( $user_id, 'billing_postcode', $zipcode);
	}

	// Get the WC_Customer instance Object for the current user
	$customer = new WC_Customer( $user_id );
	// Get the last WC_Order Object instance from current customer
	$last_order = $customer->get_last_order();
	if( $last_order !='' ){
		$order_id = $last_order->get_id();
		if( $gender != '' ){
			$new_gender = update_post_meta($order_id, '_gender', $gender);
		}

		if( $partner_fname != '' ){
			$new_partner_fname = update_post_meta($order_id, '_partner_fname', $partner_fname);
		}

		if( $partner_lname != '' ){
			$new_partner_lname = update_post_meta($order_id, '_partner_lname', $partner_lname);
		}

		if( $wedding_date != '' ){
			$new_wedding_date = update_post_meta($order_id, '_wedding_date', $wedding_date);
		}
	}

	$args = array(
		'ID'         => $user_id,
		'user_email' => $email
	);
	$result = wp_update_user( $args );
	
	if( $_FILES['profile-img']['name'] != '' ) {
		$upload = wp_upload_bits( $_FILES['profile-img']['name'], null, file_get_contents( $_FILES['profile-img']['tmp_name'] ) );
		$wp_filetype = wp_check_filetype( basename( $upload['file'] ), null );
		$wp_upload_dir = wp_upload_dir();
		$attachment = array(
			'guid' => $wp_upload_dir['baseurl'] . _wp_relative_upload_path( $upload['file'] ),
			'post_mime_type' => $wp_filetype['type'],
			'post_title' => preg_replace('/\.[^.]+$/', '', basename( $upload['file'] )),
			'post_content'   => '',
			'post_status'    => 'inherit'
		);
		$attach_id = wp_insert_attachment( $attachment, $upload['file']);
		require_once(ABSPATH . 'wp-admin/includes/image.php');
		$attach_data = wp_generate_attachment_metadata( $attach_id, $upload['file'] );
		wp_update_attachment_metadata( $attach_id, $attach_data );
		$test = update_user_meta($user_id, "wp_user_avatar", $attach_id);
	}
	
	/* $user_email = $user->user_email;
	$phone_number = get_user_meta($user->ID,'phone_number',true);
	$first_name = get_user_meta($user->ID,'first_name',true);
	$last_name = get_user_meta($user->ID,'last_name',true);
	$billing_country = get_user_meta($user->ID,'billing_country',true);
	$billing_address_1 = get_user_meta($user->ID,'billing_address_1',true);
	$billing_city = get_user_meta($user->ID,'billing_city',true);
	$billing_state = get_user_meta($user->ID,'billing_state',true);
	$billing_postcode = get_user_meta($user->ID,'billing_postcode',true);
	
	$gender = get_post_meta($order_id, '_gender', true);
	$partner_fname = get_post_meta($order_id, '_partner_fname', true);
	$partner_lname = get_post_meta($order_id, '_partner_lname', true);
	$wedding_date = get_post_meta($order_id, '_wedding_date', true); */
	
	$msg = "Profile Updated Successfully.";
}
get_header(); ?>
<div class="page-title" style="background-image: url(<?php the_post_thumbnail_url('full'); ?>);">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php the_title(); ?></div>
		</div>
	</div>
</div>
<section class="profile-setting pad_tb_100">
	<div class="container">
		<div class="row">
			<h2>Settings</h2>
			<?php 
			$user = wp_get_current_user();
			$user_email = $user->user_email;
			$phone_number = get_user_meta($user->ID,'phone_number',true);
			$first_name = get_user_meta($user->ID,'first_name',true);
			$last_name = get_user_meta($user->ID,'last_name',true);
			$billing_country = get_user_meta($user->ID,'billing_country',true);
			$billing_address_1 = get_user_meta($user->ID,'billing_address_1',true);
			$billing_city = get_user_meta($user->ID,'billing_city',true);
			$billing_state = get_user_meta($user->ID,'billing_state',true);
			$billing_postcode = get_user_meta($user->ID,'billing_postcode',true);

			// Get the WC_Customer instance Object for the current user
			$customer = new WC_Customer( $user->ID );
			// Get the last WC_Order Object instance from current customer
			$last_order = $customer->get_last_order();
			if( $last_order !='' ){
				$order_id = $last_order->get_id();
				$gender = get_post_meta($order_id, '_gender', true);
				$partner_fname = get_post_meta($order_id, '_partner_fname', true);
				$partner_lname = get_post_meta($order_id, '_partner_lname', true);
				$wedding_date = get_post_meta($order_id, '_wedding_date', true);
			}
			?>
			<?php if($msg != "") { ?>
			<div class="success-msg">
				<?php echo $msg; ?>
			</div>
			<?php } ?>
			<form class="wpcf7-form profile-form" method="post" action="" enctype="multipart/form-data">
				<div class="profile-image">
					<label>profile image</label>
					<div class="thumbnail">
						<div class="thumb">
							<?php $attachment_id = get_user_meta($user->id,'wp_user_avatar',true); 	?>
							<?php if($attachment_id){ ?>
							<img src="<?php echo wp_get_attachment_url( $attachment_id ); ?>" alt="user" width="167" height="167" id="profile_image">
							<?php } else { ?>
							<img src="<?php echo get_template_directory_uri() ?>/images/profile-user.svg" alt="user" width="167" height="167">
							<?php } ?>
						</div>
						<div class="choose-another">
							<a href="javascript:;" onclick="document.getElementById('profile-img').click()">Choose another</a>
							<input type="file" name="profile-img" id="profile-img" onchange="readURL(this);" style="display:none" accept="image/png, image/jpeg, image/jpg"/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="form-group">
							<label>Email address <em>*</em></label>
							<input type="text" name="email" class="form-control" value="<?php echo $user_email; ?>">
						</div>
					</div>
					<div class="col-12">
						<div class="form-group">
							<label>Phone Number <em>*</em></label>
							<input type="text" name="phone" class="form-control" value="<?php echo $phone_number; ?>">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>First Name <em>*</em></label>
							<input type="text" name="fname" class="form-control" value="<?php echo $first_name; ?>">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Last Name <em>*</em></label>
							<input type="text" name="lname" class="form-control" value="<?php echo $last_name; ?>">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Country / Region <em>*</em></label>
							<input type="text" name="country" class="form-control" value="<?php echo $billing_country; ?>">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Address <em>*</em></label>
							<input type="text" name="address" class="form-control" value="<?php echo $billing_address_1; ?>">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>City <em>*</em></label>
							<input type="text" name="city" class="form-control" value="<?php echo $billing_city; ?>">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>State <em>*</em></label>
							<input type="text" name="state" class="form-control" value="<?php echo $billing_state; ?>">
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Zip Code <em>*</em></label>
							<input type="text" name="zipcode" class="form-control" value="<?php echo $billing_postcode; ?>">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Partners First Name: <em>*</em></label>
							<input type="text" name="partner_fname" class="form-control" value="<?php echo $partner_fname; ?>">
						</div>
					</div>					
					<div class="col-md-6">
						<div class="form-group">
							<label>Partners Last Name: <em>*</em></label>
							<input type="text" name="partner_lname" class="form-control" value="<?php echo $partner_lname; ?>">
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Gender </label>
							<input type="radio" id="male" name="gender" value="Male" <?php if( $gender == 'Male') { ?>checked <?php } ?>><label for="male">Male</label>
							<input type="radio" id="female" name="gender" value="Female" <?php if( $gender == 'Female') { ?>checked <?php } ?>><label for="female">Female</label>
							<input type="radio" id="other" name="gender" value="Other" <?php if( $gender == 'Other') { ?>checked <?php } ?>><label for="other">Other</label>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Projected Wedding Date: <em>*</em></label>
							<input type="date" name="wedding_date" min="<?php echo date('Y'); ?>" class="extra-field input-text" placeholder="Projected Wedding Date" value="<?php echo $wedding_date;?>">
						</div>
					</div>
					<div class="col-12">
						<div class="form-group">
							<a href="#" class="btn-password">Password</a>
							<a href="#" class="btn-change-password" data-toggle="modal" data-target="#changepass">change password</a>
						</div>
					</div>
					<div class="col-12">
						<div class="form-group">
							<input type="submit" name="submit" value="Save" class="btn-save">
							<img src="<?php echo site_url();?>/wp-content/uploads/2020/12/loader-1.svg" id="img-loader" style="display: none;">
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>

<div class="modal fade" id="changepass">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<button type="button" class="close" data-dismiss="modal">
				<span aria-hidden="true">
					<img src="<?php echo get_template_directory_uri() ?>/images/modal-close.svg" alt="close" width="55" height="55">
				</span>
			</button>
			<div class="modal-body">
				<h2>Change Password</h2>
				<div class = "change-password-messages">
				</div>
				<form class="wpcf7-form" action="" method="post">
					<div class="form-group">
						<label>New Password<em>*</em></label>
						<input type="password" name="npass" id="npass" class="form-control">
					</div>
					<div class="form-group">
						<label>Confirm New Password<em>*</em></label>
						<input type="password" name="cpass" id="cpass" class="form-control">
					</div>
					<div class="form-group mb-0">
						<input type="submit" name="change_password" value="Change Password" id="change_password" class="btn-change-password">
						<input type="button" name="cancel_btn" value="Cancel" id="" class="btn-cancel" data-dismiss="modal">
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<script>
function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profile_image')
                        .attr('src', e.target.result)
                        .width(167)
                        .height(167);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
</script>

<script>
jQuery(document).ready(function() {

	$( ".profile-form" ).submit(function( event ) {
		jQuery('#img-loader').show();
	});
    // Define admin-ajax for front-end usage
    var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
    
    $('body').on('click', '#change_password', function(e) {
		e.preventDefault();
        // Validate empty fields or mismatched passwords
        if ($('.form-control#npass').val() === '') {       
			$(".change-password-messages").html('<p class = "bg-danger">Please Enter New Password.</p>');
			$( "#npass" ).focus();
        } else if ($('.form-control#cpass').val() === '') {
			$(".change-password-messages").html('<p class = "bg-danger">Please Enter Confirm Password.</p>');            
			$( "#cpass" ).focus();
        } else if ($('.form-control#cpass').val() !== $('.form-control#npass').val()) {
			$(".change-password-messages").html('<p class = "bg-danger">Password not match.</p>');             
			$( "#cpass" ).focus();
        } else {
			
            var data = {
                'action': 'profile_change_password',
                'new_password': $('.form-control#cpass').val()
            };
           
            $.post(ajaxurl, data, function(response) {                
                if(response === 'success') {					
                    $(".change-password-messages").html('<p class = "bg-success">Password Successfully Changed.</p>');
					$('.form-control#npass').val('');
					$('.form-control#cpass').val('');
                } else if (response === 'error') {
                    $(".change-password-messages").html('<p class = "bg-danger">Error Changing Password.</p>');                    
                }
            });
        }
    });
});
</script>
<?php get_footer();