<template>
  <div class="product-description">
      <div class="product-info">
        <div class="nav-main">
          <!-- Tab Nav -->
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews</a></li>
          </ul>
          <!--/ End Tab Nav -->
        </div>
        <div class="tab-content" id="myTabContent">
          <!-- Description Tab -->
          <div class="tab-pane fade show active" id="description" role="tabpanel">
            <div class="tab-single">
              <div class="row">
                <div class="col-12">
                  <div class="single-des">
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto</p>
                  </div>
                  <div class="single-des">
                    <p>Suspendisse consequatur voluptates lorem nobis accumsan natus mattis. Optio pede, optio qui metus, delectus! Ultricies impedit, minus tempor fuga, quasi, pede felis commodo bibendum voluptas nisi? Voluptatem risus tempore tempora. Quaerat aspernatur? Error praesent laoreet, cras in fames hac ea, massa montes diamlorem nec quaerat, quos occaecati leo nam aliquet corporis, ab recusandae parturient, etiam fermentum, a quasi possimus commodi, mollis voluptate mauris mollis, quisque donec</p>
                  </div>
                  <div class="single-des">
                    <h4>Product Features:</h4>
                    <ul>
                      <li>long established fact.</li>
                      <li>has a more-or-less normal distribution. </li>
                      <li>lmany variations of passages of. </li>
                      <li>generators on the Interne.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/ End Description Tab -->
          <!-- Reviews Tab -->
          <div class="tab-pane fade" id="reviews" role="tabpanel">
            <div class="tab-single review-panel">
              <div class="row">
                <div class="col-12">
                  <div class="ratting-main">
                    <div class="avg-ratting">
                      <h4>4.5 <span>(Overall)</span></h4>
                      <span>Based on 1 Comments</span>
                    </div>
                    <!-- Single Rating -->
                    <div class="single-rating">
                      <div class="rating-author">
                        <img src="images/comments1.jpg" alt="#">
                      </div>
                      <div class="rating-des">
                        <h6>Naimur Rahman</h6>
                        <div class="ratings">
                          <ul class="rating">
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star-half-o"></i></li>
                            <li><i class="fa fa-star-o"></i></li>
                          </ul>
                          <div class="rate-count">(<span>3.5</span>)</div>
                        </div>
                        <p>Duis tincidunt mauris ac aliquet congue. Donec vestibulum consequat cursus. Aliquam pellentesque nulla dolor, in imperdiet.</p>
                      </div>
                    </div>
                    <!--/ End Single Rating -->
                    <!-- Single Rating -->
                    <div class="single-rating">
                      <div class="rating-author">
                        <img src="images/comments2.jpg" alt="#">
                      </div>
                      <div class="rating-des">
                        <h6>Advin Geri</h6>
                        <div class="ratings">
                          <ul class="rating">
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                          <div class="rate-count">(<span>5.0</span>)</div>
                        </div>
                        <p>Duis tincidunt mauris ac aliquet congue. Donec vestibulum consequat cursus. Aliquam pellentesque nulla dolor, in imperdiet.</p>
                      </div>
                    </div>
                    <!--/ End Single Rating -->
                  </div>
                  <!-- Review -->
                  <div class="comment-review">
                    <div class="add-review">
                      <h5>Add A Review</h5>
                      <p>Your email address will not be published. Required fields are marked</p>
                    </div>
                    <h4>Your Rating</h4>
                    <div class="review-inner">
                      <div class="ratings">
                        <ul class="rating">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--/ End Review -->
                  <!-- Form -->
                  <form class="form" method="post" action="https://wpthemesgrid.com/themes/eshop/mail/mail.php">
                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>Your Name<span>*</span></label>
                          <input type="text" name="name" required="required" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>Your Email<span>*</span></label>
                          <input type="email" name="email" required="required" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-12 col-12">
                        <div class="form-group">
                          <label>Write a review<span>*</span></label>
                          <textarea name="message" rows="6" placeholder="" ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 col-12">
                        <div class="form-group button5">
                          <button type="submit" class="btn">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <!--/ End Form -->
                </div>
              </div>
            </div>
          </div>
          <!--/ End Reviews Tab -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ProductDescription"
}
</script>

<style scoped>

</style>