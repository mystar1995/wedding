<?php
/*
***********************************
 Add Cart Shortcode Checkout Page
***********************************
*/

add_action( 'woocommerce_before_checkout_form', 'cart_on_checkout_page', 5 );
function cart_on_checkout_page() {
if ( is_wc_endpoint_url( 'order-received' ) ) return;
    echo do_shortcode('[woocommerce_cart]');
}

/*
******************************
 Removed add to cart message
******************************
*/

add_filter( 'wc_add_to_cart_message', 'remove_add_to_cart_message' );
function remove_add_to_cart_message() {
    return;
}

/*
************************************
  Cart Page redirect checkout page
************************************
*/
function cart_page_redirect() {
    if ( is_page( 'cart' ) )
    {
        wp_redirect( home_url() );
        die;
    }
}
add_action( 'template_redirect', 'cart_page_redirect' );

/*
***************************************
 Remove some fields from billing form
***************************************
*/

add_filter('woocommerce_billing_fields','remove_billing_fields');
function remove_billing_fields( $fields = array() ) {
    unset($fields['billing_company']);
    unset($fields['billing_address_2']);
    //unset($fields['billing_country']);
    //unset($fields['billing_address_1']);
    //unset($fields['billing_state']);
    //unset($fields['billing_city']);
    //unset($fields['billing_postcode']);
    return $fields;
}

/*
******************************
 Remove checkout review table
******************************
*/
remove_action( 'woocommerce_checkout_order_review', 'woocommerce_order_review', 10 );

/*
******************************
 Change checkout field lable
******************************
*/

add_filter( 'woocommerce_checkout_fields' , 'override_billing_checkout_fields', 20, 1 );
function override_billing_checkout_fields( $fields ) {
    $fields['billing']['billing_phone']['placeholder'] = 'Phone';
    $fields['billing']['billing_email']['placeholder'] = 'Email';
    return $fields;
}

add_filter( 'woocommerce_default_address_fields' , 'rename_checkout_field_province', 9999 );
function rename_checkout_field_province( $fields ) {
    $fields['first_name']['placeholder'] = 'First Name';
    $fields['last_name']['placeholder'] = 'Last Name';

    $fields['state']['label'] = 'State';
    $fields['state']['placeholder'] = 'State';

    $fields['city']['label'] = 'City';
    $fields['city']['placeholder'] = 'City';

    $fields['address_1']['label'] = 'Address';
    $fields['address_1']['placeholder'] = 'Address';

    $fields['postcode']['label'] = 'Zip Code';
    $fields['postcode']['placeholder'] = 'Zip Code';
    return $fields;
}

/*
**************************************
 Billing state field validation added
**************************************
*/

add_filter( 'woocommerce_billing_fields', 'formulare_filter_billing_state', 10, 999 );
function formulare_filter_billing_state( $address_fields ) {
    $address_fields['billing_state']['required'] = true;
    return $address_fields;
}

/*
***************************************
 Change field order from billing form
***************************************
*/

add_filter( 'woocommerce_checkout_fields', 'change_field_order_for_billing_form' );
function change_field_order_for_billing_form( $checkout_fields ) {
    $checkout_fields['billing']['billing_email']['priority'] = 4;
    $checkout_fields['billing']['billing_phone']['priority'] = 5;
    return $checkout_fields;
}

/*
**********************************************
 Remove product image and link from cart page
**********************************************
*/

add_filter( 'woocommerce_cart_item_permalink', '__return_null' );
add_filter( 'woocommerce_cart_item_thumbnail', '__return_false' );

/*
**************************************************
 Remove previous product from cart adding new one
**************************************************
*/

add_filter( 'woocommerce_add_cart_item_data', 'empty_cart', 10,  3);
function empty_cart( $cart_item_data, $product_id, $variation_id )
{
    global $woocommerce;
    $woocommerce->cart->empty_cart();
    return $cart_item_data;
}

/*
*****************************************
 Remove Billing word from checkout page
*****************************************
*/

function customize_wc_errors( $error ) {
    if ( strpos( $error, 'Billing ' ) !== false ) {
        $error = str_replace("Billing ", "", $error);
    }
    return $error;
}
add_filter( 'woocommerce_add_error', 'customize_wc_errors' );

/*
*************************************
 Create extra field in checkout page
*************************************
*/

add_action( 'woocommerce_after_checkout_billing_form', 'display_extra_fields_after_billing_address' , 10, 1 );
function display_extra_fields_after_billing_address () { ?>
    <p class="form-row validate-required">
        <label><?php _e( "Partners First Name: ", "add_extra_fields");?>
            <!--<abbr class="required" title="required">*</abbr>-->
        </label>
        <input type="text" name="partner_fname" class="extra-field input-text" placeholder="Partners First Name">
    </p>

    <p class="form-row validate-required">
        <label><?php _e( "Partners Last Name: ", "add_extra_fields");?>
            <!--<abbr class="required" title="required">*</abbr>-->
        </label>
        <input type="text" name="partner_lname" class="extra-field input-text" placeholder="Partners Last Name">
    </p>

    <div class="form-row gender">
        <label><?php _e( "Gender ", "add_extra_fields");?></label>
        <div class="form-check form-check-inline">
            <input type="radio" id="male" name="gender" value="Male" checked><label for="male">Male</label>
        </div>

        <div class="form-check form-check-inline">
            <input type="radio" id="female" name="gender" value="Female"><label for="female">Female</label>
        </div>

        <div class="form-check form-check-inline">
            <input type="radio" id="other" name="gender" value="Prefer not to respond"><label for="other">Prefer not to respond</label>
        </div>
    </div>

    <p class="form-row wedding-date validate-required">
        <label><?php _e( "Projected Wedding Date: ", "add_extra_fields");?>
            <abbr class="required" title="required">*</abbr>
        </label>
        <input type="date" name="wedding_date" class="extra-field input-text" placeholder="Projected Wedding Date">
    </p>
  <?php
}

/*
************************************
 Add extra field value in database
************************************
*/

add_action( 'woocommerce_checkout_update_order_meta', 'add_order_delivery_date_to_order' , 10, 1);
function add_order_delivery_date_to_order ( $order_id ) {

    if ( isset( $_POST ['gender'] ) &&  '' != $_POST ['gender'] ) {
        add_post_meta( $order_id, '_gender',  sanitize_text_field( $_POST ['gender'] ) );
    }

    if ( isset( $_POST ['partner_fname'] ) &&  '' != $_POST ['partner_fname'] ) {
        add_post_meta( $order_id, '_partner_fname',  sanitize_text_field( $_POST ['partner_fname'] ) );
    }

    if ( isset( $_POST ['partner_lname'] ) &&  '' != $_POST ['partner_lname'] ) {
        add_post_meta( $order_id, '_partner_lname',  sanitize_text_field( $_POST ['partner_lname'] ) );
    }

    if ( isset( $_POST ['wedding_date'] ) &&  '' != $_POST ['wedding_date'] ) {
        add_post_meta( $order_id, '_wedding_date',  sanitize_text_field( $_POST ['wedding_date'] ) );
    }
}

/*
*****************************************
 Add extra field in order email template
*****************************************
*/

/*add_filter( 'woocommerce_email_order_meta_fields', 'add_delivery_date_to_emails' , 10, 3 );
function add_delivery_date_to_emails ( $fields, $sent_to_admin, $order ) {

    if( version_compare( get_option( 'woocommerce_version' ), '3.0.0', ">=" ) ) {
        $order_id = $order->get_id();
    } else {
        $order_id = $order->id;
    }

    $delivery_date = get_post_meta( $order_id, '_gender', true );
    if ( '' != $delivery_date ) {
        $fields[ 'Gender' ] = array(
            'label' => __( 'Gender', 'add_extra_fields' ),
            'value' => $delivery_date,
        );
    }

    $delivery_date = get_post_meta( $order_id, '_partner_fname', true );
    if ( '' != $delivery_date ) {
        $fields[ 'Partners First Name' ] = array(
            'label' => __( 'Partners First Name', 'add_extra_fields' ),
            'value' => $delivery_date,
        );
    }

    $delivery_date = get_post_meta( $order_id, '_partner_lname', true );
    if ( '' != $delivery_date ) {
        $fields[ 'Partners Last Name' ] = array(
            'label' => __( 'Partners Last Name', 'add_extra_fields' ),
            'value' => $delivery_date,
        );
    }

    $delivery_date = get_post_meta( $order_id, '_wedding_date', true );
    if ( '' != $delivery_date ) {
        $fields[ 'Projected Wedding Date' ] = array(
            'label' => __( 'Projected Wedding Date', 'add_extra_fields' ),
            'value' => $delivery_date,
        );
    }
    return $fields;
}*/

/*
*****************************************
 Show an error message for custom field
*****************************************
*/

add_action('woocommerce_checkout_process', 'customised_checkout_field_process');
function customised_checkout_field_process()
{
    /* if ( empty( $_POST['partner_fname'] ) ){
        wc_add_notice( '<strong>Partner First name</strong> is a required field.', 'error' );
    }
    if ( empty( $_POST['partner_lname'] ) ){
        wc_add_notice( '<strong>Partner Last name</strong> is a required field.', 'error' );
    } */
    if ( empty( $_POST['wedding_date'] ) ){
        wc_add_notice( '<strong>Wedding Date</strong> is a required field.', 'error' );
    }
}

/*
********************************************
 Change Checkout title after order received
********************************************
*/

function change_checkout_title_after_order_received( $title, $id ) {
    if ( is_order_received_page() && get_the_ID() === $id ) {
        global $wp;

        $order_id  = apply_filters( 'woocommerce_thankyou_order_id', absint( $wp->query_vars['order-received'] ) );
        $order_key = apply_filters( 'woocommerce_thankyou_order_key', empty( $_GET['key'] ) ? '' : wc_clean( $_GET['key'] ) );

        if ( $order_id > 0 ) {
            $order = wc_get_order( $order_id );
            if ( $order->order_key != $order_key ) {
                unset( $order );
            }
        }

        if ( isset ( $order ) ) {
            $title = sprintf( "Thank you", esc_html( $order->billing_first_name ) );
        }
    }
    return $title;
}
add_filter( 'the_title', 'change_checkout_title_after_order_received', 10, 2 );

/*
*******************************************************************
Display the users first name behalf username in new account email
*******************************************************************
*/
add_filter('pre_user_display_name','default_display_name');
function default_display_name($name) {
    if ( isset( $_POST['billing_first_name'] ) ) {
        $firstname = sanitize_text_field( $_POST['billing_first_name'] );
    }
    $name = $firstname . ' ' . $lastname;
    return $name;
}

/*
**********************************************************
Display extra information data into order from admin side
**********************************************************
*/
function display_extra_info_into_order_data_in_admin( $order ){  ?>
    <div class="order_data_column" id="extra_information" style="width: 300px;">
        <h4><?php _e( 'Additional Information', 'woocommerce' ); ?></h4>
        <div class="extra-info">
        <?php
            echo '<p><strong>' . __( 'Mailing Address' ) . ': </strong>' . get_post_meta( $order->id, '_mailing_address', true ) . '</p>';
            echo '<p><strong>' . __( 'Gender' ) . ': </strong>' . get_post_meta( $order->id, '_gender', true ) . '</p>'; 
            echo '<p><strong>' . __( 'Partners First Name' ) . ': </strong>' . get_post_meta( $order->id, '_partner_fname', true ) . '</p>';
            echo '<p><strong>' . __( 'Partners Last Name' ) . ': </strong>' . get_post_meta( $order->id, '_partner_lname', true ) . '</p>';
            echo '<p><strong>' . __( 'Projected Wedding Date' ) . ': </strong>' . get_post_meta( $order->id, '_wedding_date', true ) . '</p>';?>
        </div>
    </div>
<?php }
add_action( 'woocommerce_admin_order_data_after_order_details', 'display_extra_info_into_order_data_in_admin' );

/*
*********************************
Attached file in custom new order
*********************************
*/
add_filter( 'woocommerce_email_attachments', 'attach_pdf_to_emails', 10, 4 );
function attach_pdf_to_emails( $attachments, $email_id, $order, $email ) {
    $email_ids = array( 'new_order', 'customer_processing_order' );
    if ( in_array ( $email_id, $email_ids ) ) {
        $upload_dir = wp_upload_dir();
        $attachments[] = $upload_dir['basedir'] . "/2020/12/Mad-About-Weddings-x-Kleinfeld-250-Gift-Certificate.pdf";
    }
    return $attachments;
}