<template>
  <div class="product-area">
    <!-- Start Product Area -->
    <div class="product-area section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2>Trending Item</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="product-info">
              <div class="nav-main">
                <!-- Tab Nav -->
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" v-for="(product, key) in products" :key="key">
                    <a class="nav-link active" v-if="key == 0" data-toggle="tab" :href="'man'+key1" role="tab">{{ product.name }}</a>
                    <a class="nav-link" v-else data-toggle="tab" :href="'man'+key100" role="tab">{{ product.name }}</a>
                  </li>
                </ul>
                <!--/ End Tab Nav -->
              </div>
              <div class="tab-content" id="myTabContent">
                <!-- Start Single Tab -->
                <div v-for="(product, key100) in products" :key="key100" class="tab-pane fade show active" :id="'man'+key100" role="tabpanel">
                  <div class="tab-single">
                    <div class="row">
                      <div v-for="(item, key2) in product.products" :key="key2" class="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div class="single-product">
                          <div class="product-img">
                            <a href="">
                              <img class="default-img" :src="item.image" alt="#">
                              <img class="hover-img" :src="item.image2" alt="#">
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
                            <h3><a href="product-details.html">{{  item.name }}</a></h3>
                            <div class="product-price">
                              <span>TK. {{  item.selling_price }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--/ End Single Tab -->
                <!--/ End Single Tab -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Product Area -->
  </div>
</template>

<script>
export default {
  name: "ProductArrea",
  data() {
    return {
      products: [],
    }
  },

  created() {
    this.getAllTradingProduct();
  },

  methods: {
    getAllTradingProduct() {
      this.$http.get('http://localhost/admin-five-update/public/api/get-all-trading-product').then(function (response) {
        this.products = response.body;
        console.log(this.products);
      });
    }
  }
}
</script>

<style scoped>

</style>