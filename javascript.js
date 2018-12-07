function calculer(){
    var e=0; 
    var d=0;
    var f=0;
    var c=0;
    var  b=0;
    var a=0;

    
    if(document.getElementById("chek1").checked)
    {
    var p=document.getElementById("pain").value;
    
     a=(p*275)/100;
    }
    if(document.getElementById("chek2").checked)
    {
    var v=document.getElementById("viande").value;
   
    b=(v*180)/100;
    }
    if(document.getElementById("chek3").checked)
    {
    var l=document.getElementById("legume").value;
    
     c=(l*40)/100;
    }
    if(document.getElementById("chek4").checked)
    {
    var ba=document.getElementById("banane").value;
    
     f=ba*116;
    }
    if(document.getElementById("chek5").checked)
    {
    var po=document.getElementById("pomme").value;
   
     d=po*80;
    }
    if(document.getElementById("chek6").checked)
    {
    var y=document.getElementById("yourt").value;
    
    e=y*140;
    }
    
    var somme=0;
     somme=a+b+c+d+e+f;
    
    document.getElementById("resulta").value=somme;
    
}