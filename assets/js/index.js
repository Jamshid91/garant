const headerBurger = document.querySelector('.header-burger'),
      body = document.querySelector('body'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close'),
      headerList = document.querySelectorAll('.menu .header-list')



headerBurger.addEventListener('click', ()=> {
    menu.classList.remove('d-none');
    body.classList.add('overflow-hidden'); 
});
    
menuClose.addEventListener('click', ()=> {
    menu.classList.add('d-none');
    body.classList.remove('overflow-hidden'); 
});

headerList.forEach(list => {
    list.addEventListener('click', () => {
        menu.classList.add('d-none');
        body.classList.remove('overflow-hidden'); 
    });
})

window.onclick = function(e) {
    if(e.target == menu) {
        menu.classList.add('d-none');
        body.classList.remove('overflow-hidden'); 
    }
}


const popular = new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.reviews-slider-next',
        prevEl: '.reviews-slider-prev',
      },
      pagination: {
          el: '.reviews-slide-pagination',
          type: 'fraction',
          renderFraction: function(currentClass, tottalClass) {
              return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
          }
        },

  
      spaceBetween: 20,
      watchOverflow: true,
      
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 2.3,
        },
    }
  });


  jQuery(document).ready(function () {
     
    $(".phone").mask("+380 (99) 999-99-99"); 
   
  
   jQuery('.faq-form__btn').click( function() {
       var form = jQuery(this).closest('form');
       
       if ( form.valid() ) {
           form.css('opacity','.5');
           var actUrl = form.attr('action');

           jQuery.ajax({
               url: actUrl,
               type: 'post',
               dataType: 'html',
               data: form.serialize(),
               success: function(data) {
                   form.html(data);
                   form.css('opacity','1');
                   //form.find('.status').html('форма отправлена успешно');
                   //$('#myModal').modal('show') // для бутстрапа
               },
               error:	 function() {
                    form.find('.status').html('серверная ошибка');
               }
           });
       }
   });

});

