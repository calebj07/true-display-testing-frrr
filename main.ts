function draw_a(x: number, y: number) {
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.vline(x + 3, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    return 4 + spacing
}

//  width of letter
function draw_b(x: number, y: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 6, 1)
    return 4 + spacing
}

//  width of letter
function draw_k(x: number, y: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 3, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.pixel(x + 3, y + 6, 1)
    return 4 + spacing
}

//  width of letter
function draw_c(x: number, y: number) {
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 2, y + 6, 1)
    return 3 + spacing
}

//  width of letter
function draw_i(x: number, y: number) {
    OLED12864_I2C.pixel(x + 0, y + 2, 1)
    OLED12864_I2C.vline(x, y + 4, 3, 1)
    return 1 + spacing
}

//  width of letter
function draw_s(x: number, y: number) {
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.pixel(x + 3, y + 2, 1)
    OLED12864_I2C.pixel(x + 0, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    OLED12864_I2C.pixel(x + 2, y + 4, 1)
    OLED12864_I2C.pixel(x + 3, y + 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 6, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 0, y + 6, 1)
    return 4 + spacing
}

//  width of letter
//  Starting position
let x = 1
//  starting x position
let y = 0
//  starting y position
let spacing = 1
//  space between letters
//  Draw each letter and update x position
x += draw_s(x, y)
x += draw_i(x, y)
x += draw_c(x, y)
x += draw_k(x, y)
x += draw_a(x, y)
x += draw_b(x, y)
