
var tortoise=1; 
var hare=1;
var tortoise_before=1; 
var hare_before=1;
var startButton = document.getElementById("buttonid");



function tortoise_run() 
{
    var rand=Math.floor(Math.random() * 10);

    if(tortoise<1)
    {
        tortoise=1;
    }

    if(rand>=1 && rand<=5)
    {
        tortoise=tortoise + 3;
        tortoise_before= tortoise;

    }
    if(rand==6 || rand==7)
    {
        tortoise=tortoise - 6;
        tortoise_before= tortoise;
    }
    if(rand==8 || rand==9 || rand==10)
    {
        tortoise=tortoise + 1;
        tortoise_before= tortoise;
    }

}

function hare_run()
{
    var rand2=Math.floor(Math.random()*10);

    if(rand2==1 || rand2==2)
    {
        hare=hare + 0;
    }
    if(rand2==3 || rand2==4)
    {
        hare=hare + 9;
    }
    if(rand2==5)
    {
        hare=hare - 12;
    }
    if(rand2 ==6 || rand2==7 || rand2==8)
    {
        hare=hare + 1;
    }
    if(rand2== 9 || rand2==10)
    {
        hare=hare - 2;
    }

    
    startButton.addEventListener('click', hare_run, false);
    startButton.addEventListener('click', tortoise_run, false);

    
}


function pobednik()
{
    tortoise_run();
    hare_run();

        if(tortoise>=70)
        {
            window.alert("The race is finished,the tortoise won");
        }
        else if(hare>=70)
        {
            window.alert("The race is finished, the hare won");
        }
    }

    var harepic=document.createElement("img");

    harepic.setAttribute("src","zajak.jpg");
    var tortoisepic=document.createElement("img");
    tortoisepic.setAttribute("src","zelka.jpg");
    var div1=document.getElementById("div1");

let counter = 0;
let timeout;
let timer_on = 0;

function timedCount() {
  document.getElementById("demo").value = counter;
  counter++;
  timeout = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}

