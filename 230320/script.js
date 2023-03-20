$(function() {
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  // category Accordian 
  $('.category-accordian .detail').eq(0).show();
  $('.category-accordian .title').click(function() {
    $(this).next().stop().slideDown();
    $(this).siblings('.category-accordian .title').next().stop().slideUp();

    $(this).addClass('active');
    $(this).siblings('.category-accordian .title').removeClass('active');
  });

  // Recent Search Result
  $('.search-recent .btn-clear').click(function() {
    $(this).parent().hide();
  });
  $('.search-recent .btn-all-clear').click(function() {
    $('.search-recent .item').hide();
  });

  //Cart items
  $('.cart-item .btn-clear').click(function() {
    $(this).parent().parent().hide();
  });
  $('.cart-items-header .btn-all-clear').click(function() {
    $('.cart-item').hide();
  });

  // Front Slider
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScrall: 1
  });

  // Goods-Suggestion Slider
  $('.goods-suggestion-items').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    slidesToScrall: 2
  });

  // Badge Wish
  $('.wish').click(function() {
    $(this).toggleClass('active');
  });

  // Front Footer Veiw more
  $('.btn-view-more').click(function() {
    $('.company-info-more').toggle();
  });

  // Goods detial slider
  $('.goods-detail-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    slidesToScrall: 1
  });
});