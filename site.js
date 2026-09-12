(function(){
    var KEY = 'preferredLang';
    var here = document.documentElement.getAttribute('data-lang');
    try{
          var saved = localStorage.getItem(KEY);
          if(saved && saved !== here && document.body.getAttribute('data-root') === 'true'){
                  var target = document.querySelector('.langbar a[data-lang="'+saved+'"]');
                  if(target){ window.location.replace(target.getAttribute('href')); return; }
          }
    }catch(e){}

   document.querySelectorAll('.langbar a').forEach(function(a){
         a.addEventListener('click', function(){
                 try{ localStorage.setItem(KEY, a.getAttribute('data-lang')); }catch(e){}
         });
   });

   var banner = document.getElementById('cookieBanner');
    var acceptBtn = document.getElementById('cookieAccept');
    try{
          if(banner && !localStorage.getItem('cookieAck')){ banner.hidden = false; }
    }catch(e){ if(banner) banner.hidden = false; }
    if(acceptBtn){
          acceptBtn.addEventListener('click', function(){
                  if(banner) banner.hidden = true;
                  try{ localStorage.setItem('cookieAck','1'); }catch(e){}
          });
    }
})();
