function a(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.vline(x + 3, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    return 4 + spacing
}

//  width of letter
function b(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 6, 1)
    return 4 + spacing
}

//  width of letter
function c(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y + 2, 2, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    return 3 + spacing
}

//  width of letter
function d(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x + 3, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    return 4 + spacing
}

//  width of letter
function e(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.hline(x, y + 4, 3, 1)
    OLED12864_I2C.pixel(x, y + 5, 1)
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    return 3 + spacing
}

//  width of letter
function f(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 2, y, 1)
    OLED12864_I2C.pixel(x + 1, y + 1, 1)
    OLED12864_I2C.pixel(x + 3, y + 1, 1)
    OLED12864_I2C.vline(x + 1, y + 2, 5, 1)
    OLED12864_I2C.hline(x + 0, y + 3, 3, 1)
    return 3 + spacing
}

//  width of letter
function g(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.vline(x + 3, y + 2, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 9, 1)
    OLED12864_I2C.pixel(x + 1, y + 9, 1)
    OLED12864_I2C.pixel(x, y + 8, 1)
    return 4 + spacing
}

//  width of letter
function h(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 4, 1)
    return 4 + spacing
}

//  width of letter
function i(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 0, y + 2, 1)
    OLED12864_I2C.vline(x, y + 4, 3, 1)
    return 1 + spacing
}

//  width of letter
function j(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x, y + 2, 1)
    OLED12864_I2C.vline(x, y + 4, 5, 1)
    OLED12864_I2C.pixel(x - 2, y + 8, 1)
    OLED12864_I2C.pixel(x - 1, y + 9, 1)
    return 1 + spacing
}

//  width of letter
function k(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 3, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.pixel(x + 3, y + 6, 1)
    return 4 + spacing
}

//  width of letter
function l(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    return 1 + spacing
}

//  width of letter
function m(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.vline(x + 2, y + 4, 3, 1)
    OLED12864_I2C.pixel(x + 3, y + 3, 1)
    OLED12864_I2C.vline(x + 4, y + 4, 3, 1)
    return 5 + spacing
}

//  width of letter
function n(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 4, 1)
    return 4 + spacing
}

//  width of letter
function o(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y + 2, 2, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 3, 1)
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    return 4 + spacing
}

//  width of letter
function p(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y + 2, 8, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 6, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 3, 1)
    return 4 + spacing
}

//  width of letter
function q(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x + 3, y + 2, 8, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.vline(x + 0, y + 3, 3, 1)
    return 4 + spacing
}

//  width of letter
function r(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 3, y + 3, 1)
    return 4 + spacing
}

//  width of letter
function s(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y + 2, 2, 1)
    OLED12864_I2C.pixel(x + 0, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.hline(x, y + 6, 2, 1)
    return 3 + spacing
}

//  width of letter
function t(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x, y + 3, 3, 1)
    //  Horizontal line in middle
    OLED12864_I2C.vline(x + 1, y, 7, 1)
    //  Vertical line through center
    return 3 + spacing
}

//  width of letter
function u(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y + 2, 4, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 3, y + 2, 5, 1)
    //  Right vertical line
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    //  Bottom left curve
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    //  Bottom middle point
    return 4 + spacing
}

//  width of letter
function v(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y + 2, 4, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 2, y + 2, 4, 1)
    //  Right vertical line
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    //  Bottom middle point
    return 3 + spacing
}

//  width of letter
function w(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y + 2, 4, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 2, y + 2, 4, 1)
    //  Middle vertical line
    OLED12864_I2C.vline(x + 4, y + 2, 4, 1)
    //  Right vertical line
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    //  Bottom left dot
    OLED12864_I2C.pixel(x + 3, y + 6, 1)
    //  Bottom right dot
    return 5 + spacing
}

//  width of letter
function x_(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x + 1, y + 4, 2, 1)
    //  Left middle vertical line
    OLED12864_I2C.vline(x + 2, y + 4, 2, 1)
    //  Right middle vertical line
    OLED12864_I2C.pixel(x, y + 3, 1)
    //  Top left dot
    OLED12864_I2C.pixel(x + 3, y + 3, 1)
    //  Top right dot
    OLED12864_I2C.pixel(x, y + 6, 1)
    //  Bottom left dot
    OLED12864_I2C.pixel(x + 3, y + 6, 1)
    //  Bottom right dot
    return 4 + spacing
}

//  width of letter
function y_(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x + 2, y + 5, 3, 1)
    //  Middle vertical line
    OLED12864_I2C.pixel(x, y + 3, 1)
    //  Top left dot
    OLED12864_I2C.pixel(x + 4, y + 3, 1)
    //  Top right dot
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    //  Upper middle left dot
    OLED12864_I2C.pixel(x + 3, y + 4, 1)
    //  Upper middle right dot
    OLED12864_I2C.pixel(x + 1, y + 8, 1)
    //  Lower left curve dot
    OLED12864_I2C.pixel(x, y + 9, 1)
    //  Bottom dot
    return 5 + spacing
}

//  width of letter
function z_(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x, y + 3, 4, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x, y + 6, 4, 1)
    //  Bottom horizontal line
    OLED12864_I2C.pixel(x + 2, y + 4, 1)
    //  Upper middle dot
    OLED12864_I2C.pixel(x + 1, y + 5, 1)
    //  Lower middle dot
    return 4 + spacing
}

//  width of letter
function qs(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.vline(x + 3, y + 1, 2, 1)
    //  Right vertical line
    OLED12864_I2C.pixel(x, y + 1, 1)
    //  Upper left curve dot
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    //  Middle dot
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    //  Lower middle dot
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    //  Bottom dot
    return 4 + spacing
}

//  width of letter
function space(): number {
    return 1
}

//  Draw each letter and update x position
OLED12864_I2C.clear()
function draw_text(text: string, x: number, y: number, spacing: number) {
    for (let char of text) {
        if (x >= 124) {
            x = 0
            y += 10
        }
        
        if (char == "a") {
            x += a(x, y, spacing)
        } else if (char == "b") {
            x += b(x, y, spacing)
        } else if (char == "c") {
            x += c(x, y, spacing)
        } else if (char == "d") {
            x += d(x, y, spacing)
        } else if (char == "e") {
            x += e(x, y, spacing)
        } else if (char == "f") {
            x += f(x, y, spacing)
        } else if (char == "g") {
            x += g(x, y, spacing)
        } else if (char == "h") {
            x += h(x, y, spacing)
        } else if (char == "i") {
            x += i(x, y, spacing)
        } else if (char == "j") {
            x += j(x, y, spacing)
        } else if (char == "k") {
            x += k(x, y, spacing)
        } else if (char == "l") {
            x += l(x, y, spacing)
        } else if (char == "m") {
            x += m(x, y, spacing)
        } else if (char == "n") {
            x += n(x, y, spacing)
        } else if (char == "o") {
            x += o(x, y, spacing)
        } else if (char == "p") {
            x += p(x, y, spacing)
        } else if (char == "q") {
            x += q(x, y, spacing)
        } else if (char == "r") {
            x += r(x, y, spacing)
        } else if (char == "s") {
            x += s(x, y, spacing)
        } else if (char == "t") {
            x += t(x, y, spacing)
        } else if (char == "u") {
            x += u(x, y, spacing)
        } else if (char == "v") {
            x += v(x, y, spacing)
        } else if (char == "w") {
            x += w(x, y, spacing)
        } else if (char == "x") {
            x += x_(x, y, spacing)
        } else if (char == "y") {
            x += y_(x, y, spacing)
        } else if (char == "z") {
            x += z_(x, y, spacing)
        } else if (char == "?") {
            x += qs(x, y, spacing)
        } else if (char == " ") {
            x += space()
        } else if (char == "^") {
            x = 0
            y += 9
        }
        
    }
}

//  Starting position
let x = 0
//  starting x position
let y = 0
//  starting y position
let spacing = 1
//  space between letters
draw_text("abcdefghijklmnopqrstuvwxyz?^lol i can write anything now^one line in^four lines in i guess^theres five^six^seven", x, y, spacing)
