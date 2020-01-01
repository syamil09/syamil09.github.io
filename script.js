let pendidikan = document.querySelector('.skills .pendidikan .judul_skil');
pendidikan.addEventListener('click',function(){
	let sekolah = document.querySelector('.sekolah');
	let backPend = document.querySelector('.pendidikan');
	sekolah.style.transition="2s";
	backPend.style.transition="2s";
	backPend.classList.toggle('background');
	sekolah.classList.toggle('muncul');
});

let profil = document.querySelector('.skills .profil .judul_skil');
profil.addEventListener('click',function(){
	let profil=document.querySelector('.data');
	let backPend = document.querySelector('.profil');
	profil.style.transition="2s";
	backPend.style.transition="2s";
	backPend.classList.toggle('background');
	profil.classList.toggle('muncul');
});

let kemampuan = document.querySelector('.skills .kemampuan .judul_skil');
kemampuan.addEventListener('click',function() {
	let progress = document.querySelector('.progress');
	let backPend = document.querySelector('.kemampuan');
	progress.style.transition="2s";
	backPend.style.transition="2s";
	backPend.classList.toggle('background');
	progress.classList.toggle('muncul');
});

let hobi = document.querySelector('.skills .hobi .judul_skil');
hobi.addEventListener('click',function () {
	let suka = document.querySelector('.suka');
	let backPend = document.querySelector('.hobi');
	suka.style.transition="2s";
	backPend.style.transition="2s";
	backPend.classList.toggle('background');
	suka.classList.toggle('muncul');
})