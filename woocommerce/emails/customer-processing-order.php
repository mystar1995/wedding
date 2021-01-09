<?php

/**

 * Customer processing order email

 *

 * This template can be overridden by copying it to yourtheme/woocommerce/emails/customer-processing-order.php.

 *

 * HOWEVER, on occasion WooCommerce will need to update template files and you

 * (the theme developer) will need to copy the new files to your theme to

 * maintain compatibility. We try to do this as little as possible, but it does

 * happen. When this occurs the version of the template file will be bumped and

 * the readme will list any important changes.

 *

 * @see https://docs.woocommerce.com/document/template-structure/

 * @package WooCommerce\Templates\Emails

 * @version 3.7.0

 */



if ( ! defined( 'ABSPATH' ) ) {

	exit;

}



/*

 * @hooked WC_Emails::email_header() Output the email header

 */

do_action( 'woocommerce_email_header', $email_heading, $email ); ?>



<?php /* translators: %s: Customer first name */ ?>

<p><?php printf( esc_html__( 'Hi %s,', 'woocommerce' ), esc_html( $order->get_billing_first_name() ) ); ?></p>

<?php /* translators: %s: Order number */ ?>

<p><?php esc_html_e( 'Welcome to the MAD About Weddings family, we’re so excited you’re here! ', 'woocommerce' ); ?></p>

<p><?php esc_html_e( 'With over 30 years of experience planning weddings, we know that it can be an incredibly stressful time. So thank you for trusting in us to coach you and your partner through the wedding planning process!', 'woocommerce' ); ?></p>

<p><?php esc_html_e( 'As a thank you, the team at MAD About Weddings has partnered with Kleinfeld Bridal to offer you an exclusive $250 gift card to help you find the dress of your dreams. Please see the exclusive offer attached.', 'woocommerce' ); ?></p>

<p>Now, your special day is quickly approaching and there’s lots to review... so let’s jump right into things! <a href="<?php echo site_url();?>" target="_blank">Click here</a> to start your first module on the foundations of wedding planning!</p>



<?php



/*

 * @hooked WC_Emails::order_details() Shows the order details table.

 * @hooked WC_Structured_Data::generate_order_data() Generates structured data.

 * @hooked WC_Structured_Data::output_structured_data() Outputs structured data.

 * @since 2.5.0

 */

do_action( 'woocommerce_email_order_details', $order, $sent_to_admin, $plain_text, $email );



/*

 * @hooked WC_Emails::order_meta() Shows order meta data.

 */

do_action( 'woocommerce_email_order_meta', $order, $sent_to_admin, $plain_text, $email );



/*

 * @hooked WC_Emails::customer_details() Shows customer details

 * @hooked WC_Emails::email_address() Shows email address

 */

do_action( 'woocommerce_email_customer_details', $order, $sent_to_admin, $plain_text, $email );



/**

 * Show user-defined additional content - this is set in each email's settings.

 */

if ( $additional_content ) {

	echo wp_kses_post( wpautop( wptexturize( $additional_content ) ) );

}



/*

 * @hooked WC_Emails::email_footer() Output the email footer

 */

do_action( 'woocommerce_email_footer', $email );

