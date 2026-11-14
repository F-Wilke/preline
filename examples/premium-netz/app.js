const availability=document.querySelector('#availability-form');
availability.addEventListener('submit',event=>{
  event.preventDefault();
  if(!availability.reportValidity()) return;
  const data=new FormData(availability);
  const url=new URL('https://premium-netz.de/verfugbarkeit/');
  // Only use the existing site's known query parameters; the street can be entered there.
  url.searchParams.set('plz',data.get('plz').trim());
  url.searchParams.set('ort',data.get('ort').trim());
  url.searchParams.set('noautosubmit','1');
  window.location.assign(url.href);
});
const codes={Rosengarten:'21224',Dohren:'21255',Heidenau:'21258',Wistedt:'21255'};
document.querySelectorAll('[data-region]').forEach(button=>button.addEventListener('click',()=>{
  availability.elements.ort.value=button.dataset.region;
  availability.elements.plz.value=codes[button.dataset.region];
  document.querySelector('#verfuegbarkeit').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  availability.elements.strasse.focus({preventScroll:true});
}));
const log=document.querySelector('#chat-log');
function message(text,outgoing=false){
  const el=document.createElement('p');
  el.className=`chat-message${outgoing?' outgoing':''}`;
  el.textContent=text;
  log.append(el); log.scrollTop=log.scrollHeight;
}
function reply(text){
  message(text,true);
  let response='Dies ist ein Designbeispiel mit vorbereiteten Antworten. Für persönliche Unterstützung besuchen Sie premium-netz.de/kontakt/.';
  if(/verfüg|adresse|anschluss|internet/i.test(text)) response='Ob Ihr Zuhause bereits angeschlossen werden kann, erfahren Sie in der Verfügbarkeitsprüfung auf dieser Seite. Die Prüfung führt zur bestehenden Premium-Netz-Website.';
  else if(/ausbau|region|gebiet/i.test(text)) response='Wir bringen Glasfaser in die Region, zum Beispiel nach Rosengarten, Dohren, Heidenau und Wistedt. Den aktuellen Stand finden Sie unter premium-netz.de/gebiete/.';
  else if(/vertrag|rechnung|hilfe|kunde/i.test(text)) response='Ihre persönlichen Vertragsinformationen finden Sie im Kundenbereich. Bei Fragen hilft der Kundenservice: premium-netz.de/kontakt/.';
  message(response);
}
document.querySelectorAll('[data-topic]').forEach(button=>button.addEventListener('click',()=>reply(button.dataset.topic)));
document.querySelector('#chat-form').addEventListener('submit',event=>{event.preventDefault();const input=document.querySelector('#chat-input');const value=input.value.trim();if(value){reply(value);input.value='';}});
