def on_gesture_logo_up():
    global indice
    indice = randint(0, 2)
    basic.show_string("" + (lista_testo[indice]))
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_screen_down():
    game.remove_life(1)
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_gesture_screen_up():
    game.add_score(1)
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

indice = 0
lista_testo: List[str] = []
game.start_countdown(30000)
lista_testo = ["CANE", "LAMA", "PUMA"]