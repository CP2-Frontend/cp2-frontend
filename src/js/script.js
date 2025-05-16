//DECLARANDO UM ARRAY DE IMAGENS

let imagens =[
    'src/assets/img1.jpg',
    'src/assets/img2.jpg',
    'src/assets/img3.jpg',  
];

//DECLARANDO AS VARIAVEIS

let index =0;
let tempo =3000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow(){

    document.getElementById('image').src =imagens[index];
    index++;
    //VERIFICAR QUANTIDADE DE IMAGENS
    if(index ==imagens.length){
        index=0;
    }
    setTimeout("slideShow()",tempo)
}
//EXECUTA A FUNÇÃO
slideShow();