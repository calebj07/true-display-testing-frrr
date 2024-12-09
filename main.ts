let answer1: number;
let answer2: number;
let answer3: number;
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
function dollar(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x + 2, y, 7, 1)
    //  Vertical line
    OLED12864_I2C.hline(x + 1, y + 1, 4, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 3, 1)
    //  Middle horizontal line
    OLED12864_I2C.hline(x, y + 5, 4, 1)
    //  Bottom horizontal line
    OLED12864_I2C.pixel(x, y + 2, 1)
    //  Top left pixel
    OLED12864_I2C.pixel(x + 4, y + 4, 1)
    //  Bottom right pixel
    return 5 + spacing
}

//  width of letter
function o_parenthesis(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 1, y, 1)
    OLED12864_I2C.vline(x, y + 1, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    return 2 + spacing
}

//  width of character
function c_parenthesis(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x + 1, y + 1, 5, 1)
    OLED12864_I2C.pixel(x, y, 1)
    OLED12864_I2C.pixel(x, y + 6, 1)
    return 2 + spacing
}

//  width of character
function one(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x, y, 1)
    //  Top dot
    OLED12864_I2C.vline(x + 1, y, 6, 1)
    //  Middle vertical line
    OLED12864_I2C.hline(x, y + 6, 3, 1)
    //  Bottom horizontal line
    return 3 + spacing
}

//  width of letter
function two(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.pixel(x, y + 1, 1)
    //  Top left pixel
    OLED12864_I2C.vline(x + 3, y + 1, 3, 1)
    //  Vertical line
    OLED12864_I2C.pixel(x + 1, y + 5, 1)
    //  Middle pixel
    OLED12864_I2C.pixel(x + 2, y + 4, 1)
    //  Middle pixel
    OLED12864_I2C.hline(x, y + 6, 4, 1)
    //  Bottom horizontal line
    return 4 + spacing
}

//  width of letter
function three(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 2, 1)
    //  Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    //  Bottom horizontal line
    OLED12864_I2C.vline(x + 3, y + 1, 2, 1)
    //  Top vertical line
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1)
    //  Bottom vertical line
    OLED12864_I2C.pixel(x, y + 1, 1)
    //  Top left pixel
    OLED12864_I2C.pixel(x, y + 5, 1)
    //  Bottom left pixel
    return 4 + spacing
}

//  width of letter
function four(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 3, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 3, y, 7, 1)
    //  Right vertical line
    OLED12864_I2C.hline(x, y + 3, 4, 1)
    //  Middle horizontal line
    return 4 + spacing
}

//  width of letter
function five(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x, y, 4, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x, y + 3, 3, 1)
    //  Middle horizontal line
    OLED12864_I2C.hline(x, y + 6, 3, 1)
    //  Bottom horizontal line
    OLED12864_I2C.vline(x, y, 4, 1)
    //  Left vertical line
    OLED12864_I2C.pixel(x + 3, y + 4, 1)
    //  Middle right pixel
    OLED12864_I2C.pixel(x + 3, y + 5, 1)
    //  Bottom right pixel
    return 4 + spacing
}

//  width of letter
function six(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 2, 1)
    //  Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    //  Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 5, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1)
    //  Right vertical line
    OLED12864_I2C.pixel(x + 3, y + 1, 1)
    return 4 + spacing
}

//  width of letter
function seven(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x, y, 5, 1)
    //  Top horizontal line
    OLED12864_I2C.vline(x + 4, y + 1, 2, 1)
    //  Top right vertical line
    OLED12864_I2C.pixel(x + 3, y + 3, 1)
    //  Middle pixel
    OLED12864_I2C.pixel(x + 2, y + 4, 1)
    //  Lower middle pixel
    OLED12864_I2C.pixel(x + 1, y + 5, 1)
    //  Lower middle pixel
    OLED12864_I2C.pixel(x, y + 6, 1)
    //  Bottom left pixel
    return 5 + spacing
}

//  width of letter
function eight(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 2, 1)
    //  Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    //  Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 2, 1)
    //  Top left vertical line
    OLED12864_I2C.vline(x, y + 4, 2, 1)
    //  Bottom left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 2, 1)
    //  Top right vertical line
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1)
    //  Bottom right vertical line
    return 4 + spacing
}

//  width of letter
function nine(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 3, 1)
    //  Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    //  Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 2, 1)
    //  Top left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 5, 1)
    //  Right vertical line
    OLED12864_I2C.pixel(x, y + 5, 1)
    //  Middle pixel
    return 4 + spacing
}

//  width of letter
function zero(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    //  Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 5, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 5, 1)
    //  Right vertical line
    return 4 + spacing
}

//  width of letter
function plus(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x + 2, y + 1, 5, 1)
    //  Vertical line in the middle
    OLED12864_I2C.hline(x, y + 3, 5, 1)
    //  Horizontal line in the middle
    return 5 + spacing
}

//  width of character
function caps_w(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 6, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 4, y, 6, 1)
    //  Right vertical line
    OLED12864_I2C.pixel(x + 3, y + 6, 1)
    //  Right middle vertical line
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    //  Left middle vertical line
    OLED12864_I2C.vline(x + 2, y + 3, 3, 1)
    //  Bottom middle pixel
    return 5 + spacing
}

//  width of letter
function caps_h(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 3, y, 7, 1)
    //  Right vertical line
    OLED12864_I2C.hline(x, y + 3, 4, 1)
    //  Middle horizontal line
    return 4 + spacing
}

//  width of letter
function caps_p(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x, y, 3, 1)
    //  Top horizontal line
    OLED12864_I2C.vline(x, y, 7, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 2, 1)
    //  Right vertical line
    OLED12864_I2C.hline(x, y + 3, 3, 1)
    //  Middle horizontal line
    return 4 + spacing
}

//  width of character
function caps_a(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x + 2, y, 1)
    //  Pixel at (x+2, y)
    OLED12864_I2C.pixel(x + 1, y + 1, 1)
    //  Pixel at (x+1, y+1)
    OLED12864_I2C.pixel(x + 3, y + 1, 1)
    //  Pixel at (x+3, y+1)
    OLED12864_I2C.vline(x, y + 2, 5, 1)
    //  Vertical line from (x, y+2) to (x, y+6)
    OLED12864_I2C.vline(x + 4, y + 2, 5, 1)
    //  Vertical line from (x+4, y+2) to (x+4, y+6)
    OLED12864_I2C.hline(x, y + 3, 5, 1)
    //  Horizontal line from (x, y+3) to (x+4, y+3)
    return 5 + spacing
}

//  width of character
function caps_o(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.vline(x, y + 1, 5, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 5, 1)
    //  Right vertical line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    //  Bottom horizontal line
    return 4 + spacing
}

//  width of character
function caps_s(x: number, y: number, spacing: number) {
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 2, 1)
    //  Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    //  Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 2, 1)
    //  Top vertical line
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1)
    //  Bottom vertical line
    OLED12864_I2C.pixel(x + 3, y + 1, 1)
    //  Top right pixel
    OLED12864_I2C.pixel(x, y + 5, 1)
    //  Bottom left pixel
    return 4 + spacing
}

//  width of character
function caps_n(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    //  Left vertical line
    OLED12864_I2C.vline(x + 4, y, 7, 1)
    //  Right vertical line
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    //  Top left pixel
    OLED12864_I2C.vline(x + 1, y + 1, 2, 1)
    //  Left vertical line inside
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1)
    //  Right vertical line inside
    return 5 + spacing
}

//  width of character
function caps_d(x: number, y: number, spacing: number) {
    OLED12864_I2C.vline(x, y, 7, 1)
    //  Left vertical line
    OLED12864_I2C.hline(x + 1, y, 2, 1)
    //  Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    //  Bottom horizontal line
    OLED12864_I2C.vline(x + 3, y + 1, 5, 1)
    //  Right vertical line
    return 4 + spacing
}

//  width of character
function caps_y(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x, y, 1)
    //  Top left pixel
    OLED12864_I2C.pixel(x + 4, y, 1)
    //  Top right pixel
    OLED12864_I2C.pixel(x + 1, y + 1, 1)
    //  Second row left pixel
    OLED12864_I2C.pixel(x + 3, y + 1, 1)
    //  Second row right pixel
    OLED12864_I2C.vline(x + 2, y + 2, 5, 1)
    //  Vertical line in the middle
    return 5 + spacing
}

//  width of character
function period(x: number, y: number, spacing: number) {
    OLED12864_I2C.pixel(x, y + 6, 1)
    return 1 + spacing
}

//  width of character
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
        } else if (char == "1") {
            x += one(x, y, spacing)
        } else if (char == "2") {
            x += two(x, y, spacing)
        } else if (char == "3") {
            x += three(x, y, spacing)
        } else if (char == "4") {
            x += four(x, y, spacing)
        } else if (char == "5") {
            x += five(x, y, spacing)
        } else if (char == "6") {
            x += six(x, y, spacing)
        } else if (char == "7") {
            x += seven(x, y, spacing)
        } else if (char == "8") {
            x += eight(x, y, spacing)
        } else if (char == "9") {
            x += nine(x, y, spacing)
        } else if (char == "0") {
            x += zero(x, y, spacing)
        } else if (char == "W") {
            x += caps_w(x, y, spacing)
        } else if (char == "H") {
            x += caps_h(x, y, spacing)
        } else if (char == "$") {
            x += dollar(x, y, spacing)
        } else if (char == "(") {
            x += o_parenthesis(x, y, spacing)
        } else if (char == ")") {
            x += c_parenthesis(x, y, spacing)
        } else if (char == ".") {
            x += period(x, y, spacing)
        } else if (char == "P") {
            x += caps_p(x, y, spacing)
        } else if (char == "A") {
            x += caps_a(x, y, spacing)
        } else if (char == "O") {
            x += caps_o(x, y, spacing)
        } else if (char == "S") {
            x += caps_s(x, y, spacing)
        } else if (char == "N") {
            x += caps_n(x, y, spacing)
        } else if (char == "+") {
            x += plus(x, y, spacing)
        } else if (char == "D") {
            x += caps_d(x, y, spacing)
        } else if (char == "Y") {
            x += caps_y(x, y, spacing)
        }
        
    }
}

function you_chose(selection: string, y: number) {
    draw_text("You chose " + selection + ".", 0, y, spacing)
    basic.pause(2000)
}

// ACTUAL CODE IS BELOW, NORMAL FUNCTIONS ABOVE
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let x = 0
//  starting x position
let y = 0
//  starting y position
let spacing = 1
//  space between letters
let answered = false
draw_text("What is your budget?^1.  $500 and below^2.  $500 to $800^3.  $800 and above", x, y, spacing)
while (!answered) {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        answered = true
        answer1 = 1
        OLED12864_I2C.clear()
        you_chose("$500 and below", 9)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        answered = true
        answer1 = 2
        OLED12864_I2C.clear()
        you_chose("$500 to $800", 18)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        answered = true
        answer1 = 3
        OLED12864_I2C.clear()
        you_chose("$800 and above", 27)
    }
    
}
OLED12864_I2C.clear()
draw_text("Preferred operating system?^1.  Android^2.  iOS^3.  No preference", x, y, spacing)
answered = false
while (!answered) {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        answered = true
        answer2 = 1
        OLED12864_I2C.clear()
        you_chose("Android", 9)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        answered = true
        answer2 = 2
        OLED12864_I2C.clear()
        you_chose("iOS", 18)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        answered = true
        answer2 = 3
        OLED12864_I2C.clear()
        draw_text("You did not have a preference.", x, 27, spacing)
        basic.pause(2000)
    }
    
}
OLED12864_I2C.clear()
draw_text("Desired refresh rate?^1.  60Hz^2.  90Hz^3.  120Hz+", x, y, spacing)
answered = false
while (!answered) {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        answered = true
        answer3 = 1
        OLED12864_I2C.clear()
        you_chose("60Hz", 9)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        answered = true
        answer3 = 2
        OLED12864_I2C.clear()
        you_chose("90Hz", 18)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        answered = true
        answer3 = 3
        OLED12864_I2C.clear()
        you_chose("120Hz+", 27)
    }
    
}
