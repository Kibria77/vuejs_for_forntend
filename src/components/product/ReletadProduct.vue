<template>
  <div class="related-product">
    <div class="product-area most-popular section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2>Recent Item</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <!-- Start Single Product -->
            <div class="single-product">
              <div class="product-img">
                <a href="product-details.html">
                  <img class="default-img" src="images/products/p15.jpg" alt="#">
                  <img class="hover-img" src="images/products/p16.jpg" alt="#">
                  <span class="out-of-stock">Hot</span>
                </a>
                <div class="button-head">
                  <div class="product-action">
                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                  </div>
                  <div class="product-action-2">
                    <a title="Add to cart" href="#">Add to cart</a>
                  </div>
                </div>
              </div>
              <div class="product-content">
                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                <div class="product-price">
                  <span class="old">$60.00</span>
                  <span>$50.00</span>
                </div>
              </div>
            </div>

            <div class="owl-carousel popular-slider">
              <!-- Start Single Product -->
              <div class="single-product" v-for="(product, key) in products" :key="key">
                <div class="product-img">
                  <router-link :to="{name: 'productDetail'}">
                    <img class="default-img" :src="product.image" alt="#">
                    <img class="hover-img" :src="product.image2" alt="#">
                    <span class="out-of-stock">Hot</span>
                  </router-link>
                  <div class="button-head">
                    <div class="product-action">
                      <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                      <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                      <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                    </div>
                    <div class="product-action-2">
                      <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div class="product-content">
                  <h3><router-link :to="{name: 'productDetail'}">{{product.name}}</router-link></h3>
                  <div class="product-price">
                    <span class="old">TK 60.00</span>
                    <span>TK {{product.selling_price}}</span>
                  </div>
                </div>
              </div>
              <!-- End Single Product -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReletadProduct",

  mounted() {

  },

  methods: {
    getAllRecentProdut()
    {
      this.$http.get('http://localhost/admin-five-update/public/api/get-all-recent-product').then(function (response) {
        this.products = response.body;
      });
    }
  }
}
</script>

<style scoped>

</style>