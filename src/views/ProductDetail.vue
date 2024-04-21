<template>
  <div class="product-detail">
    <PageTitle/>
    <!-- Shop Single -->
    <section class="shop single section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-lg-6 col-12">
                <!-- Product Slider -->
                <ProductGallary/>
                <!-- End Product slider -->
              </div>
              <div class="col-lg-6 col-12">
                <ProductBasic/>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <ProductDescription/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ End Shop Single -->
    <ReletadProduct/>
  </div>
</template>

<script>
  import PageTitle from "@/components/includes/PageTitle";
  import ProductGallary from "@/components/product/ProductGallary";
  import ProductBasic from "@/components/product/ProductBasic";
  import ProductDescription from "@/components/product/ProductDescription";
  import ReletadProduct from "@/components/product/ReletadProduct";

  export default {
    name: "ProductDetail",
    components: {PageTitle, ProductGallary, ProductBasic, ProductDescription, ReletadProduct}
  }

</script>

<style scoped>

</style>