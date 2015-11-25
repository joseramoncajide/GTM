function gtm_product(e, t, n, i, r, o, s) {
  products.push({
    name: e,
    id: t,
    price: parseLocalNum(n),
    brand: i,
    category: r,
    list: o,
    position: s
  })
}

function gtm_sim_comprar(e, t, n, i) {
  var r = "Contrato" == e ? "Tarifas/Contrato" : "Tarifas/Tarjeta";
  sessionStorage.setItem("device.unique.price." + t.id, t.price), dataLayer.push({
    tariff_option: e,
    event: "ecommerce.js",
    ecommerce: {
      currencyCode: "EUR",
      add: {
        products: [{
          name: t.name,
          id: t.id,
          price: parseLocalNum(t.price),
          brand: t.brand,
          category: t.category,
          quantity: 1
        }, {
          name: n.name,
          id: n.id,
          price: parseLocalNum(n.price),
          brand: "ygo",
          category: r,
          variant: e,
          quantity: 1,
          dimension13: i
        }]
      }
    }
  })
}

function gtm_flush() {
  (products.length > 0 || promotions.length > 0) && (dataLayer.push({
    event: "ecommerce.js",
    ecommerce: {
      currencyCode: "EUR",
      impressions: products,
      promoView: {
        promotions: promotions
      }
    }
  }), products = [], promotions = [])
}

function gtm_product_click(e, t, n, i, r, o, s) {
  dataLayer.push({
    event: "ecommerce.js",
    ecommerce: {
      click: {
        actionField: {
          list: o
        },
        products: [{
          name: e,
          id: t,
          price: parseLocalNum(n),
          brand: i,
          category: r,
          list: o,
          position: s
        }]
      }
    }
  })
}

function gtm_product_image_click(e) {
  dataLayer.push({
    category: "clicks",
    action: "zoom",
    label: e,
    event: "eventga"
  })
}

function gtm_product_image_select(e) {
  dataLayer.push({
    category: "clicks",
    action: "display_img",
    label: e,
    event: "eventga"
  })
}

function gtm_main_filter(e, t) {
  dataLayer.push({
    category: "clicks",
    action: e,
    label: t,
    event: "eventga"
  })
}

function gtm_filter(e, t) {
  dataLayer.push({
    category: "clicks",
    action: "filter: " + e.toLowerCase(),
    label: t,
    event: "eventga"
  })
}

function gtm_on_product_load(e, t, n, i, r) {
  r = "prepaid" == r ? "Tarifas/Tarjeta" : "postpaid" == r ? "Tarifas/Contrato" : "internet" == r ?
    "Dispositivos/M\xf3dems" : "Dispositivos/Moviles", dataLayer.push({
      ecommerce: {
        detail: {
          products: [{
            name: e,
            id: t,
            price: parseLocalNum(n),
            brand: i,
            category: r,
            list: sessionStorage.getItem(t)
          }]
        }
      }
    })
}

function gtm_lo_quiero(e, t, n, i, r) {
  var o = "Contrato" == e ? "Tarifas/Contrato" : "Tarifas/Tarjeta";
  n.category = "internet" == n.category ? "Dispositivos/M\xf3dems" : "Dispositivos/Moviles", sessionStorage.setItem(
    "device.unique.price." + n.id, n.price);
  var s = [{
    name: n.name,
    id: n.id,
    price: parseLocalNum(n.price),
    brand: n.brand,
    category: n.category,
    variant: t,
    quantity: 1
  }, {
    name: i.name,
    id: i.id,
    price: parseLocalNum(i.price),
    brand: "ygo",
    category: o,
    variant: e,
    quantity: 1,
    dimension13: r
  }];
  sessionStorage.setItem(n.name + i.name, JSON.stringify(s)), dataLayer.push({
    tariff_option: e,
    terminal_option: t,
    event: "ecommerce.js",
    ecommerce: {
      currencyCode: "EUR",
      add: {
        products: s
      }
    }
  })
}

function gtm_remarketing(e, t, n, i, r) {
  var o = {
    ecomm_pagetype: e,
    ecomm_pcat: t.category,
    ecomm_prodid: [t.id, n.id],
    ecomm_totalvalue: parseLocalNum(t.price),
    ecomm_pvalue: [parseLocalNum(t.price), parseLocalNum(n.price)],
    ecomm_pname: [t.name, n.name]
  };
  void 0 !== r && (o.ecomm_paymentstep = r), dataLayer.push({
    google_tag_params: o,
    event: "remarketing"
  })
}

function gtm_remarketing_by_data(e, t) {
  var n = $(".gtm-data"),
    i = ($(".gtm-data").attr("data-tariffpriceeuro") + "," + $(".gtm-data").attr("data-tariffpricecent"), {
      ecomm_pagetype: e,
      ecomm_pcat: n.data("pcat"),
      ecomm_prodid: [n.data("deviceid"), n.data("tariffid")],
      ecomm_totalvalue: parseLocalNum(n.data("device-price")),
      ecomm_pvalue: [parseLocalNum(n.data("device-price")), parseLocalNum(n.data("tariffpriceeuro") + "," + n.data(
        "tariffpricecent"))],
      ecomm_pname: [n.data("devicename"), n.data("tariffname")]
    });
  void 0 !== t && (i.ecomm_paymentstep = t), dataLayer.push({
    google_tag_params: i,
    event: "remarketing"
  })
}

function gtm_info_datalayer_push(e) {
  dataLayer.push({
    ecommerce: {
      checkout: {
        actionField: {
          step: 1,
          option: e
        },
        products: products
      }
    }
  })
}

function gtm_bono_added_or_removed(e, t, n, i) {
  dataLayer.push(i ? {
    event: "ecommerce.js",
    ecommerce: {
      currencyCode: "EUR",
      add: {
        products: [{
          name: t.name,
          id: t.id,
          price: parseLocalNum(t.price),
          brand: "ygo",
          category: "Tarifas/Bonos",
          variant: e,
          quantity: 1,
          dimension13: n
        }]
      }
    }
  } : {
    event: "ecommerce.js",
    ecommerce: {
      currencyCode: "EUR",
      remove: {
        products: [{
          name: t.name,
          id: t.id,
          price: parseLocalNum(t.price),
          brand: "ygo",
          category: "Tarifas/Bonos",
          variant: e,
          quantity: 1,
          dimension13: n
        }]
      }
    }
  })
}

function gtm_promo_code() {
  dataLayer.push({
    event: "ecommerce.js",
    ecommerce: {
      checkout_option: {
        actionField: {
          step: 1,
          option: "cupon"
        }
      }
    }
  })
}

function gtm_get_member() {
  dataLayer.push({
    event: "ecommerce.js",
    ecommerce: {
      checkout_option: {
        actionField: {
          step: 1,
          option: "mgm"
        }
      }
    }
  })
}

function gtm_remove_from_cart(e, t) {
  var n = sessionStorage.getItem(e + t);
  void 0 !== n && dataLayer.push({
    event: "ecommerce.js",
    ecommerce: {
      currencyCode: "EUR",
      remove: {
        products: JSON.parse(n)
      }
    }
  })
}

function gtm_to_summary(e) {
  dataLayer.push({
    event: "ecommerce.js",
    customer_telco: e.telco,
    customer_nationality: e.nationality,
    customer_age: e.age,
    customer_id_type: e.id_type,
    customer_status: e.status,
    customer_address_region: e.region,
    customer_address_city: e.city,
    customer_address_zip: e.zip,
    ecommerce: {
      checkout_option: {
        actionField: {
          step: 1,
          option: e.telco
        }
      }
    }
  })
}

function gtm_send_products() {
  var e = $(".gtm-data"),
    t = "Tarjeta",
    n = "Tarifas/Tarjeta";
  "postpaid" == e.data("tariffpaytype") && (t = "Contrato", n = "Tarifas/Contrato");
  var i = "Numero nuevo";
  switch (e.data("numbertype")) {
    case "mnp_postpaid":
      i = "Portabilidad de Contrato";
      break;
    case "mnp_prepaid":
      i = "Portabilidad de Tarjeta"
  }
  var r = sessionStorage.getItem("device.unique.price." + e.data("deviceid")) || "" + (parseFloat(e.data("device-price")) +
      parseFloat(e.data("device-price-total")) + parseFloat(e.data("device-price-final"))),
    o = {
      name: e.data("tariffname"),
      id: e.data("tariffid"),
      price: parseLocalNum(e.data("tariffpriceeuro") + "," + e.data("tariffpricecent")),
      brand: "ygo",
      category: n,
      variant: t,
      quantity: 1,
      dimension13: i
    };
  location.href.indexOf("/done") > 0 && (o.coupon = 0 == o.id.indexOf("CON") ? "20%DTO-6meses" :
    "Primer-mes-mitad-precio"), products.push({
    name: e.data("devicename"),
    id: e.data("deviceid"),
    price: parseLocalNum(r),
    brand: e.data("devicebrand"),
    category: e.data("device-category"),
    variant: e.data("device-variant"),
    quantity: 1,
    dimension14: "" == e.data("stockwarning") ? "" : e.data("stockwarning").indexOf("LIMIT") > 0 ?
      "Ultimas unidades" : "Sin stock"
  }, o), e.data("bonoadded") && products.push({
    name: e.data("bono-name"),
    id: e.data("bono-id"),
    price: parseLocalNum(e.data("bono-price")),
    brand: "ygo",
    category: "Tarifas/Bonos",
    variant: t,
    quantity: 1
  })
}

function gtm_summary_datalayer_push(e) {
  dataLayer.push({
    ecommerce: {
      checkout: {
        actionField: {
          step: 2,
          option: e
        },
        products: products
      }
    }
  })
}

function gtm_payment_datalayer_push(e) {
  dataLayer.push({
    ecommerce: {
      checkout: {
        actionField: {
          step: 3,
          option: e
        },
        products: products
      }
    }
  })
}

function gtm_to_done_push(e) {
  dataLayer.push({
    ecommerce: {
      checkout: {
        actionField: {
          step: 3,
          option: e
        },
        products: products
      }
    }
  })
}

function gtm_summary_send_fake_payment() {
  dataLayer.push({
    ecommerce: {
      checkout: {
        actionField: {
          step: 3,
          option: ""
        },
        products: products
      }
    }
  })
}

function gtm_done_datalayer(e, t, n) {
  dataLayer.push({
    ecommerce: {
      purchase: {
        actionField: {
          id: e,
          affiliation: "ES - ygo Online Store",
          revenue: t,
          tax: 0,
          shipping: 0,
          coupon: n
        },
        products: products
      }
    },
    event: "transactionComplete"
  })
}
