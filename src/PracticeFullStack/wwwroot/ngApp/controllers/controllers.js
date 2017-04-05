var Practice;
(function (Practice) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($resource) {
                this.ProductResource = $resource('api/products/:id');
                this.getProducts();
            }
            HomeController.prototype.getProducts = function () {
                this.productList = this.ProductResource.query();
            };
            HomeController.prototype.save = function () {
                var _this = this;
                this.ProductResource.save(this.product).$promise.then(function () {
                    _this.product = null;
                    _this.getProducts();
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = Practice.Controllers || (Practice.Controllers = {}));
})(Practice || (Practice = {}));
//# sourceMappingURL=controllers.js.map