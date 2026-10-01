const modal=document.getElementById('modal'), modalScene=document.getElementById('modalScene'), modalTitle=document.getElementById('modalTitle');
const galleryData={
"Lobby":"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",
"Suite":"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=90",
"Restaurant":"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90",
"Pool":"https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=90",
"Relax zone":"https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1600&q=90"
};
document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{
 const title=btn.dataset.title; modalTitle.textContent=title;
 modalScene.style.backgroundImage=`url("${galleryData[title]}")`; modal.classList.add('open');
}));
document.getElementById('close').onclick=()=>modal.classList.remove('open');
modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};

const pano=document.getElementById('panorama'), scene=document.querySelector('.panorama-scene');
let dragging=false,startX=0,pos=50;
pano.addEventListener('pointerdown',e=>{dragging=true;startX=e.clientX;pano.setPointerCapture(e.pointerId);scene.style.cursor='grabbing'});
pano.addEventListener('pointermove',e=>{if(!dragging)return;let dx=e.clientX-startX;startX=e.clientX;pos=Math.max(0,Math.min(100,pos-dx*.08));scene.style.transform=`translateX(${(50-pos)*1.2}%)`});
pano.addEventListener('pointerup',()=>{dragging=false;scene.style.cursor='grab'});
pano.addEventListener('pointerleave',()=>{dragging=false;scene.style.cursor='grab'});
document.getElementById('tourBtn').onclick=()=>{document.getElementById('tour').scrollIntoView({behavior:'smooth'});setTimeout(()=>{pano.animate([{transform:'scale(1)'},{transform:'scale(1.03)'},{transform:'scale(1)'}],{duration:700})},500)};

document.getElementById('contactForm').addEventListener('submit',e=>{
 e.preventDefault();document.getElementById('success').style.display='block';e.target.reset();
});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.menu')?.click()));
