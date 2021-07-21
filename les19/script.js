let timerId = setTimeout(sayHello,3000);
clearTimeout(timerId);

timerId = setInterval(sayHello,3000);
clearTimeout(timerId);


function sayHello(){
    console.log('Hello!');
}

timerId = setTimeout(function log() {
    console.log("Hello this");
    setTimeout(log,2000);
});
clearTimeout(timerId);

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

    function myAnimation(){
        let pos = 0;
        let id = setInterval(frame,10);

        function frame(){
            if(pos==300) clearInterval;
            else{
                pos++;
                elem.style.top = pos+'px';
                elem.style.left = pos+'px';
            }
        }
    }

    btn.addEventListener('mouseenter',myAnimation);

   let btnbl = document.querySelector('.btn-block'),
       btns =  btnbl.getElementsByTagName('button');
       
    btnbl.addEventListener('click', function(event){
        if(event.target&& event.target.matches('button.first')){
            console.log('First');
        }
    });
