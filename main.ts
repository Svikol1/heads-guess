input.onGesture(Gesture.LogoUp, function () {
    ultimo_indice = lista_testo.length - 1
    indice = randint(0, ultimo_indice)
    basic.showString("" + (lista_testo.removeAt(indice)))
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.addScore(-1)
})
let indice = 0
let ultimo_indice = 0
let lista_testo: string[] = []
lista_testo = [
"CANE",
"LAMA",
"PUMA",
"LEONE",
"GALLO",
"GATTO",
"PESCE",
"SQUALO"
]
game.startCountdown(30000)
