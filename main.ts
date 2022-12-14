input.onButtonPressed(Button.A, function () {
    if (Hory > 9) {
        Hory = 9
        basic.showString("" + (textový_seznam[Hory]))
    } else {
        Hory += 1
        basic.showString("" + (textový_seznam[Hory]))
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (Hory < 0) {
        Hory = 0
        basic.showString("" + (textový_seznam[Hory]))
    } else {
        Hory += -1
        basic.showString("" + (textový_seznam[Hory]))
    }
})
let textový_seznam: string[] = []
let Hory = 0
Hory = -1
textový_seznam = [
"KRUSNE H",
"CESKY LES",
"SUMAVA",
"BILE K",
"MORAVSKOSLEZSKE B",
"JESENIKY",
"ORLICKE H",
"KRKONOSE",
"JIZERSKE H",
"LUZICKE H"
]
