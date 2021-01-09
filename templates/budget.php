<?php
if ( ( !is_user_logged_in() ) ):
	wp_redirect( get_site_url().'/login/' );
	exit;
endif;  


/*Template Name: Budget Page*/
if(isset($_POST['submit'])){ 
	$budget = sanitize_text_field( $_POST['budget'] );  
	$user_id = get_current_user_id(); 
	if( $budget != '' ){ 
		update_user_meta( $user_id, 'user_budget', $budget); 
	$msg = "Budget Updated Successfully.";
	}  
}else if(isset($_GET['reset'])){ 
	$reset = $_GET['reset'];  
	$user_id = get_current_user_id(); 
	if( $reset == 'true' ){ 
		update_user_meta( $user_id, 'user_budget', 0); 
	$msg = "Budget Reset Successfully.";
	}  
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
			<div class="col-md-12">
				<?php 
				$user = wp_get_current_user(); 
				$budget = get_user_meta($user->ID,'user_budget',true); 
				 
				// echo '<pre>';  
				// print_r($user); 
				// echo '</pre>' ; 
				?>
				<?php if($msg != "") { ?>
				<div class="success-msg">
					<?php echo $msg; ?>
				</div>
				<?php } ?>
			</div>
		</div>
		<div class="row budget_settings_page">
			<div class="col-md-6">
			<form class=" budget-form mb-3" method="post" action="" enctype="multipart/form-data">
				<table class="table   text-uppercase">
					<thead>
					<tr>
						<th>Total Proposed Budget</th>
						<th class="text-right">
							<small>Enter Your Budget</small>
						<input type="number" name="budget" class="form-control budget_input_amount text-right" value="<?php echo $budget; ?>" style=" width: 130px; float: right; "> </th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Total allocated budget</td>
						<td class="text-right"><p class="total_allocated_budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>AVAILABLE BUDGET SPEND </td>
						<td class="text-right"><p class="available_budget_spend">$00,000.0</p></td>
					</tr>
					<tr>
						<td>AVAILABLE ACTUAL SPEND </td>
						<td class="text-right"><p class="available_actual_spend">$00,000.0</p></td>
					</tr>
					<tr>
						<td>10% Overage For A Splurge</td>
						<td class="text-right"><p class="overage_for_a_splurge_10">$00,000.0</p></td>
					</tr>
					<tr>
						<!-- <td class="text-left"><a href="?reset=true" class="btn-reset btn btn-danger">Cancel</a></td> -->
						<td class="text-left"><button class="btn-reset btn btn-danger">Cancel</button></td>
						<td class="text-right"><input type="submit" name="submit" value="Save" class="btn-save"></td>
					</tr>
					</tbody>
				</table> 
			</form>
				<div class="text-center"> 
					<a href="<?php echo esc_url(home_url('/'));?>" class="d-block btn btn-backhome text-uppercase text-center">Back To Home Page</a>
				</div>
			</div>
			<div class="col-md-6">
				<table class="table   " style="display: none; ">
					<thead>
					<tr>
						<th>Wedding Services</th>
						<th class="text-right">
							Amount</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Reception (Site, Food, Drinks)</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Wedding Rings</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Photography</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Flowers/Decor</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Rehearsal Dinner</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Dress</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Videography</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Reception Music</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Groom's Formal Wear</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Hair And Makeup</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Invitations</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Ceremony Music</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Church/Chapel/Synagogue</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Wedding Cake</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Transportation</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr>
					<tr>
						<td>Favors</td>
						<td class="text-right"><p class="totalA_Budget">$00,000.0</p></td>
					</tr> 
					</tbody>
				</table>
			</div>
		</div>
		
	</div>
</section>
<div class="container"> 
<figure class="wp-block-table is-style-regular budget_settings_page ">
	<form action="#" class="d-block">
    <table class="table">
		<thead> 
			<tr>
                <th class="a1" ><strong>Wedding Products and Services</strong></th>
                <th class="b1" ><strong>Add Product or Services</strong></th>
                <th class="c1" ><strong>Proposed Budget</strong></th>
                <th class="d1" ><strong>Actual Spend</strong></th>
                <th class="e1" ><strong>Remaining Budget</strong></th>
                <th class="f1" ><strong>Original Allocation %</strong></th>
                <th class="g1" ><strong>Updated Allocation%</strong></th>
            </tr>
		</thead>
        <tbody>
          
            <tr>
                <td class="a2" style="width: 20%;"><button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#invitationInner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>INVITATIONS</strong></td>
                <td class="b2" style="padding-left: 19px;"><select name="invitation_select" id="">
					<option value="yes">Yes</option>
					<option value="no">no</option>
				</select></td>
                <td class="c2 pb_invitations">00.00</td>
                <td class="aspend_invitations d2"><input type="number" disabled /></td>
                <td class="e2" >$(148,350.00)</td>
                <td class="f2">2.00%</td>
                <td class="g2" >924.30%</td>
            </tr>
			<tr id="invitationInner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem"> 
							 
						<tr>
							<td class="a3">Save the dates</td>
							<td class="b3"><input type="number" name="" disabled="" /></td>
							<td class="c3"><input type="number" name="" disabled="" /></td>
							<td class="d3"><input type="number" name="" /></td>
							<td class="e3"><input type="number" name="" disabled="" /></td>
							<td class="f3"><input type="number" name="" disabled="" /></td>
							<td class="g3"><input type="number" name="" disabled="" /></td>
						</tr>
						<tr>
							<td class="a4" >Invitiations</td>
							<td class="b4" ><input type="number" name="" disabled="" /></td>
							<td class="c4" ><input type="number" name="" disabled="" /></td>
							<td class="d4" ><input type="number" name="" /></td>
							<td class="e4" ><input type="number" name="" disabled="" /></td>
							<td class="f4" ><input type="number" name="" disabled="" /></td>
							<td class="g4" ><input type="number" name="" disabled="" /></td>
						</tr>
						<tr>
							<td class="a5">Postage</td>
							<td class="b5"><input type="number" name="" disabled="" /></td>
							<td class="c5"><input type="number" name="" disabled="" /></td>
							<td class="d5"><input type="number" name="" /></td>
							<td class="e5"><input type="number" name="" disabled="" /></td>
							<td class="f5"><input type="number" name="" disabled="" /></td>
							<td class="g5"><input type="number" name="" disabled="" /></td>
						</tr>
						<tr>
							<td class="a6">Addressing</td>
							<td class="b6"><input type="number" name="" disabled="" /></td>
							<td class="c6"><input type="number" name="" disabled="" /></td>
							<td class="d6"><input type="number" name="" /></td>
							<td class="e6"><input type="number" name="" disabled="" /></td>
							<td class="f6"><input type="number" name="" disabled="" /></td>
							<td class="g6"><input type="number" name="" disabled="" /></td>
						</tr>
						<tr>
							<td class="a7">Escort and/or placecards</td>
							<td class="b7"><input type="number" name="" disabled="" /></td>
							<td class="c7"><input type="number" name="" disabled="" /></td>
							<td class="d7"><input type="number" name="" /></td>
							<td class="e7"><input type="number" name="" disabled="" /></td>
							<td class="f7"><input type="number" name="" disabled="" /></td>
							<td class="g7"><input type="number" name="" disabled="" /></td>
						</tr>
						<tr>
							<td class="a8">Table numbers</td>
							<td class="b8"><input type="number" name="" disabled="" /></td>
							<td class="c8"><input type="number" name="" disabled="" /></td>
							<td class="d8"><input type="number" name="" /></td>
							<td class="e8"><input type="number" name="" disabled="" /></td>
							<td class="f8"><input type="number" name="" disabled="" /></td>
							<td class="g8"><input type="number" name="" disabled="" /></td>
						</tr>
						<tr>
							<td class="a9">Menus</td>
							<td class="b9"><input type="number" name="" disabled="" /></td>
							<td class="c9"><input type="number" name="" disabled="" /></td>
							<td class="d9"><input type="number" name="" /></td>
							<td class="e9"><input type="number" name="" disabled="" /></td>
							<td class="f9"><input type="number" name="" disabled="" /></td>
							<td class="g9"><input type="number" name="" disabled="" /></td>
						</tr>
						<tr>
							<td class="a10">Favor tags</td>
							<td class="b10"><input type="number" name="" disabled="" /></td>
							<td class="c10"><input type="number" name="" disabled="" /></td>
							<td class="d10"><input type="number" name="" /></td>
							<td class="e10"><input type="number" name="" disabled="" /></td>
							<td class="f10"><input type="number" name="" disabled="" /></td>
							<td class="g10"><input type="number" name="" disabled="" /></td>
						</tr>
						<tr>
							<td class="a11">Website</td>
							<td class="b11"><input type="number" name="" disabled="" /></td>
							<td class="c11"><input type="number" name="" disabled="" /></td>
							<td class="d11"><input type="number" name="" /></td>
							<td class="e11"><input type="number" name="" disabled="" /></td>
							<td class="f11"><input type="number" name="" disabled="" /></td>
							<td class="g11"><input type="number" name="" disabled="" /></td>
						</tr> 
					</table>
				</td>
			</tr>
			<tr>
                <td class="a12"  >
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#wedding_rings_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>WEDDING RINGS</strong></td>
                <td class="b12"  style="padding-left: 19px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c12 pb_wedding_rings" >00.00</td>
                <td class="d12 aspend_wedding_rings"><input type="number" name="" disabled /></td>
                <td class="e12">$8,100.00</td>
                <td class="f12">6.00%</td>
                <td class="g12">-50.47%</td>
            </tr>
			
			<tr id="wedding_rings_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
							<tr>
								<td class="a13" style=" width: 245px; ">Ring 1</td>
								<td class="b13"><input type="number" name="" disabled="" /></td>
								<td class="c13"><input type="number" name="" disabled="" /></td>
								<td class="d13"><input type="number" name="" /></td>
								<td class="e13"><input type="number" name=""  disabled=""/></td>
								<td class="f13"><input type="number" name=""  disabled=""/></td>
								<td class="g13">0.00%</td>
							</tr>
							<tr>
								<td class="a14">Ring 2</td>
								<td class="b14"><input type="number" name="" disabled="" /></td>
								<td class="c14"><input type="number" name="" disabled="" /></td>
								<td class="d14"><input type="number" name="" /></td>
								<td class="e14"><input type="number" name=""  disabled=""/></td>
								<td class="f14"><input type="number" name=""  disabled=""/></td>
								<td class="g14">0.00%</td>
							</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td class="a15">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#dress_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>DRESS</strong></td>
						<td class="b15" style="padding-left: 19px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
						<td class="c15 pb_dress">00.00</td>
						<td class="d15"  class="aspend_dress"><input type="number" name="" disabled /></td>
						<td class="e15">$5,400.00</td>
						<td class="f15">4.00%</td>
						<td class="g15">-33.64%</td>
					</tr>
			<tr id="dress_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
					<tr>
						<td class="a16"  style=" width: 260px; ">Veil</td>
						<td class="b16"><input type="number" name="" disabled="" /></td>
						<td class="c16"><input type="number" name="" disabled="" /></td>
						<td class="d16"><input type="number" name="" /></td>
						<td class="e16"><input type="number" name="" disabled="" /></td>
						<td class="f16"><input type="number" name="" disabled="" /></td>
						<td class="g16">0.00%</td>
					</tr>
					<tr>
						<td class="a17">Undergarments</td>
						<td class="b17"><input type="number" name="" disabled="" /></td>
						<td class="c17"><input type="number" name="" disabled="" /></td>
						<td class="d17"><input type="number" name="" /></td>
						<td class="e17"><input type="number" name="" disabled="" /></td>
						<td class="f17"><input type="number" name="" disabled="" /></td>
						<td class="g17">0.00%</td>
					</tr>
					<tr>
						<td class="a18">Shoes</td>
						<td class="b18"><input type="number" name="" disabled="" /></td>
						<td class="c18"><input type="number" name="" disabled="" /></td>
						<td class="d18"><input type="number" name="" /></td>
						<td class="e18"><input type="number" name="" disabled="" /></td>
						<td class="f18"><input type="number" name="" disabled="" /></td>
						<td class="g18">0.00%</td>
					</tr>
					<tr>
						<td class="a19">Accessories</td>
						<td class="b19"><input type="number" name=""  disabled="" disabled=""/></td>
						<td class="c19"><input type="number" name=""  disabled=""/></td>
						<td class="d19"><input type="number" name="" /></td>
						<td class="e19"><input type="number" name="" disabled="" /></td>
						<td class="f19"><input type="number" name="" disabled="" /></td>
						<td class="g19">0.00%</td>
					</tr>
			
					</table>
				</td>
			</tr> 
            <tr>
                <td class="a20">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#hair_and_makeup_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>HAIR AND MAKEUP</strong></td>
                <td class="b20" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c20 pb_hair_and_makeup">00.00</td>
                <td class="d20"><input type="number" name="" disabled /></td>
                <td class="e20">$2,700.00</td>
                <td class="f20">2.00%</td>
                <td class="g20">-16.82%</td>
            </tr>
			<tr id="hair_and_makeup_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td class="a21"  style=" width: 240px; ">Hair stylist</td>
							<td class="b21"><input type="number" name=""  disabled=""/></td>
							<td class="c21"><input type="number" name=""  disabled=""/></td>
							<td class="d21"><input type="number" name="" /></td>
							<td class="e21"><input type="number" name=""  disabled=""/></td>
							<td class="f21"><input type="number" name=""  disabled=""/></td>
							<td class="g21">0.00%</td>
						</tr>
						<tr>
							<td  class="a22">Makeup artist</td>
							<td  class="b22"><input type="number" name=""  disabled=""/></td>
							<td  class="c22"><input type="number" name=""  disabled=""/></td>
							<td  class="d22"><input type="number" name="" /></td>
							<td  class="e22"><input type="number" name=""  disabled=""/></td>
							<td  class="f22"><input type="number" name="" disabled="" /></td>
							<td  class="g22">0.00%</td>
						</tr>
					</table>
				</td>
			</tr>
            <tr>
                <td  class="a23">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#grooms_formalwear_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>GROOM’S FORMALWEAR</strong></td>
                <td  class="b23" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td  class="c23 pb_grooms_formalwear">00.00</td>
                <td  class="d23"><input type="number" name="" disabled /></td>
                <td  class="e23">$2,700.00</td>
                <td  class="f23">2.00%</td>
                <td  class="g23">-16.82%</td>
            </tr>
			<tr id="grooms_formalwear_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td  class="a24"  style=" width: 240px; ">Tuxedo or suit</td>
							<td  class="b24"><input type="number" name=""  disabled=""/></td>
							<td  class="c24"><input type="number" name="" disabled="" /></td>
							<td  class="d24"><input type="number" name="" /></td>
							<td  class="e24"><input type="number" name="" disabled="" /></td>
							<td  class="f24"><input type="number" name=""  disabled=""/></td>
							<td  class="g24">0.00%</td>
						</tr>
						<tr>
							<td class="a25">Tie or bowtie</td>
							<td class="b25"><input type="number" name=""  disabled=""/></td>
							<td class="c25"><input type="number" name=""  disabled=""/></td>
							<td class="d25"><input type="number" name="" /></td>
							<td class="e25"><input type="number" name=""  disabled=""/></td>
							<td class="f25"><input type="number" name="" disabled="" /></td>
							<td class="g25">0.00%</td>
						</tr>
						<tr>
							<td class="a26">Shirt</td>
							<td class="b26"><input type="number" name=""  disabled=""/></td>
							<td class="c26"><input type="number" name=""  disabled=""/></td>
							<td class="d26"><input type="number" name="" /></td>
							<td class="e26"><input type="number" name=""  disabled=""/></td>
							<td class="f26"><input type="number" name="" disabled="" /></td>
							<td class="g26">0.00%</td>
						</tr>
						<tr>
							<td  class="a27">Socks and Shoes</td>
							<td  class="b27"><input type="number" name="" disabled="" /></td>
							<td  class="c27"><input type="number" name=""  disabled=""/></td>
							<td  class="d27"><input type="number" name="" /></td>
							<td  class="e27"><input type="number" name=""  disabled=""/></td>
							<td  class="f27"><input type="number" name="" disabled="" /></td>
							<td  class="g27">0.00%</td>
						</tr>
					</table>
				</td>
			</tr>
            <tr>
                <td class="a28">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#rehearsal_dinner_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>REHEARSAL DINNER</strong></td>
                <td class="b28" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c28 pb_rehearsal_dinner">00.00</td>
                <td class="d28"><input type="number" name="" disabled /></td>
                <td class="e28">$6,750.00</td>
                <td class="f28">5.00%</td>
                <td class="g28">-42.06%</td>
            </tr>
			<tr id="rehearsal_dinner_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td  class="a29"  style=" width: 240px; ">Food and beverage</td>
							<td  class="b29"><input type="number" name=""  disabled=""/></td>
							<td  class="c29"><input type="number" name=""  disabled=""/></td>
							<td  class="d29"><input type="number" name="" /></td>
							<td  class="e29"><input type="number" name=""  disabled=""/></td>
							<td  class="f29"><input type="number" name=""  disabled=""/></td>
							<td  class="g29">0.00%</td>
						</tr>
						<tr>
							<td  class="a30">Florals or decor</td>
							<td  class="b30"><input type="number" name=""  disabled=""/></td>
							<td  class="c30"><input type="number" name=""  disabled=""/></td>
							<td  class="d30"><input type="number" name="" /></td>
							<td  class="e30"><input type="number" name="" disabled="" /></td>
							<td  class="f30"><input type="number" name=""  disabled=""/></td>
							<td  class="g30">0.00%</td>
						</tr>
						<tr>
							<td  class="a31">Invitation/ escort cards</td>
							<td  class="b31"><input type="number" name="" disabled="" /></td>
							<td  class="c31"><input type="number" name=""  disabled=""/></td>
							<td  class="d31"><input type="number" name="" /></td>
							<td  class="e31"><input type="number" name=""  disabled=""/></td>
							<td  class="f31"><input type="number" name="" disabled="" /></td>
							<td  class="g31">0.00%</td>
						</tr>
						<tr>
							<td class="a32">Sound system</td>
							<td class="b32"><input type="number" name="" disabled="" /></td>
							<td class="c32"><input type="number" name="" disabled="" /></td>
							<td class="d32"><input type="number" name="" /></td>
							<td class="e32"><input type="number" name=""  disabled=""/></td>
							<td class="f32"><input type="number" name=""  disabled=""/></td>
							<td class="g32">0.00%</td>
						</tr>
					</table>
				</td>
			</tr>
            <tr>
                <td  class="a33">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#photography_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>PHOTOGRAPHY</strong></td>
                <td  class="b33" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td  class="c33 pb_photography">00.00</td>
                <td  class="d33"><input type="number" name="" disabled /></td>
                <td  class="e33">$9,450.00</td>
                <td  class="f33">7.00%</td>
                <td  class="g33">-58.88%</td>
            </tr>
			<tr id="photography_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td class="a34"  style=" width: 240px; ">Shooting fees</td>
							<td class="b34"><input type="number" name=""  disabled=""/></td>
							<td class="c34"><input type="number" name=""  disabled=""/></td>
							<td class="d34"><input type="number" name="" /></td>
							<td class="e34"><input type="number" name=""  disabled=""/></td>
							<td class="f34"><input type="number" name=""  disabled=""/></td>
							<td class="g34">0.00%</td>
						</tr>
						<tr>
							<td class="a35">Albums (if additional)</td>
							<td class="b35"><input type="number" name=""  disabled=""/></td>
							<td class="c35"><input type="number" name=""  disabled=""/></td>
							<td class="d35"><input type="number" name="" /></td>
							<td class="e35"><input type="number" name="" disabled="" /></td>
							<td class="f35"><input type="number" name=""  disabled=""/></td>
							<td class="g35">0.00%</td>
						</tr>
						<tr>
							<td class="a36">Anticipated overtime</td>
							<td class="b36"><input type="number" name="" disabled="" /></td>
							<td class="c36"><input type="number" name="" disabled="" /></td>
							<td class="d36"><input type="number" name="" /></td>
							<td class="e36"><input type="number" name=""  disabled=""/></td>
							<td class="f36"><input type="number" name="" disabled="" /></td>
							<td class="g36">0.00%</td>
						</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td class="a37">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#videography_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>VIDEOGRAPHY</strong></td>
							<td class="b37" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
							<td class="c37 pb_videography">00.00</td>
							<td class="d37"><input type="number" name="" disabled /></td>
							<td class="e37">$6,750.00</td>
							<td class="f37">5.00%</td>
							<td class="g37">-42.06%</td>
						</tr>
				<tr id="videography_inner" class="collapse"> 
					<td colspan="7" class="p-0"> 
						<table class="innerItem">  
						<tr>
							<td class="a38" style="width: 241px;">Shooting fees</td>
							<td class="b38"><input type="number" name="" /></td>
							<td class="c38"><input type="number" name="" /></td>
							<td class="d38"><input type="number" name="" /></td>
							<td class="e38"><input type="number" name="" /></td>
							<td class="f38"><input type="number" name="" /></td>
							<td class="g38">0.00%</td>
						</tr>
						<tr>
							<td class="a39">Overtime (if applicable)</td>
							<td class="b39"><input type="number" name="" /></td>
							<td class="c39"><input type="number" name="" /></td>
							<td class="d39"><input type="number" name="" /></td>
							<td class="e39"><input type="number" name="" /></td>
							<td class="f39"><input type="number" name="" /></td>
							<td class="g39">0.00%</td>
						</tr>
						<tr>
							<td class="a40">End product</td>
							<td class="b40"><input type="number" name="" /></td>
							<td class="c40"><input type="number" name="" /></td>
							<td class="d40"><input type="number" name="" /></td>
							<td class="e40"><input type="number" name="" /></td>
							<td class="f40"><input type="number" name="" /></td>
							<td class="g40">0.00%</td>
						</tr>
					</table>
				</td>
			</tr>
            <tr>
                <td class="a41">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#church_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>CHURCH / CHAPEL / SYNAGOGUE</strong></td>
                <td class="b41" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c41 pb_church">00.00</td>
                <td class="d41"><input type="number" name="" disabled /></td>
                <td class="e41">$2,700.00</td>
                <td class="f41">2.00%</td>
                <td class="g41">-16.82%</td>
            </tr>
			<tr id="church_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td class="a42"  style=" width: 240px; ">Officiant</td>
							<td class="b42"><input type="number" name=""  disabled=""/></td>
							<td class="c42"><input type="number" name=""  disabled=""/></td>
							<td class="d42"><input type="number" name="" /></td>
							<td class="e42"><input type="number" name="" disabled="" /></td>
							<td class="f42"><input type="number" name="" disabled="" /></td>
							<td class="g42">0.00%</td>
						</tr>
						<tr>
							<td  class="a43">Marriage License</td>
							<td  class="b43"><input type="number" name=""  disabled="" disabled=""/></td>
							<td  class="c43"><input type="number" name=""  disabled=""/></td>
							<td  class="d43"><input type="number" name="" /></td>
							<td  class="e43"><input type="number" name=""  disabled=""/></td>
							<td  class="f43"><input type="number" name=""  disabled=""/></td>
							<td  class="g43">0.00%</td>
						</tr>
					</table>
				</td>
			</tr>
            <tr>
                <td  class="a44">
				<strong>CEREMONY MUSIC</strong></td>
                <td  class="b44" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td  class="c44 pb_ceremony_music"> 00.00</td>
                <td  class="d44"><input type="number" name=""/></td>
                <td  class="e44">$2,700.00</td>
                <td  class="f44">2.00%</td>
                <td  class="g44">-16.82%</td>
            </tr>
            <tr>
                <td  class="a45">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#reception_music_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>RECEPTION MUSIC</strong></td>
                <td  class="b45"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td  class="c45 pb_reception_music"> 00.00</td>
                <td  class="d45"><input type="number" name="" disabled /></td>
                <td  class="e45">$5,400.00</td>
                <td  class="f45">4.00%</td>
                <td  class="g45">-33.64%</td>
            </tr>
			<tr id="reception_music_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td  class="a46"  style=" width: 240px; ">Cocktail hour</td>
							<td  class="b46"><input type="number" name="" disabled="" /></td>
							<td  class="c46"><input type="number" name="" disabled="" /></td>
							<td  class="d46"><input type="number" name="" /></td>
							<td  class="e46"><input type="number" name="" disabled="" /></td>
							<td  class="f46"><input type="number" name="" disabled="" /></td>
							<td  class="g46">0.00%</td>
						</tr>
						<tr>
							<td class="a47">Reception</td>
							<td class="b47"><input type="number" name=""  disabled=""/></td>
							<td class="c47"><input type="number" name="" disabled="" /></td>
							<td class="d47"><input type="number" name="" /></td>
							<td class="e47"><input type="number" name=""  disabled=""/></td>
							<td class="f47"><input type="number" name="" disabled="" /></td>
							<td class="g47">0.00%</td>
						</tr>
						<tr>
							<td  class="a48">Afterparty</td>
							<td  class="b48"><input type="number" name="" disabled="" /></td>
							<td  class="c48"><input type="number" name="" disabled="" /></td>
							<td  class="d48"><input type="number" name="" /></td>
							<td  class="e48"><input type="number" name="" disabled="" /></td>
							<td  class="f48"><input type="number" name="" disabled="" /></td>
							<td  class="g48">0.00%</td>
						</tr>
					</table>
				</td>
			</tr>
            <tr>
                <td class="a49">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#wedding_cake_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>WEDDING CAKE</strong></td>
                <td class="b49" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c49 pb_wedding_cake"> 00.00</td>
                <td class="d49"><input type="number" name="" disabled /></td>
                <td class="e49">$2,700.00</td>
                <td class="f49">2.00%</td>
                <td class="g49">-16.82%</td>
            </tr>
			<tr id="wedding_cake_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td  class="a50"  style=" width: 240px; ">Cake</td>
							<td  class="b50"><input type="number" name="" disabled="" /></td>
							<td  class="c50"><input type="number" name="" disabled="" /></td>
							<td  class="d50"><input type="number" name="" /></td>
							<td  class="e50"><input type="number" name="" disabled="" /></td>
							<td  class="f50"><input type="number" name="" disabled="" /></td>
							<td  class="g50">0.00%</td>
						</tr>
						<tr>
							<td class="a51">Cutting fee (if applicable)</td>
							<td class="b51"><input type="number" name="" disabled="" /></td>
							<td class="c51"><input type="number" name="" disabled="" /></td>
							<td class="d51"><input type="number" name="" /></td>
							<td class="e51"><input type="number" name="" disabled="" /></td>
							<td class="f51"><input type="number" name="" disabled=""/></td>
							<td class="g51">0.00%</td>
						</tr>
					</table>
				</td>
			</tr>
            <tr>
                <td  class="a52">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#reception_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>RECEPTION (SITE, FOOD, DRINKS)</strong></td>
                <td  class="b52" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td  class="c52 pb_reception">00.00</td>
                <td  class="d52"><input type="number" name=""  disabled/></td>
                <td  class="e52">$56,700.00</td>
                <td  class="f52">42.00%</td>
                <td  class="g52">-353.27%</td>
            </tr>
			<tr id="reception_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td class="a53"   style=" width: 240px; ">Site rental fees</td>
							<td class="b53"><input type="number" name=""  disabled=""/></td>
							<td class="c53"><input type="number" name=""  disabled=""/></td>
							<td class="d53"><input type="number" name="" /></td>
							<td class="e53"><input type="number" name=""  disabled=""/></td>
							<td class="f53"><input type="number" name=""  disabled=""/></td>
							<td class="g53">0.00%</td>
						</tr>
						<tr>
							<td class="a54">Food</td>
							<td class="b54"><input type="number" name=""  disabled=""/></td>
							<td class="c54"><input type="number" name=""  disabled=""/></td>
							<td class="d54"><input type="number" name="" /></td>
							<td class="e54"><input type="number" name=""  disabled=""/></td>
							<td class="f54"><input type="number" name=""  disabled=""/></td>
							<td class="g54">0.00%</td>
						</tr>
						<tr>
							<td class="a55">Drinks</td>
							<td class="b55"><input type="number" name=""  disabled=""/></td>
							<td class="c55"><input type="number" name=""  disabled=""/></td>
							<td class="d55"><input type="number" name="" /></td>
							<td class="e55"><input type="number" name=""  disabled=""/></td>
							<td class="f55"><input type="number" name=""  disabled=""/></td>
							<td class="g55">0.00%</td>
						</tr>
						<tr>
							<td class="a56">Parking</td>
							<td class="b56"><input type="number" name=""  disabled=""/></td>
							<td class="c56"><input type="number" name=""  disabled=""/></td>
							<td class="d56"><input type="number" name="" /></td>
							<td class="e56"><input type="number" name=""  disabled=""/></td>
							<td class="f56"><input type="number" name=""  disabled=""/></td>
							<td class="g56">0.00%</td>
						</tr>
						<tr>
							<td class="a57">Misc labor fees</td>
							<td class="b57"><input type="number" name=""  disabled=""/></td>
							<td class="c57"><input type="number" name=""  disabled=""/></td>
							<td class="d57"><input type="number" name="" /></td>
							<td class="e57"><input type="number" name="" disabled="" /></td>
							<td class="f57"><input type="number" name=""  disabled=""/></td>
							<td class="g57">0.00%</td>
						</tr>
						<tr>
							<td class="a58">Service charge</td>
							<td class="b58"><input type="number" name=""  disabled=""/></td>
							<td class="c58"><input type="number" name="" disabled="" /></td>
							<td class="d58"><input type="number" name="" /></td>
							<td class="e58"><input type="number" name="" disabled="" /></td>
							<td class="f58"><input type="number" name="" disabled="" /></td>
							<td class="g58">0.00%</td>
						</tr>
						<tr>
							<td class="a59">Sales tax</td>
							<td class="b59"><input type="number" name=""  disabled=""/></td>
							<td class="c59"><input type="number" name="" disabled="" /></td>
							<td class="d59"><input type="number" name="" /></td>
							<td class="e59"><input type="number" name=""  disabled=""/></td>
							<td class="f59"><input type="number" name="" disabled="" /></td>
							<td class="g59">0.00%</td>
						</tr>
						<tr>
							<td class="a60">Site fees</td>
							<td class="b60"><input type="number" name="" disabled="" /></td>
							<td class="c60"><input type="number" name=""  disabled=""/></td>
							<td class="d60"><input type="number" name="" /></td>
							<td class="e60"><input type="number" name="" disabled="" /></td>
							<td class="f60"><input type="number" name="" disabled="" /></td>
							<td class="g60">0.00%</td>
						</tr>
					</table>
				</td>
			</tr>
            <tr>
                <td class="a61">
				 <button class="btn  btn-toggler" type="button" data-toggle="collapse" data-target="#flowers__dcor_inner" aria-expanded="false" aria-controls="collapseExample"><span class="hide">-</span><span class="show">+</span></button>
				<strong>FLOWERS / DÉCOR</strong></td>
                <td class="b61" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c61 pb_flowers__dcor">00.00</td>
                <td class="d61"><input type="number" name="" disabled /></td>
                <td class="e61">$16,200.00</td>
                <td class="f61">12.00%</td>
                <td class="g61">-100.93%</td>
            </tr>
			<tr id="flowers__dcor_inner" class="collapse"> 
				<td colspan="7" class="p-0"> 
					<table class="innerItem">  
						<tr>
							<td class="a62"  style=" width: 252px; ">Ceremony flowers</td>
							<td class="b62"><input type="number" name="" disabled="" /></td>
							<td class="c62"><input type="number" name="" disabled="" /></td>
							<td class="d62"><input type="number" name="" /></td>
							<td class="e62"><input type="number" name="" disabled="" /></td>
							<td class="f62"><input type="number" name="" disabled="" /></td>
							<td class="g62">0.00%</td>
						</tr>
						<tr>
							<td class="a63">Altar</td>
							<td class="b63"><input type="number" name="" disabled="" /></td>
							<td class="c63"><input type="number" name="" disabled="" /></td>
							<td class="d63"><input type="number" name="" /></td>
							<td class="e63"><input type="number" name="" disabled="" /></td>
							<td class="f63"><input type="number" name="" disabled="" /></td>
							<td class="g63">0.00%</td>
						</tr>
						<tr>
							<td class="a64">Aisle</td>
							<td class="b64"><input type="number" name="" disabled="" /></td>
							<td class="c64"><input type="number" name="" disabled="" /></td>
							<td class="d64"><input type="number" name="" /></td>
							<td class="e64"><input type="number" name="" disabled="" /></td>
							<td class="f64"><input type="number" name="" disabled="" /></td>
							<td class="g64">0.00%</td>
						</tr>
						<tr>
							<td class="a65">Entrance to aisle</td>
							<td class="b65"><input type="number" name="" disabled="" /></td>
							<td class="c65"><input type="number" name="" disabled="" /></td>
							<td class="d65"><input type="number" name="" /></td>
							<td class="e65"><input type="number" name="" disabled="" /></td>
							<td class="f65"><input type="number" name="" disabled="" /></td>
							<td class="g65">0.00%</td>
						</tr>
						<tr>
							<td class="a66">Sign in table</td>
							<td class="b66"><input type="number" name="" disabled="" /></td>
							<td class="c66"><input type="number" name="" disabled="" /></td>
							<td class="d66"><input type="number" name="" /></td>
							<td class="e66"><input type="number" name="" disabled="" /></td>
							<td class="f66"><input type="number" name="" disabled="" /></td>
							<td class="g66">0.00%</td>
						</tr>
						<tr>
							<td class="a67">Candles</td>
							<td class="b67"><input type="number" name="" disabled="" /></td>
							<td class="c67"><input type="number" name="" disabled="" /></td>
							<td class="d67"><input type="number" name="" /></td>
							<td class="e67"><input type="number" name="" disabled="" /></td>
							<td class="f67"><input type="number" name="" disabled="" /></td>
							<td class="g67">0.00%</td>
						</tr>
						<tr>
							<td class="a68">Aisle runner</td>
							<td class="b68"><input type="number" name="" disabled="" /></td>
							<td class="c68"><input type="number" name="" disabled="" /></td>
							<td class="d68"><input type="number" name="" /></td>
							<td class="e68"><input type="number" name="" disabled="" /></td>
							<td class="f68"><input type="number" name="" disabled="" /></td>
							<td class="g68">0.00%</td>
						</tr>
						<tr>
							<td class="a69">Personal flowers</td>
							<td class="b69"><input type="number" name="" disabled="" /></td>
							<td class="c69"><input type="number" name="" disabled="" /></td>
							<td class="d69"><input type="number" name="" /></td>
							<td class="e69"><input type="number" name="" disabled="" /></td>
							<td class="f69"><input type="number" name="" disabled="" /></td>
							<td class="g69">0.00%</td>
						</tr>
						<tr>
							<td class="a70">Bridal bouquet</td>
							<td class="b70"><input type="number" name="" disabled="" /></td>
							<td class="c70"><input type="number" name="" disabled="" /></td>
							<td class="d70"><input type="number" name="" /></td>
							<td class="e70"><input type="number" name="" disabled="" /></td>
							<td class="f70"><input type="number" name="" disabled="" /></td>
							<td class="g70">0.00%</td>
						</tr>
						<tr>
							<td class="a71">Bridesmaids bouquets</td>
							<td class="b71"><input type="number" name="" disabled="" /></td>
							<td class="c71"><input type="number" name="" disabled="" /></td>
							<td class="d71"><input type="number" name="" /></td>
							<td class="e71"><input type="number" name="" disabled="" /></td>
							<td class="f71"><input type="number" name="" disabled="" /></td>
							<td class="g71">0.00%</td>
						</tr>
						<tr>
							<td class="a72">Boutonnieres</td>
							<td class="b72"><input type="number" name="" disabled="" /></td>
							<td class="c72"><input type="number" name="" disabled="" /></td>
							<td class="d72"><input type="number" name="" /></td>
							<td class="e72"><input type="number" name="" disabled="" /></td>
							<td class="f72"><input type="number" name="" disabled="" /></td>
							<td class="g72">0.00%</td>
						</tr>
						<tr>
							<td class="a73">Grandmother’s flowers</td>
							<td class="b73"><input type="number" name="" disabled="" /></td>
							<td class="c73"><input type="number" name="" disabled="" /></td>
							<td class="d73"><input type="number" name="" /></td>
							<td class="e73"><input type="number" name="" disabled="" /></td>
							<td class="f73"><input type="number" name="" disabled="" /></td>
							<td class="g73">0.00%</td>
						</tr>
						<tr>
							<td class="a74">Mother’s flowers</td>
							<td class="b74"><input type="number" name="" disabled="" /></td>
							<td class="c74"><input type="number" name="" disabled="" /></td>
							<td class="d74"><input type="number" name="" /></td>
							<td class="e74"><input type="number" name="" disabled="" /></td>
							<td class="f74"><input type="number" name="" disabled="" /></td>
							<td class="g74">0.00%</td>
						</tr>
						<tr>
							<td class="a75">Flower girl’s flowers</td>
							<td class="b75"><input type="number" name=""  disabled=""/></td>
							<td class="c75"><input type="number" name=""  disabled=""/></td>
							<td class="d75"><input type="number" name="" /></td>
							<td class="e75"><input type="number" name=""  disabled=""/></td>
							<td class="f75"><input type="number" name=""  disabled=""/></td>
							<td class="g75">0.00%</td>
						</tr>
						<tr>
							<td class="a76">Ring bearer’s flowers</td>
							<td class="b76"><input type="number" name=""  disabled=""/></td>
							<td class="c76"><input type="number" name=""  disabled=""/></td>
							<td class="d76"><input type="number" name="" /></td>
							<td class="e76"><input type="number" name=""  disabled=""/></td>
							<td class="f76"><input type="number" name=""  disabled=""/></td>
							<td class="g76">0.00%</td>
						</tr>
						<tr>
							<td class="a77">Table Centerpieces</td>
							<td class="b77"><input type="number" name=""  disabled=""/></td>
							<td class="c77"><input type="number" name=""  disabled=""/></td>
							<td class="d77"><input type="number" name="" /></td>
							<td class="e77"><input type="number" name=""  disabled=""/></td>
							<td class="f77"><input type="number" name=""  disabled=""/></td>
							<td class="g77">0.00%</td>
						</tr>
						<tr>
							<td class="a78">Cake table florals</td>
							<td class="b78"><input type="number" name=""  disabled=""/></td>
							<td class="c78"><input type="number" name=""  disabled=""/></td>
							<td class="d78"><input type="number" name="" /></td>
							<td class="e78"><input type="number" name=""  disabled=""/></td>
							<td class="f78"><input type="number" name=""  disabled=""/></td>
							<td class="g78">0.00%</td>
						</tr>
						<tr>
							<td class="a79">Bar pieces</td>
							<td class="b79"><input type="number" name=""  disabled=""/></td>
							<td class="c79"><input type="number" name=""  disabled=""/></td>
							<td class="d79"><input type="number" name="" /></td>
							<td class="e79"><input type="number" name=""  disabled=""/></td>
							<td class="f79"><input type="number" name=""  disabled=""/></td>
							<td class="g79">0.00%</td>
						</tr>
						<tr>
							<td class="a80">Stage florals</td>
							<td class="b80"><input type="number" name=""  disabled=""/></td>
							<td class="c80"><input type="number" name=""  disabled=""/></td>
							<td class="d80"><input type="number" name="" /></td>
							<td class="e80"><input type="number" name=""  disabled=""/></td>
							<td class="f80"><input type="number" name=""  disabled=""/></td>
							<td class="g80">0.00%</td>
						</tr>
						<tr>
							<td class="a81">Rental Tables</td>
							<td class="b81"><input type="number" name=""  disabled=""/></td>
							<td class="c81"><input type="number" name=""  disabled=""/></td>
							<td class="d81"><input type="number" name="" /></td>
							<td class="e81"><input type="number" name=""  disabled=""/></td>
							<td class="f81"><input type="number" name=""  disabled=""/></td>
							<td class="g81">0.00%</td>
						</tr>
						<tr>
							<td class="a82">Rental Chairs</td>
							<td class="b82"><input type="number" name=""  disabled=""/></td>
							<td class="c82"><input type="number" name=""  disabled=""/></td>
							<td class="d82"><input type="number" name="" /></td>
							<td class="e82"><input type="number" name=""  disabled=""/></td>
							<td class="f82"><input type="number" name=""  disabled=""/></td>
							<td class="g82">0.00%</td>
						</tr>
						<tr>
							<td class="a83">Rental Ceremony items</td>
							<td class="b83"><input type="number" name=""  disabled=""/></td>
							<td class="c83"><input type="number" name=""  disabled=""/></td>
							<td class="d83"><input type="number" name="" /></td>
							<td class="e83"><input type="number" name=""  disabled=""/></td>
							<td class="f83"><input type="number" name=""  disabled=""/></td>
							<td class="g83">0.00%</td>
						</tr>
						<tr>
							<td class="a84">Rental Tabletop items</td>
							<td class="b84"><input type="number" name=""  disabled=""/></td>
							<td class="c84"><input type="number" name=""  disabled=""/></td>
							<td class="d84"><input type="number" name="" /></td>
							<td class="e84"><input type="number" name=""  disabled=""/></td>
							<td class="f84"><input type="number" name=""  disabled=""/></td>
							<td class="g84">0.00%</td>
						</tr>
						<tr>
							<td class="a85">Seating card tables Linens</td>
							<td class="b85"><input type="number" name=""  disabled=""/></td>
							<td class="c85"><input type="number" name=""  disabled=""/></td>
							<td class="d85"><input type="number" name="" /></td>
							<td class="e85"><input type="number" name=""  disabled=""/></td>
							<td class="f85"><input type="number" name=""  disabled=""/></td>
							<td class="g85">0.00%</td>
						</tr>
						<tr>
							<td class="a86">Cocktail table Linen</td>
							<td class="b86"><input type="number" name=""  disabled=""/></td>
							<td class="c86"><input type="number" name=""  disabled=""/></td>
							<td class="d86"><input type="number" name="" /></td>
							<td class="e86"><input type="number" name=""  disabled=""/></td>
							<td class="f86"><input type="number" name=""  disabled=""/></td>
							<td class="g86">0.00%</td>
						</tr>
						<tr>
							<td class="a87">Ceremony table Linens</td>
							<td class="b87"><input type="number" name=""  disabled=""/></td>
							<td class="c87"><input type="number" name=""  disabled=""/></td>
							<td class="d87"><input type="number" name="" /></td>
							<td class="e87"><input type="number" name=""  disabled=""/></td>
							<td class="f87"><input type="number" name=""  disabled=""/></td>
							<td class="g87">0.00%</td>
						</tr>
						<tr>
							<td class="a88">Guest seating table Linens</td>
							<td class="b88"><input type="number" name=""  disabled=""/></td>
							<td class="c88"><input type="number" name=""  disabled=""/></td>
							<td class="d88"><input type="number" name="" /></td>
							<td class="e88"><input type="number" name=""  disabled=""/></td>
							<td class="f88"><input type="number" name=""  disabled=""/></td>
							<td class="g88">0.00%</td>
						</tr>
						<tr>
							<td class="a89">Cake table Linens</td>
							<td class="b89"><input type="number" name=""  disabled=""/></td>
							<td class="c89"><input type="number" name=""  disabled=""/></td>
							<td class="d89"><input type="number" name="" /></td>
							<td class="e89"><input type="number" name=""  disabled=""/></td>
							<td class="f89"><input type="number" name=""  disabled=""/></td>
							<td class="g89">0.00%</td>
						</tr>  
					</table>
				</td>
			</tr>
            <tr>
                <td class="a90"><strong>TRANSPORTATION</strong></td>
                <td class="b90" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c90 pb_transportation">00.00</td>
                <td class="d90"><input type="number" name="" /></td>
                <td class="e90">$2,700.00</td>
                <td class="f90">2.00%</td>
                <td class="g90">-16.82%</td>
            </tr>
            <tr>
                <td class="a91"><strong>FAVORS</strong></td>
                <td class="b91" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c91 pb_favors">00.00</td>
                <td class="d91"><input type="number" name="" value="1000" /></td>
                <td class="e91">$1,350.00</td>
                <td class="f91">1.00%</td>
                <td class="g91">-8.41%</td>
            </tr>
            <tr>
                <td class="a92"><strong>INSURANCE</strong></td>
                <td class="b92" style="padding-left: 15px;"><select name="" id=""> <option value="yes">Yes</option> <option value="no">no</option> </select></td>
                <td class="c92 pb_insurance"><input type="number" name="" /></td>
                <td class="d92"><input type="number" name="" value="500"/></td>
                <td class="e92"><input type="number" name="" /></td>
                <td class="f92"><input type="number" name="" /></td>
                <td class="g92"><input type="number" name="" /></td>
            </tr>
        </tbody>
    </table>
	</form>
</figure>

</div>
  
  <?php //while(have_posts()): the_post(); the_content(); endwhile; ?>

 <script type="text/javascript"> 
			total_ab = jQuery('.budget_input_amount').val();
			 jQuery('.overage_for_a_splurge_10').html('$' + ((total_ab) * 0.1).toFixed(0)); 
			 jQuery('.available_budget_spend').html('$' + ((total_ab) - (total_ab) * 0.1).toFixed(0)); 
	jQuery('.budget_input_amount').on('keyup',function(){
			total_ab = jQuery(this).val();
			 jQuery('.overage_for_a_splurge_10').html('$' + ((total_ab) * 0.1).toFixed(2)); 
			 jQuery('.available_budget_spend').html('$' + ((total_ab) - (total_ab) * 0.1).toFixed(0)); 
		
	});
	
	jQuery('.budget_settings_page .d90 input').on('keyup', function(){
		
		let d90 =  $(this).val(); 
	});
	jQuery('.b90 select').change(function(){
		
		num = Number($('.d-block .d90 input').val());
		if($('.b90 select').val() == 'no'){
		 	jQuery('.c90').html("$" +'0');	 	
				$('.e90').html("($0)");
			
		}else{
			jQuery('.c90').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()- jQuery('.budget_input_amount').val()/10)/100*2 - num) > 0){
				jQuery('.e90').html("$" + Number(Number( jQuery('.budget_input_amount').val()- jQuery('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				jQuery('.e90').html("($" + Number( num- Number( jQuery('.budget_input_amount').val()- jQuery('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})
 </script>
<?php get_footer();