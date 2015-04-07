function() {

	var products = [];

	var a = document.querySelectorAll('[data-product-id]');
	console.log(a.length);
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
		
  var ecommerceData = {
    'ecommerce' : {
      currencyCode : 'EUR',
      'impressions': products
    }
  };
console.log("Macro");
console.log(products);
console.log(ecommerceData);
  return ecommerceData;
}