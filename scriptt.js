//alert("start game");

//get choice, 

//program flow: user-clicks button- get choice - store in variable - display, generate comp choice at random - display - 2 variables - compute score- display score- outcome message

const btn = document.querySelector(".choice");



//varibales for comp and human choice
let human = "";
let comp = "";



function getCompChoice()
{
    let x = Math.floor(Math.random()*3)+1; // gets a ranodm number between 1 2 3 1-rock, 2- paper, 3- scissors
switch(x)
{
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
}
}


function getnum(a)
{
if(a.toLowerCase()=="rock")
return 1;
else if(a.toLowerCase()=="paper")
return 2;
else if(a.toLowerCase()=="scissors")
return 3;
else
return -1;
}


let compscore =0;
let myscore=0;


function getscore(a,b)
{
let x = getnum(a);
let y = getnum(b);
if(x==y)
return "its a tie";
if(x==1 && y==2 || x==3 && y==1 || x==2 && y==3)
{
compscore++;
let res =  `you chose ${human.toLowerCase()} and machine chose ${comp} computer gets a point! ${b} beats ${a.toLowerCase()}!!`;
return res;
}
else
{
myscore++;
let res = `you chose ${human.toLowerCase()} and machine chose ${comp} you get a point! ${a.toLowerCase()} beats ${b}!!`;
return res;
}
}

function winner(a,b)
{

if(a==b)
{
final =  "it was a tie!";

}
a>b? final =  "HOOMAN HAS WON!": final =  "MACHINE HAS WON";


}


function endgame()
{
    end.parentElement.style.display = "flex";
    cont.style.display = "none";
    enddisp.textContent = final;
    scr.textContent = `${myscore} - ${compscore}`;
       

}



//starting
const scr = document.querySelector(".scr");
const cont = document.querySelector(".container");
const st = document.querySelector(".bt");
const end = document.querySelector(".replay");
const enddisp = document.querySelector(".winlose");
const humanScore = document.querySelector(".human");
const compScore = document.querySelector(".machine");
st.addEventListener('click', ()=>
{
    st.parentElement.style.display = "none";
    cont.style.display = "flex";

})

let final = "";

end.addEventListener('click', ()=>{
    end.parentElement.style.display= "none";
    cont.style.display = "flex";
    myscore=0;
    compscore=0;

    humanScore.textContent  = myscore;
    compScore.textContent = compscore;
    
    

    
})


//main logic




const btns = document.querySelectorAll(".choice");
btns.forEach(
    btn=> {
        btn.addEventListener('click', (e)=>
        {
            
            const u = document.querySelector(".yourchoice");
            u.textContent="";

            const compu = document.querySelector(".compchoice");
            compu.textContent = "";

            
    
            human = e.target.className;
            u.textContent = human;
            
           
            comp = getCompChoice();
            compu.textContent = comp;
            let y = getscore(human,comp);
                   
            const out = document.querySelector(".outcome");
            out.textContent = y;

            
            humanScore.textContent  = myscore;
            compScore.textContent = compscore;
            const result = document.querySelector(".result");
            result.textContent = "";

            if(myscore+compscore==5)
            {
                winner(myscore, compscore);
                result.textContent = final;
                endgame(final);
                




            


        }})
        
    }
    
    
)







