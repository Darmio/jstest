window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    let tab  = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a){
            for(let i=a; i<tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }

        }
        hideTabContent(1);

        function showTabContent(b){
            if(tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');  
            }

        }

        info.addEventListener('click', function(event){
           let  tg = event.target;
            if(tg&&tg.classList.contains('info-header-tab')){
                for(let i=0; i<tab.length; i++){
                    if(tg==tab[i]){
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close   = document.querySelector('.popup-close');
      
    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }); 
    
    close.addEventListener('click', function(){
       overlay.style.display = 'none';
       more.classList.remove('more-splash');
       document.body.style.overflow = '';
    });   

    let descTabBtns = document.querySelectorAll('.description-btn');
        
    descTabBtns.forEach(btn => {
       btn.addEventListener('click', function(){
           overlay.style.display = 'block';
           this.classList.add('.more-splash');
       }); 
    });

        
});