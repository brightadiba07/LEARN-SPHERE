/* Small JS for responsive topnav (w3schools-style) */
function toggleNav(){
  var nav = document.getElementById("myTopnav");
  if(!nav) return;
  // use classList.toggle for robustness
  var isOpen = nav.classList.toggle('responsive');
  // update aria-expanded on the icon button if present
  var icon = nav.querySelector('.icon');
  if(icon){
    try{ icon.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); }catch(e){}
  }
}

/* Optional: close responsive nav when clicking a link (helpful on mobile) */
// Close responsive nav when clicking a link (helpful on mobile), but
// ignore clicks on the hamburger icon itself so the menu can open.
document.addEventListener('click', function(e){
  var target = e.target;
  var nav = document.getElementById('myTopnav');
  if(!nav) return;
  // If the clicked element is the icon or inside it, do nothing here
  if(target.closest && target.closest('.icon')) return;
  if(target.tagName === 'A' && target.closest('.topnav') && window.innerWidth < 760){
    // collapse the menu
    nav.classList.remove('responsive');
    var icon = nav.querySelector('.icon');
    if(icon) icon.setAttribute('aria-expanded', 'false');
  }
});
