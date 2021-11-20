var pokemon_names=[];
function submition(){
    var name1=document.getElementById("Pokemon1").value;
    pokemon_names.push(name1);  
    document.getElementById("pk_names").innerHTML=pokemon_names.toString();
    document.getElementById("pk2").style.display="inline-block";
}
function organize(){
    var i=pokemon_names.join("<br>");
    document.getElementById("pk2_names").innerHTML=i.toString();

}
function finding() {
    var s=document.getElementById("find").value;
var d=0;
 for(var j=0;j<pokemon_names.length;j++) {
     if(s==pokemon_names[j]){
         d=d+1;
     }
 } 
 document.getElementById("pk3_names").innerHTML="name found "+d+ " times";
}