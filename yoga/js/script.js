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

    
    //FORM
    let message = {
        loading:"Loading...",
        success:"Thanks, all finished OK",
        failure:"Something error"

    };

    let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    form.addEventListener('submit', function(ev){
       ev.preventDefault();
       form.appendChild(statusMessage);
       let request = new XMLHttpRequest();
       request.open('GET','server.php');
       //request.setRequestHeader('Content-type','application-x-www-form-urlencoded');
       request.setRequestHeader('Content-type','application/json; charset=utf-8;');

       let formData = new FormData(form);
       let obj = {};
       formData.forEach(function(value,key){ obj[key]=value; });
       let json = JSON.stringify(obj); 
       //request.send(formData);
       request.send(json);

       request.addEventListener('readystatechange', function () {
          if(request.readyState<4){
              statusMessage.innerHTML = message.loading;
          }else if(request.readyState===4 && request.status==200){
              statusMessage.innerHTML = message.success;   
          }else statusMessage.innerHTML = message.failure;
       })

       for(let i =0; i<input.length; i++){
           input[i].value='';
       }

    })
    

});