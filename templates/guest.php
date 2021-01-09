<?php
$user = wp_get_current_user();

if ((in_array( 'staff', (array) $user->roles))  ||  (in_array( 'administrator', (array) $user->roles ))) { 
	 echo '';  
}else{ 
	wp_redirect( get_site_url().'/login/' );
	exit;
}
// if ( ( !is_user_logged_in() ) ):
	// wp_redirect( get_site_url().'/login/' );
	// exit;
// endif;  


/*Template Name: Guest  Page*/ 
get_header(); ?>
<div class="page-title" style="background-image: url(<?php the_post_thumbnail_url('full'); ?>);">
	<div class="container h-100">
		<div class="row h-100 align-items-center justify-content-center">
			<div class="h1"><?php the_title(); ?></div>
		</div>
	</div>
</div>
<section class="profile-setting pad_tb_100">
	<div class="container_fluid px-5">
		<div class="row"> 
			<div class="col-md-12"> 
				<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
				  <?php /*
				  <a href="#dableSummery" type="button" class="btn btn-secondary" data-toggle="collapse" href="#dableSummery" role="button" aria-expanded="false" aria-controls="collapseExample">SUMMARY</a>  */ ?>
				  <a href="#invitedGuest" type="button" class="btn btn-secondary active"  data-toggle="collapse" href="#dableSummery" role="button" aria-expanded="false" aria-controls="#invitedGuest" >GUEST List</a>
				  <a href="#rsvpGuest" type="button" class="btn btn-secondary"  data-toggle="collapse" href="#rsvpGuest" role="button" aria-expanded="false" aria-controls="rsvpGuest"  >RSVP + Seating</a>
				  
				  <?php /*
				  <a href="<?php echo esc_url(home_url('/guest/seating-export/'));?>" type="button" class="btn btn-secondary">Seating (Export)</a>
				  <a href="#" type="button" class="btn btn-secondary">Mailing (Export)</a> 
				  */ ?>
				</div>
			</div>
		<p>
   
		</div> 
	</div>
	<div class="container_fluid px-5  " id="dataTableContent" >
		<div class="row"> 
			<div class="col-md-12">
				 <?php while(have_posts()): the_post(); the_content(); endwhile; ?>
			</div>
		</div> 
	</div>
	<div id="dataTableArea">
	<div class="container_fluid px-5 collapse show" id="invitedGuest" data-parent="#dataTableArea">
		<div class="row "  > 
			<div class="col-md-6 pt-3 col-lg-6"> 
				 <table class="table   text-uppercase dableSummery table-striped">
					<thead>
					<tr>
						<th colspan="2"> GUEST SUMMARY </th>
					</tr>
					<tr>
						<th>Event </th>
						<th class="text-right">
							Number of Invited Guests</th>
						 
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Wedding </td>
						<td class="text-right"><p class="twed_guest gue1"></p></td>
					</tr>
					<tr>
						<td>Rehearsal Dinner </td>
						<td class="text-right"><p class="tdinner_guest gue2"></p></td>
					</tr>
					<tr>
						<td>Brunch </td>
						<td class="text-right"><p class="tbrunch_guest gue3"></p></td>
					</tr> 
					<tr>
						<td>Ranking A </td>
						<td class="text-right"><p class="tbrunch_guest gue4"></p></td>
					</tr> 
					<tr>
						<td>Ranking B </td>
						<td class="text-right"><p class="tbrunch_guest gue5"></p></td>
					</tr> 
					<tr>
						<td>Ranking C </td>
						<td class="text-right"><p class="tbrunch_guest gue6"></p></td>
					</tr> 
					<tr>
						<td>Total Number of Invited Guests </td>
						<td class="text-right"><p class="tbrunch_guest gue7"></p></td>
					</tr> 
					<!--
					<tr>
						<td>Total Number of Invited Guests  </td> 
						<td class="text-right"><p class="totalA_guest"> </p></td>
					
					</tr> 
					-->
					</tbody>
				</table>  
			</div>  
		</div> 
		<div class="row"> 
			<div class="col-md-12">
				 <?php echo do_shortcode('[wpdatatable id=7]'); ?>
			</div>
		</div> 
	</div>
	
	<div class="container_fluid px-5 collapse " id="rsvpGuest" data-parent="#dataTableArea">
	<div class="row " > 
			<div class="col-md-6  pt-3 "> 
				 <table class="table    text-uppercase dableSummery">
					<thead>
					<tr>
						<th colspan="2"> RSVP + Seating GUEST SUMMARY </th>
					</tr>
					<tr>
						<th>Event </th>
						<th class="text-right">
							Number of Invited Guests</th>
						 
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Wedding </td>
						<td class="text-right"><p class="totalA_guest"><?php  echo do_shortcode('[wpdatatable_sum table_id=2 col_id=57]');?></p></td>
					</tr>
					<tr>
						<td>Rehearsal Dinner </td>
						<td class="text-right"><p class="totalA_guest"><?php  echo do_shortcode('[wpdatatable_sum table_id=2 col_id=58]');?></p></td>
					</tr>
					<tr>
						<td>Brunch </td>
						<td class="text-right"><p class="totalA_guest"><?php  echo do_shortcode('[wpdatatable_sum table_id=2 col_id=59]');?></p></td>
					</tr> 
					<tr>
						<td>Total Number of Invited Guests  </td>
						<td class="text-right"><p class="totalA_guest"> </p></td>
					</tr> 
					</tbody>
				</table>  
			</div>  
		</div> 
		<div class="row"> 
			<div class="col-md-12">
				 <?php echo do_shortcode('[wpdatatable id=2]'); ?>
			</div>
		</div> 
	</div>
	
	</div>
</section>
   
<?php get_footer();