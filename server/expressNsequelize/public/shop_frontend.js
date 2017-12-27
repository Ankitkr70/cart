function fetchProducts(done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function createProductCard(product) {
    return $(`<div class="card col-12 col-sm-12 col-md-12 col-lg-3 darkHover" style="">\n' +
        '                <img src="" class="card-img-top">\n' +
        '                <div class="card-body">\n' +
        '                    <h3 class="card-title">\n' +
        '                        ${product.name}\n' +
        '                    </h3>\n' +
        '                    <button class="btn btn-danger">\n' +
        '                        Add to Cart\n' +
        '                    </button>\n' +
        '                    <div class="form-group">\n' +
        '                        <label for="exampleFormControlSelect4">Amount</label>\n' +
        '                        <select class="form-control">\n' +
        '                            <option>aan de sara</option>\n' +
        '                            <option>thoda km</option>\n' +
        '                            <option>ghana na chaheye</option>\n' +
        '                            <option>madi sa bus</option>\n' +
        '                            <option>paiya</option>\n' +
        '                        </select>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>`)
}

$(function () {
    let productList = $('#product-list')
    fetchProducts(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(createProductCard(product))
        }
    })
})