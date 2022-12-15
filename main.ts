input.onButtonPressed(Button.A, function () {
    if (Prepni == 1) {
        if (Hory > 9) {
            Hory = 9
            basic.showString("" + (textový_seznam[Hory]))
        } else {
            Hory += 1
            basic.showString("" + (textový_seznam[Hory]))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Prepmi == 0) {
        Prepni += 1
        Prepmi = 1
        if (Nej == 20) {
            Nej = 0
        }
    } else if (Prepmi == 1) {
        Prepni += 0
        Prepmi = 0
        if (Nej == 0) {
            Nej = 20
            basic.showString("" + (seznam[Hory]))
            Nej = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Prepni == 1) {
        if (Hory < 0) {
            Hory = 0
            basic.showString("" + (textový_seznam[Hory]))
        } else {
            Hory += -1
            basic.showString("" + (textový_seznam[Hory]))
        }
    }
})
let seznam: string[] = []
let textový_seznam: string[] = []
let Hory = 0
let Prepni = 0
let Prepmi = 0
let Nej = 0
Nej = 0
Prepmi = 0
Prepni = 0
Hory = 0
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
seznam = [
"KLINOVEC",
"CERCHOV",
"PLECHY",
"V.JAVORNIK",
"LYSA H",
"PRADAD",
"V.DESTNA",
"SNEZKA",
"SMRK",
"LUZ"
]
Hory = -1
