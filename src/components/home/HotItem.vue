<template>
  <div class="hot-item">
    <!-- Start Most Popular -->
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
    <!-- End Most Popular Area -->
  </div>
</template>

<script>
export default {
  name: "HotItem",
  data() {
    return {
      products: [],
    }
  },

  created() {
    this.getAllRecentProdut();

  },

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