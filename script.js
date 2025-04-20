

text1 = "Eu poderia te escrever uma carta física mas a minha letra é muito feia :("
text2 = "Eu poderia até tentar imprimir algumas coisas ou sei lá, fazer recortes de jornal, mas apesar de um pouco artista, o meu negócio mesmo é os códigos"
text3 = "Eu também não sei como colocar essas quatro cores que você me deu de forma harmônica no design dessa página"
text4 = "Mas apesar de minha letra ser feia"
text5 = "Eu ser meio preguiçoso (as vezes demais da conta)"
text6 = "E eu não ser tão bom assim em Web Design"
text7 = "Eu vivo com a máxima filosófica que moldou grande parte do meu pensamento até então"
text8 = "Ela diz: 'Não eleve a certeza tanto ao ponto de torná-la absoluta, para que não caia na ignorância, mas não se permita a incerteza para que não se entristeça'"
text9 = "Eu levo muitas poucas certezas em minha vida"
text10 = "A primeira certeza é que estou vivo"
text11 = "A segunda certeza é que irei morrer"
text12 = "E a terceira certeza é que foi uma enorme alegria te conhecer e ter a sua amizade antes que a segunda certeza se concretizasse"
text13 = "Muito obrigado mesmo, por ser meu amigo na primeira certeza"
text14 = "A tua criatividade, compreensão e as vezes maluquice KKKKKKKKJ me traz profunda felicidade e certamente torna o mundo muito menos infeliz do que ele é"
text15 = "Feliz aniversário maninho! Que eu possa continuar tendo sempre na primeira certeza a sua companheiresca amizade até que a segunda certeza me dê o descanso"
text16 = "(ps: talvez a próxima cor seja rosa)"
text17 = "(ps: talvez agora seja preto)";
text18 = "(ps: e agora vai ser vermelho pastel?)";
text19 = "(ps: e agora é a branca?)";

const colors = ["pink", "black", "#ff6961", "white"]
const text_arr = [
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    text11,
    text12,
    text13,
    text14,
    text15,
    text16,
    text17,
    text18,
    text19,
]

let current_text = 0
let current_color = 0

function changeColor() {
    document.body.style.setProperty("--body-content-color", colors[current_color])

    current_color = (current_color + 1) % colors.length

    document.body.style.setProperty("--btn-color", colors[current_color])

    if (colors[current_color] === "black") {
        document.body.style.setProperty("--btn-border", "white")
        document.body.style.setProperty("--text-color", "white")
    } else {
        document.body.style.setProperty("--btn-border", "black");
        document.body.style.setProperty("--text-color", "black");
    }
}

function changeText() {
    document.getElementById('text').innerHTML = text_arr[current_text]

    
    current_text = (current_text + 1) % text_arr.length;
}