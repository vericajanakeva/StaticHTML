function transform($value){
  document.getElementById($value).style.background= "#bbdefb";
  document.getElementById($value).querySelector("i").className = "fa fa-check-square";
  document.getElementById($value).querySelector("i").style.color = "green";
}
