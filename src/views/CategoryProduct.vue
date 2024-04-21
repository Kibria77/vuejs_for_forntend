<template>
  <div class="category-product">
    <PageTitle/>
    <!-- Product Style -->
    <section class="product-area shop-sidebar shop section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-12">
            <CategoryLeft/>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <CategoryRight/>
          </div>
        </div>
      </div>
    </section>
    <!--/ End Product Style 1  -->
  </div>
</template>

<script>
  import PageTitle from "@/components/includes/PageTitle";
  import CategoryLeft from "@/components/category/CategoryLeft";
  import CategoryRight from "@/components/category/CategoryRight";

  export default {
    name: "CategoryProduct",
    components:{PageTitle, CategoryLeft, CategoryRight}
  }

</script>

<style scoped>

</style>