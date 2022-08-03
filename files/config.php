<?php
return array (
  'nick' => 'Rightads',
  'product' => 
  array (
    'code' => 'carattia_cream_ii',
    'title' => 'Carattia Cream',
    'prices' => 
    array (
      'it_IT' =>
      array (
        'currency' => 'EUR',
        'price' => 69,
        'price_old' => '',
        'price_extended' => 129,
        'price_extended_old' => '',
        'price_shipment' => 9,
        'price_promo' => '',
        'price_extended_promo' => '',
      ),
    ),
  ),
  'lang' => 'it_IT',
  'customs' => 
  array (
    'custom1' => (isset($_GET['custom1']) ? $_GET['custom1'] : null ),
    'custom2' => (isset($_GET['custom2']) ? $_GET['custom2'] : null ),
    'custom3' => (isset($_GET['custom3']) ? $_GET['custom3'] : null ),
    'custom4' => (isset($_GET['custom4']) ? $_GET['custom4'] : null ),
  ),
  'ip' => get_ip(),
  'ua' => get_ua(),
  'url' => '',
  'routing_path' => array('form_big','extension','thx','privacy','contact','gift','voucher','disclaimer'),
  'mobile_sites' => array('form_big'),
  'mode' => 'production',
  'session_type' => 'cookies',
  'relative_path' => true,
  'original_url' => true,
  'disable_https'=> false,
);
