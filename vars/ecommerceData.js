function () {

	var ecommerceData = [];
	
	//Measuring Product Impressions
	
	var products = [];

	var a = document.querySelectorAll('[data-product-id]');
	//console.log(a.length);
	
	if(a && a.length > 0) {
		
		for(var i = 0; i < a.length; i++) {
				productName = a[i].getAttribute('data-product-name') ? a[i].getAttribute('data-product-name'): '(not set)',
				productId = a[i].getAttribute('data-product-id') ? a[i].getAttribute('data-product-id'): '(not set)',
				productCategory = a[i].getAttribute('data-product-category') ? a[i].getAttribute('data-product-category') : dataLayer[0]['campaign'],
				productBrand = a[i].getAttribute('data-product-brand') ? a[i].getAttribute('data-product-brand') : 'Tous',
				productVariant = a[i].getAttribute('data-product-variant') ? a[i].getAttribute('data-product-variant') : '(not set)',
				productList = a[i].getAttribute('data-product-list') ? a[i].getAttribute('data-product-list') : '[CAM] ' + dataLayer[0]['campaign'],
				productPosition = i;
			
				products.push({
					'name': productName,       
					'id': productId,
					'category': productCategory,
					'brand': productBrand,
					'variant': productVariant,
					'list': productList,
					'position': productPosition
				})
		}

		ecommerceData.push({
			'impressions': products
		})
		
	} //if

	//Measuring Promotion Impressions

	var promotions = [];
	
	ecommerce_promotions = {
     	 'promotions': promotions 
	};

	var b = document.querySelectorAll('[data-promo-name]');
	//console.log(b.length);
	
	if(b && b.length > 0) {
		
		for(var i = 0; i < a.length; i++) {
				promoName = b[i].getAttribute('data-promo-name') ? b[i].getAttribute('data-promo-name'): '(not set)',
				promoCreative = b[i].getAttribute('data-promo-creative') ? b[i].getAttribute('data-promo-creative'): '(not set)',
				promoPosition = b[i].getAttribute('data-promo-position') ? b[i].getAttribute('data-promo-position') : '(not set)';
			
				promotions.push({
					'name': promoName,       
					'creative': promoCreative,
					'position': promoPosition
				})
		}
		
		ecommerceData.push({
			'promoView': ecommerce_promotions
		})
		
	} //if
 
 
 
 	  var ecommerceData = {
		'ecommerce' : {
			'currencyCode' : 'EUR',
			'impressions': products,
		    'promoView': ecommerce_promotions
		}
	  };
  	
  	return ecommerceData;
  

}