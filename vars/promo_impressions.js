function () {

	var promotions = [];
	
	ecommerce_promotions = {
     	 'promotions': promotions 
	};

	var a = document.querySelectorAll('[data-promo-name]');
	//console.log(a.length);
	
	if(a && a.length > 0) {
		
		for(var i = 0; i < a.length; i++) {
				promoName = a[i].getAttribute('data-promo-name') ? a[i].getAttribute('data-promo-name'): '(not set)',
				promoCreative = a[i].getAttribute('data-promo-creative') ? a[i].getAttribute('data-promo-creative'): '(not set)',
				promoPosition = a[i].getAttribute('data-promo-position') ? a[i].getAttribute('data-promo-position') : '(not set)';
			
				promotions.push({
					'name': promoName,       
					'creative': promoCreative,
					'position': promoPosition
				})
		}
		
	  var ecommerceData = {
		'ecommerce' : {
		  'promoView': ecommerce_promotions
		}
	  };
  	
  	return ecommerceData;
  
  } else {
 
  return undefined;
  
  }
}