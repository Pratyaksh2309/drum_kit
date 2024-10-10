for(var i=0;i<7;i++){
    var p=document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
        var moto=this.innerHTML;
        console.log(e);
        make(moto);
        ani(moto);
        
    });
}

document.addEventListener("keydown",function(e){
    make(e.key);
    ani(e.key);
})

function make(key){
    switch(key){
        case 'w':
            var c=new Audio('sounds/crash.mp3');
            c.play();
            break;
        case 'a':
            var k=new Audio('sounds/kick-bass.mp3');
            k.play();
            break;
        case 's':
            var s=new Audio('sounds/snare.mp3');
            s.play();
            break;
        case 'd':
            var t1=new Audio('sounds/tom-1.mp3');
            t1.play();
            break;
        case 'j':
            var t2=new Audio('sounds/tom-2.mp3');
            t2.play();
            break;
        case 'k':
            var t3=new Audio('sounds/tom-3.mp3');
            t3.play();
            break;
        case 'l':
            var t4=new Audio('sounds/tom-4.mp3');
            t4.play();
            break;
        default:
            break;
    }
}

function ani(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(()=>{
        document.querySelector("."+key).classList.remove("pressed");
    },200)
}