namespace Practice.Controllers {

    export class HomeController {
        public productList;
        public product;
        public ProductResource;

        public getProducts() {
            this.productList = this.ProductResource.query();
        }

        public save() {
            this.ProductResource.save(this.product).$promise.then(() => {
                this.product = null;
                this.getProducts();
            });
        }

        constructor($resource: ng.resource.IResourceService) {
            this.ProductResource = $resource('api/products/:id');
            this.getProducts();
        }
    }

}