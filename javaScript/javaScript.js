$(document) .ready(function(){

    $('.locationSectionImg').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeights: true,
        autoplay:true,
        autoplaySpeed: 4000,
        responsive: [

            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }
           
          ]

      });

      $('.instagramImageSection').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeights: true,
        varibleWidhte: true,
        arrows:false,
        dots: true,
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }
           
          ]

      });




      let tooltip = document.querySelector('.tooltip');
      let customers = document.querySelectorAll('.customer');
      let popupBg = document.querySelector('.info_bg');
      let popup = document.querySelector('.info');
      
         
      customers.forEach(customer => {
              customer.addEventListener('click', function() {
                  popup.querySelector('.info_photo').setAttribute('src', this.dataset.photo);
                  popup.querySelector('.info_title').innerText = this.dataset.title;
                  popup.querySelector('.info_text').innerText = this.dataset.description;
                  popupBg.classList.add('active');
              });
  
          customer .addEventListener('mousemove', function(e){
                  tooltip.innerText = this.dataset.title;
                  tooltip.style.top = e.y + 'px';
                  tooltip.style.left = e.x + 'px';                
            });
  
            customer .addEventListener('mouseenter', function(){
              tooltip.style.display = 'block';
            });
  
           customer .addEventListener('mouseleave', function(){
              tooltip.style.display = 'none' ;
            });
           
       });
  
              document.addEventListener('click', (e) => {
                  if(e.target === popupBg) {
                      popupBg.classList.remove('active');
                  }
              });
   
              $('.select').each(function() {
                const _this = $(this),
                    selectOption = _this.find('option'),
                    selectOptionLength = selectOption.length,
                    selectedOption = selectOption.filter(':selected'),
                    duration = 450; // длительность анимации 
            
                _this.hide();
                _this.wrap('<div class="select"></div>');
                $('<div>', {
                    class: 'new-select',
                    text: _this.children('option:disabled').text()
                }).insertAfter(_this);
            
                const selectHead = _this.next('.new-select');
                $('<div>', {
                    class: 'new-select__list'
                }).insertAfter(selectHead);
            
                const selectList = selectHead.next('.new-select__list');
                for (let i = 1; i < selectOptionLength; i++) {
                    $('<div>', {
                        class: 'new-select__item',
                        html: $('<span>', {
                            text: selectOption.eq(i).text()
                        })
                    })
                    .attr('data-value', selectOption.eq(i).val())
                    .appendTo(selectList);
                }
            
                const selectItem = selectList.find('.new-select__item');
                selectList.slideUp(0);
                selectHead.on('click', function() {
                    if ( !$(this).hasClass('on') ) {
                        $(this).addClass('on');
                        selectList.slideDown(duration);
            
                        selectItem.on('click', function() {
                            let chooseItem = $(this).data('value');
            
                            $('select').val(chooseItem).attr('selected', 'selected');
                            selectHead.text( $(this).find('span').text() );
            
                            selectList.slideUp(duration);
                            selectHead.removeClass('on');
                        });
            
                    } else {
                        $(this).removeClass('on');
                        selectList.slideUp(duration);
                    }
                });
            });
    
    
            $('.gallery').fancybox();

            var btn = $('#button');  
            $(window).scroll(function() {     
            if ($(window).scrollTop() > 300) {
            btn.addClass('show');
            } else {
            btn.removeClass('show');
            }
        });
            btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });

          


 });
            
                

  



   