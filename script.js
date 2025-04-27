console.log("welcome to the game of rock paper scissors! are you ready?");
while(prompt("enter y to start the game")!=="y")
{
continue;
}


function getchoice()
{
ch = prompt("enter ur choice");



}
function getcomp()
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

function getscore(a,b)
{
let x = getnum(a);
let y = getnum(b);



if(x==y)
return;
if(x==1 && y==2 || x==3 && y==1 || x==2 && y==3)
{
compscore++;
console.log(`you chose ${ch.toLowerCase()} and machine chose ${com} `);
console.log(`computer gets a point! ${b} beats ${a.toLowerCase()}!!`);
return;


}
else
{
myscore++;
console.log(`you chose ${ch.toLowerCase()} and machine chose ${com} `);
console.log(`you get a point! ${a.toLowerCase()} beats ${b}!!`);
return;
}
}

function winner(a,b)
{
if(a==b)
{
console.log("it was a tie!");
return;
}
a>b?console.log("HOOMAN HAS WON!"): console.log("MACHINE HAS WON");
return;

}

let myscore=0;
let compscore = 0;
let ch;
let com;

while((myscore+compscore)<5)
{
setTimeout(getchoice(), 3000);
console.log(getnum(ch));
if(getnum(ch)==-1)
{
alert("invalid choice");
continue;
}

com = getcomp();

if(getnum(com)==-1)
{
alert ("wth");
}
getscore(ch, com);

console.log(`score: ${myscore} - ${compscore}   `);
}

winner(myscore, compscore);
