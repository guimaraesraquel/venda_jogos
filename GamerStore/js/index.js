//Seleção de elementos para modificações
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const container1 = document.getElementById('container-imagens');
const container2 = document.getElementById('container-imagens2');
const links = document.querySelectorAll('#link');
console.log(links);


//Função para troca das páginas de imagens
function trocarPagina() {
    if(container1.style.display === 'flex') {
        container2.style.display = 'flex';
        container1.style.display = 'none';
    }
    else {
        container1.style.display = 'flex';
        container2.style.display = 'none';
    }
}



//Eventos click dos botões
btnNext.addEventListener('click', trocarPagina);
btnPrev.addEventListener('click', trocarPagina);



//Eventos mouseover/mouseout dos botões
btnNext.addEventListener('mouseover', ()=> {
    btnNext.style.transform = 'scale(1.10)';
    btnNext.style.background = 'linear-gradient(to right, rgba(70, 66, 66, 0.233), rgb(159, 159, 168))';
});

btnNext.addEventListener('mouseout', ()=> {
    btnNext.style.transform = 'scale(1)';
    btnNext.style.background = 'linear-gradient(to right, rgba(110, 104, 104, 0.233), rgb(123, 123, 134))';
});

btnPrev.addEventListener('mouseover', ()=> {
    btnPrev.style.transform = 'scale(1.10)';
    btnPrev.style.background = 'linear-gradient(to right, rgba(70, 66, 66, 0.233), rgb(159, 159, 168))';
});

btnPrev.addEventListener('mouseout', ()=> {
    btnPrev.style.transform = 'scale(1)';
    btnPrev.style.background = 'linear-gradient(to right, rgba(110, 104, 104, 0.233), rgb(123, 123, 134))';
});

links.forEach(link => {
    link.addEventListener('mouseover', ()=> {
        link.classList.add('links');
    });
    link.addEventListener('mouseout', ()=> {
        link.classList.remove('links');
    });
});



