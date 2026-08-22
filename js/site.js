// Sluz.org — local JS only (no CDN)
(function(){
  'use strict';

  // Copy buttons
  function fallbackCopy(text){
    var ta=document.createElement('textarea');
    ta.value=text; ta.setAttribute('readonly','');
    ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try{document.execCommand('copy');}catch(e){}
    document.body.removeChild(ta);
  }
  function doCopy(text){
    if(navigator.clipboard && navigator.clipboard.writeText){
      return navigator.clipboard.writeText(text).catch(function(){ fallbackCopy(text); });
    }
    fallbackCopy(text);
    return Promise.resolve();
  }
  document.addEventListener('click', function(e){
    var btn=e.target.closest('.copy-btn');
    if(!btn) return;
    var sel=btn.getAttribute('data-copy-target');
    var text='';
    if(sel){
      var el=document.querySelector(sel);
      if(el) text=(el.innerText || el.textContent || '').trim();
    } else {
      var shell=btn.closest('[data-code]')||btn.closest('.window');
      var code=shell && shell.querySelector('code, pre');
      if(code) text=(code.innerText || code.textContent || '').trim();
    }
    if(!text) return;
    doCopy(text).then(function(){
      var orig=btn.innerHTML;
      btn.classList.add('is-copied');
      btn.innerHTML='<i class="bi bi-check-lg"></i>';
      btn.setAttribute('aria-label','Copied!');
      try{ btn.title='Copied!'; }catch(_){}
      setTimeout(function(){
        btn.classList.remove('is-copied');
        btn.innerHTML=orig;
        btn.setAttribute('aria-label','Copy to clipboard');
        try{ btn.title=''; }catch(_){}
      }, 1600);
    });
  });

  // Reveal on scroll
  var reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(ent){
        if(ent.isIntersecting){
          ent.target.classList.add('is-visible');
          io.unobserve(ent.target);
        }
      });
    }, {threshold:0.14, rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('is-visible'); });
  }

  // Navbar scrolled state + close mobile menu on anchor click
  var nav=document.getElementById('mainNav');
  function onScroll(){
    if(!nav) return;
    if(window.scrollY > 8) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  var menu=document.getElementById('navMenu');
  if(menu){
    menu.querySelectorAll('a.nav-link').forEach(function(a){
      a.addEventListener('click', function(){
        if(window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none'){
          var inst=bootstrap.Collapse.getInstance(menu);
          if(inst) inst.hide();
        }
      });
    });
  }

  // Activate Bootstrap ScrollSpy if present (uses data attributes on body)
  // No extra JS needed; Bootstrap auto-inits via data-bs-spy.

})();
