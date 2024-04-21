<template>
  <div class="product-gallary">
    <!-- Product Slider -->
    <div class="product-gallery">
      <!-- Images slider -->
      <div class="flexslider-thumbnails">
        <ul class="slides">
          <li data-thumb="images/bx-slider1.jpg" rel="adjustX:10, adjustY:">
            <img src="images/bx-slider1.jpg" alt="#">
          </li>
          <li data-thumb="images/bx-slider2.jpg">
            <img src="images/bx-slider2.jpg" alt="#">
          </li>
          <li data-thumb="images/bx-slider3.jpg">
            <img src="images/bx-slider3.jpg" alt="#">
          </li>
          <li data-thumb="images/bx-slider4.jpg">
            <img src="images/bx-slider4.jpg" alt="#">
          </li>
        </ul>
      </div>
      <!-- End Images slider -->
    </div>
    <!-- End Product slider -->
  </div>
</template>

<script>
export default {
  name: "ProductGallary",

  methods() {}
}
</script>

<style scoped>

</style>