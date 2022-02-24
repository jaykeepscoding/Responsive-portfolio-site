var x = document.getElementById("menuList");

function toggleMenu(){
  if (x.style.maxHeight == '0px')
  {
      x.style.maxHeight = '130px';
  }
  else
  {
      x.style.maxHeight = '0px';
  }
}