<template>
  <div class="navbar">
    <!-- Header -->
    <header class="header shop">
      <!-- Topbar -->
      <div class="topbar">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
              <!-- Top Left -->
              <div class="top-left">
                <ul class="list-main">
                  <li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
                  <li><i class="ti-email"></i> support@shophub.com</li>
                </ul>
              </div>
              <!--/ End Top Left -->
            </div>
            <div class="col-lg-6 col-md-12 col-12">
              <!-- Top Right -->
              <div class="right-content">
                <ul class="list-main">
                  <li><i class="ti-location-pin"></i> Store location</li>
                  <li><i class="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
                  <li><i class="ti-user"></i> <a href="#">My account</a></li>
                  <li><i class="ti-power-off"></i><a href="login.html#">Login</a></li>
                </ul>
              </div>
              <!-- End Top Right -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Topbar -->
      <div class="middle-inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-12">
              <!-- Logo -->
              <div class="logo">
                <router-link :to="{name: 'home'}"><img src="images/logo.png" alt="logo"></router-link>
              </div>
              <!--/ End Logo -->
              <!-- Search Form -->
              <div class="search-top">
                <div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
                <!-- Search Form -->
                <div class="search-top">
                  <form class="search-form">
                    <input type="text" placeholder="Search here..." name="search">
                    <button value="search" type="submit"><i class="ti-search"></i></button>
                  </form>
                </div>
                <!--/ End Search Form -->
              </div>
              <!--/ End Search Form -->
              <div class="mobile-nav"></div>
            </div>
            <div class="col-lg-8 col-md-7 col-12">
              <div class="search-bar-top">
                <div class="search-bar">
                  <select>
                    <option selected="selected">All Category</option>
                    <option>watch</option>
                    <option>mobile</option>
                    <option>kid’s item</option>
                  </select>
                  <form>
                    <input name="search" placeholder="Search Products Here....." type="search">
                    <button class="btnn"><i class="ti-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-12">
              <div class="right-bar">
                <!-- Search Form -->
                <div class="sinlge-bar">
                  <a href="#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                </div>
                <div class="sinlge-bar">
                  <a href="#" class="single-icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
                </div>
                <div class="sinlge-bar shopping">
                  <a href="#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">2</span></a>
                  <!-- Shopping Item -->
                  <div class="shopping-item">
                    <div class="dropdown-cart-header">
                      <span>2 Items</span>
                      <a href="#">View Cart</a>
                    </div>
                    <ul class="shopping-list">
                      <li>
                        <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                        <a class="cart-img" href="#"><img src="images/product-1.jpg" alt="#"></a>
                        <h4><a href="#">Woman Ring</a></h4>
                        <p class="quantity">1x - <span class="amount">$99.00</span></p>
                      </li>
                      <li>
                        <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                        <a class="cart-img" href="#"><img src="images/product-2.jpg" alt="#"></a>
                        <h4><a href="#">Woman Necklace</a></h4>
                        <p class="quantity">1x - <span class="amount">$35.00</span></p>
                      </li>
                    </ul>
                    <div class="bottom">
                      <div class="total">
                        <span>Total</span>
                        <span class="total-amount">$134.00</span>
                      </div>
                      <a href="checkout.html" class="btn animate">Checkout</a>
                    </div>
                  </div>
                  <!--/ End Shopping Item -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header Inner -->
      <div class="header-inner">
        <div class="container">
          <div class="cat-nav-head">
            <div class="row" v-if="check">
              <div class="col-lg-3">
                <div class="all-category">
                  <h3 class="cat-heading"><i class="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                  <ul class="main-category">
                    <li v-for="(category, key) in categoris" :key="key">
                      <a href="#">{{ category.categori.name}}<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                      <ul class="sub-category">
                        <li v-for="(sub_categoris, key1) in category.sub_categoris" :key="key1">
                          <a href="#">{{ sub_categoris.name }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-9 col-12">
                <div class="menu-area">
                  <!-- Main Menu -->
                  <nav class="navbar navbar-expand-lg">
                    <div class="navbar-collapse">
                      <div class="nav-inner">
                        <ul class="nav main-menu menu navbar-nav">
                          <li class="active"><a href="#">Home<i class="ti-angle-down"></i></a>
                            <ul class="dropdown">
                              <li><a href="index-2.html">Home Ecommerce V1</a></li>
                              <li><a href="index2.html">Home Ecommerce V2</a></li>
                              <li><a href="index3.html">Home Ecommerce V3</a></li>
                              <li><a href="index4.html">Home Ecommerce V4</a></li>
                            </ul>
                          </li>
                          <li><router-link :to="{name: 'categoryProduct'}">Product</router-link></li>
                          <li><a href="#">Service</a></li>
                          <li><a href="#">Shop<i class="ti-angle-down"></i><span class="new">New</span></a>
                            <ul class="dropdown">
                              <li><a href="shop-grid.html">Shop Grid</a></li>
                              <li><a href="shop-list.html">Shop List</a></li>
                              <li><a href="shop-single.html">shop Single</a></li>
                              <li><a href="cart.html">Cart</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Pages<i class="ti-angle-down"></i></a>
                            <ul class="dropdown">
                              <li><a href="about-us.html">About Us</a></li>
                              <li><a href="login.html">Login</a></li>
                              <li><a href="register.html">Register</a></li>
                              <li><a href="mail-success.html">Mail Success</a></li>
                              <li><a href="404.html">404</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Blog<i class="ti-angle-down"></i></a>
                            <ul class="dropdown">
                              <li><a href="blog-grid.html">Blog Grid</a></li>
                              <li><a href="blog-grid-sidebar.html">Blog Grid Sidebar</a></li>
                              <li><a href="blog-single.html">Blog Single</a></li>
                              <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                            </ul>
                          </li>
                          <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <!--/ End Main Menu -->
                </div>
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-12">
                <div class="menu-area">
                  <!-- Main Menu -->
                  <nav class="navbar navbar-expand-lg">
                    <div class="navbar-collapse">
                      <div class="nav-inner">
                        <ul class="nav main-menu menu navbar-nav">
                          <li class="active"><a href="#">Home<i class="ti-angle-down"></i></a>
                            <ul class="dropdown">
                              <li><a href="index-2.html">Home Ecommerce V1</a></li>
                              <li><a href="index2.html">Home Ecommerce V2</a></li>
                              <li><a href="index3.html">Home Ecommerce V3</a></li>
                              <li><a href="index4.html">Home Ecommerce V4</a></li>
                            </ul>
                          </li>
                          <li><router-link :to="{name: 'categoryProduct'}">Product</router-link></li>
                          <li><a href="#">Service</a></li>
                          <li><a href="#">Shop<i class="ti-angle-down"></i><span class="new">New</span></a>
                            <ul class="dropdown">
                              <li><a href="shop-grid.html">Shop Grid</a></li>
                              <li><a href="shop-list.html">Shop List</a></li>
                              <li><a href="shop-single.html">shop Single</a></li>
                              <li><a href="cart.html">Cart</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Pages<i class="ti-angle-down"></i></a>
                            <ul class="dropdown">
                              <li><a href="about-us.html">About Us</a></li>
                              <li><a href="login.html">Login</a></li>
                              <li><a href="register.html">Register</a></li>
                              <li><a href="mail-success.html">Mail Success</a></li>
                              <li><a href="404.html">404</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Blog<i class="ti-angle-down"></i></a>
                            <ul class="dropdown">
                              <li><a href="blog-grid.html">Blog Grid</a></li>
                              <li><a href="blog-grid-sidebar.html">Blog Grid Sidebar</a></li>
                              <li><a href="blog-single.html">Blog Single</a></li>
                              <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                            </ul>
                          </li>
                          <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <!--/ End Main Menu -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/ End Header Inner -->
    </header>
    <!--/ End Header -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      check: true,
      categoris: [],
    }
  },
  created() {
    this.getAllCategory();
    if (this.$route.path == '/')
    {
      this.check = true;
    }
    else {
      this.check = false;
    }
  },

  methods: {
    getAllCategory() {
      this.$http.get('http://localhost/admin-five-update/public/api/all-category').then(function (response) {
        this.categoris = response.body;
      });
    }
  }
}
</script>

<style scoped>

</style>