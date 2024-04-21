<template>
  <div class="product-basic">
      <div class="product-des">
        <!-- Description -->
        <div class="short">
          <h4>Nonstick Dishwasher PFOA</h4>
          <div class="rating-main">
            <ul class="rating">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-half-o"></i></li>
              <li class="dark"><i class="fa fa-star-o"></i></li>
            </ul>
            <a href="#" class="total-review">(102) Review</a>
          </div>
          <p class="price"><span class="discount">$70.00</span><s>$80.00</s> </p>
          <p class="description">eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in</p>
        </div>
        <!--/ End Description -->
        <!-- Color -->
        <div class="color">
          <h4>Available Options <span>Color</span></h4>
          <ul>
            <li><a href="#" class="one"><i class="ti-check"></i></a></li>
            <li><a href="#" class="two"><i class="ti-check"></i></a></li>
            <li><a href="#" class="three"><i class="ti-check"></i></a></li>
            <li><a href="#" class="four"><i class="ti-check"></i></a></li>
          </ul>
        </div>
        <!--/ End Color -->
        <!-- Size -->
        <div class="size">
          <h4>Size</h4>
          <ul>
            <li><a href="#" class="one">S</a></li>
            <li><a href="#" class="two">M</a></li>
            <li><a href="#" class="three">L</a></li>
            <li><a href="#" class="four">XL</a></li>
            <li><a href="#" class="four">XXL</a></li>
          </ul>
        </div>
        <!--/ End Size -->
        <!-- Product Buy -->
        <div class="product-buy">
          <div class="quantity">
            <h6>Quantity :</h6>
            <!-- Input Order -->
            <div class="input-group">
              <div class="button minus">
                <button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                  <i class="ti-minus"></i>
                </button>
              </div>
              <input type="text" name="quant[1]" class="input-number"  data-min="1" data-max="1000" value="1">
              <div class="button plus">
                <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                  <i class="ti-plus"></i>
                </button>
              </div>
            </div>
            <!--/ End Input Order -->
          </div>
          <div class="add-to-cart">
            <a href="#" class="btn">Add to cart</a>
            <a href="#" class="btn min"><i class="ti-heart"></i></a>
            <a href="#" class="btn min"><i class="fa fa-compress"></i></a>
          </div>
          <p class="cat">Category :<a href="#">Clothing</a></p>
          <p class="availability">Availability : 180 Products In Stock</p>
        </div>
        <!--/ End Product Buy -->
      </div>
  </div>
</template>

<script>
export default {
  name: "ProductBasic"
}
</script>

<style scoped>

</style>