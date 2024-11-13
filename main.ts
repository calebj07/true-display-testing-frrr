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
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.vline(x, y + 4, 2, 1)
    OLED12864_I2C.vline(x + 2, y + 4, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.hline(x, y + 9, 2, 1)
    return 3 + spacing
}

//  width of letter
function h(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.vline(x + 2, y + 4, 3, 1)
    return 3 + spacing
}

//  width of letter
function i(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 0, y + 2, 1)
    OLED12864_I2C.vline(x, y + 4, 3, 1)
    return 1 + spacing
}

//  width of letter
function j(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.vline(x + 1, y + 4, 5, 1)
    OLED12864_I2C.pixel(x - 1, y + 8, 1)
    OLED12864_I2C.pixel(x, y + 9, 1)
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
function s(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y + 2, 2, 1)
    OLED12864_I2C.pixel(x + 0, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.hline(x, y + 6, 2, 1)
    return 3 + spacing
}

//  width of letter
function space(): number {
    return 1
}

//  Starting position
let x = 1
//  starting x position
let y = 0
//  starting y position
let spacing = 1
//  space between letters
//  Draw each letter and update x position
OLED12864_I2C.clear()
function draw_text(text: string, x: number, y: number, spacing: number) {
    for (let char of text) {
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
        } else if (char == "s") {
            x += s(x, y, spacing)
        } else if (char == " ") {
            x += space()
        }
        
    }
}

//  Example usage
draw_text("sick ab defghij", x, y, spacing)
