var $ = id => document.getElementById(id);
function validateForm(index) {
  var value = $('js-select-size-'+index).value;
  if(value === '') {
    $('js-error-'+index).style.display = 'block';
    return false;
  }
  return true;
}

(function(){

  document.addEventListener("DOMContentLoaded", function() {

    fetchAPI().then(function(response){
      response.forEach(function(e, i) {
        $('js-product-'+(i+1)).innerHTML = `
          <div class="product-card">
            <form id="js-ropa-form-${(i+1)}" onsubmit="return validateForm(${i})" action="">
              <img src="${e.thumbnail}" alt="${e.featuredImageAlt}" />
              <h2>${e.featuredImageAlt}</h2>
              <div>
              <select name="" id="js-select-size-${i}">
                <option value="">Talla</option>
                <option value="34">34</option>
                <option value="30">30</option>
              </select>
              <input type="submit" value="Comprar" />
              </div>
              <div class="error-message" id="js-error-${i}" style="display: none">Error error error!!!</div>
            </form>
          </div>
          `;
      })
    })

  });

  function fetchAPI() {
    return Promise.resolve(
      [
        {
          title : "Camisa",
          url : "/collections/todos-los-productos/products/camisa-2160401",
          thumbnail: "http://cdn.shopify.com/s/files/1/1478/0028/products/2160401_c_thumb.jpg?v=1476472616",
          featuredImage: "http://cdn.shopify.com/s/files/1/1478/0028/products/2160401_c_large.jpg?v=1476472616",
          featuredImageAlt: "Camisa",
          collectionIds: "346360326,348653254,350108870",
          hasColor: false,
          reference: "2160401-12M-18",
          soldOut: false,
          onSale: false,
          inherit: true,
          priceVaries: false,
          beforePrice: "",
          priceVariation: "$74.900", "price": "$74.900", "id": 8763511238
        },
        {
          title : "Camisa",
          url : "/collections/todos-los-productos/products/camisa-2160414",
          thumbnail: "http://cdn.shopify.com/s/files/1/1478/0028/products/2160414_c_thumb.jpg?v=1476472617",
          featuredImage: "http://cdn.shopify.com/s/files/1/1478/0028/products/2160414_c_large.jpg?v=1476472617",
          featuredImageAlt: "Camisa",
          collectionIds: "346360326,348652294,350108870",
        }
      ]
    )
  }
}());
