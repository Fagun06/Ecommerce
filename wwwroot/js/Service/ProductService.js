var ProductService = {
    LstProducts: (callback)=> {
        $.get("http://dummyjson.com/products", function (data, status) {
            callback(data);

        })
    },
    SingleProduct: (productID,callback) => {
        $.get("http://dummyjson.com/products/" + productID, function (data, status) {
          //  alert(productID)
            callback(data);

        })
    },
    LoadCategories: (callback) => {
        $.get("http://dummyjson.com/products/categories", function (data, status) {
            callback(data);

        })
    },
    LoadProductByCategory: (CategoryName, callback) => {
        //alert(CategoryName)
        $.get("http://dummyjson.com/products/category/" + CategoryName, function (data, status) {
            callback(data);

        })
    }
}
/*http://localhost:49908/productAPI/listproduct*/