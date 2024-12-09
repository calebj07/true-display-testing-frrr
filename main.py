def a(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.vline(x + 3, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    return 4 + spacing  # width of letter

def b(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 6, 1)
    return 4 + spacing  # width of letter

def c(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y + 2, 2, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    return 3 + spacing # width of letter

def d(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x + 3, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    return 4 + spacing  # width of letter

def e(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.hline(x, y + 4, 3, 1)
    OLED12864_I2C.pixel(x, y + 5, 1)
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    return 3 + spacing  # width of letter

def f(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x + 2, y, 1)
    OLED12864_I2C.pixel(x + 1, y + 1, 1)
    OLED12864_I2C.pixel(x + 3, y + 1, 1)
    OLED12864_I2C.vline(x + 1, y + 2, 5, 1)
    OLED12864_I2C.hline(x + 0, y + 3, 3, 1)
    return 3 + spacing  # width of letter

def g(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.vline(x + 3, y + 2, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 9, 1)
    OLED12864_I2C.pixel(x + 1, y + 9, 1)
    OLED12864_I2C.pixel(x, y + 8, 1)
    return 4 + spacing  # width of letter

def h(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 4, 1)
    return 4 + spacing  # width of letter

def i(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x + 0, y + 2, 1)
    OLED12864_I2C.vline(x, y + 4, 3, 1)
    return 1 + spacing # width of letter

def j(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x, y + 2, 1)
    OLED12864_I2C.vline(x, y + 4, 5, 1)
    OLED12864_I2C.pixel(x - 2, y + 8, 1)
    OLED12864_I2C.pixel(x - 1, y + 9, 1)
    return 1 + spacing  # width of letter

def k(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 3, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.pixel(x + 3, y + 6, 1)
    return 4 + spacing  # width of letter

def l(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 7, 1)
    return 1 + spacing  # width of letter

def m(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.vline(x + 2, y + 4, 3, 1)
    OLED12864_I2C.pixel(x + 3, y + 3, 1)
    OLED12864_I2C.vline(x + 4, y + 4, 3, 1)
    return 5 + spacing  # width of letter

def n(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 4, 1)
    return 4 + spacing  # width of letter

def o(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y + 2, 2, 1)
    OLED12864_I2C.vline(x, y + 3, 3, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 3, 1)
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)
    return 4 + spacing  # width of letter

def p(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y + 2, 8, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.pixel(x + 2, y + 6, 1)
    OLED12864_I2C.vline(x + 3, y + 3, 3, 1)
    return 4 + spacing  # width of letter

def q(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x + 3, y + 2, 8, 1)
    OLED12864_I2C.pixel(x + 2, y + 3, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 2, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.vline(x + 0, y + 3, 3, 1)
    return 4 + spacing  # width of letter

def r(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y + 2, 5, 1)
    OLED12864_I2C.pixel(x + 2, y + 2, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.pixel(x + 3, y + 3, 1)
    return 4 + spacing  # width of letter

def s(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y + 2, 2, 1)
    OLED12864_I2C.pixel(x + 0, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.hline(x, y + 6, 2, 1)
    return 3 + spacing  # width of letter

def t(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x, y + 3, 3, 1)      # Horizontal line in middle
    OLED12864_I2C.vline(x + 1, y, 7, 1)  # Vertical line through center
    return 3 + spacing  # width of letter

def u(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y + 2, 4, 1)      # Left vertical line
    OLED12864_I2C.vline(x + 3, y + 2, 5, 1)  # Right vertical line
    OLED12864_I2C.pixel(x + 1, y + 6, 1)     # Bottom left curve
    OLED12864_I2C.pixel(x + 2, y + 5, 1)     # Bottom middle point
    return 4 + spacing  # width of letter

def v(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y + 2, 4, 1)      # Left vertical line
    OLED12864_I2C.vline(x + 2, y + 2, 4, 1)  # Right vertical line
    OLED12864_I2C.pixel(x + 1, y + 6, 1)     # Bottom middle point
    return 3 + spacing  # width of letter

def w(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y + 2, 4, 1)      # Left vertical line
    OLED12864_I2C.vline(x + 2, y + 2, 4, 1)  # Middle vertical line
    OLED12864_I2C.vline(x + 4, y + 2, 4, 1)  # Right vertical line
    OLED12864_I2C.pixel(x + 1, y + 6, 1)     # Bottom left dot
    OLED12864_I2C.pixel(x + 3, y + 6, 1)     # Bottom right dot
    return 5 + spacing  # width of letter

def x_(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x + 1, y + 4, 2, 1)  # Left middle vertical line
    OLED12864_I2C.vline(x + 2, y + 4, 2, 1)  # Right middle vertical line
    OLED12864_I2C.pixel(x, y + 3, 1)         # Top left dot
    OLED12864_I2C.pixel(x + 3, y + 3, 1)     # Top right dot
    OLED12864_I2C.pixel(x, y + 6, 1)         # Bottom left dot
    OLED12864_I2C.pixel(x + 3, y + 6, 1)     # Bottom right dot
    return 4 + spacing  # width of letter

def y_(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x + 2, y + 5, 3, 1)  # Middle vertical line
    OLED12864_I2C.pixel(x, y + 3, 1)         # Top left dot
    OLED12864_I2C.pixel(x + 4, y + 3, 1)     # Top right dot
    OLED12864_I2C.pixel(x + 1, y + 4, 1)     # Upper middle left dot
    OLED12864_I2C.pixel(x + 3, y + 4, 1)     # Upper middle right dot
    OLED12864_I2C.pixel(x + 1, y + 8, 1)     # Lower left curve dot
    OLED12864_I2C.pixel(x, y + 9, 1)         # Bottom dot
    return 5 + spacing  # width of letter

def z_(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x, y + 3, 4, 1)     # Top horizontal line
    OLED12864_I2C.hline(x, y + 6, 4, 1)     # Bottom horizontal line
    OLED12864_I2C.pixel(x + 2, y + 4, 1)    # Upper middle dot
    OLED12864_I2C.pixel(x + 1, y + 5, 1)    # Lower middle dot
    return 4 + spacing  # width of letter

def qs(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)      # Top horizontal line
    OLED12864_I2C.vline(x + 3, y + 1, 2, 1)  # Right vertical line
    OLED12864_I2C.pixel(x, y + 1, 1)         # Upper left curve dot
    OLED12864_I2C.pixel(x + 2, y + 3, 1)     # Middle dot
    OLED12864_I2C.pixel(x + 1, y + 4, 1)     # Lower middle dot
    OLED12864_I2C.pixel(x + 1, y + 6, 1)     # Bottom dot
    return 4 + spacing  # width of letter

def dollar(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x + 2, y, 7, 1)  # Vertical line
    OLED12864_I2C.hline(x + 1, y + 1, 4, 1)  # Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 3, 1)  # Middle horizontal line
    OLED12864_I2C.hline(x, y + 5, 4, 1)  # Bottom horizontal line
    OLED12864_I2C.pixel(x, y + 2, 1)  # Top left pixel
    OLED12864_I2C.pixel(x + 4, y + 4, 1)  # Bottom right pixel
    return 5 + spacing  # width of letter

def o_parenthesis(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x + 1, y, 1)
    OLED12864_I2C.vline(x, y + 1, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    return 2 + spacing  # width of character

def c_parenthesis(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x + 1, y + 1, 5, 1)
    OLED12864_I2C.pixel(x, y, 1)
    OLED12864_I2C.pixel(x, y + 6, 1)
    return 2 + spacing  # width of character

def one(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x, y, 1)         # Top dot
    OLED12864_I2C.vline(x + 1, y, 6, 1)  # Middle vertical line
    OLED12864_I2C.hline(x, y + 6, 3, 1)      # Bottom horizontal line
    return 3 + spacing  # width of letter

def two(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)  # Top horizontal line
    OLED12864_I2C.pixel(x, y + 1, 1)  # Top left pixel
    OLED12864_I2C.vline(x + 3, y + 1, 3, 1)  # Vertical line
    OLED12864_I2C.pixel(x + 1, y + 5, 1)  # Middle pixel
    OLED12864_I2C.pixel(x + 2, y + 4, 1)  # Middle pixel
    OLED12864_I2C.hline(x, y + 6, 4, 1)  # Bottom horizontal line
    return 4 + spacing  # width of letter

def three(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)  # Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 2, 1)  # Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)  # Bottom horizontal line
    OLED12864_I2C.vline(x + 3, y + 1, 2, 1)  # Top vertical line
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1)  # Bottom vertical line
    OLED12864_I2C.pixel(x, y + 1, 1)  # Top left pixel
    OLED12864_I2C.pixel(x, y + 5, 1)  # Bottom left pixel
    return 4 + spacing  # width of letter

def four(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 3, 1)  # Left vertical line
    OLED12864_I2C.vline(x + 3, y, 7, 1)  # Right vertical line
    OLED12864_I2C.hline(x, y + 3, 4, 1)  # Middle horizontal line
    return 4 + spacing  # width of letter

def five(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x, y, 4, 1)  # Top horizontal line
    OLED12864_I2C.hline(x, y + 3, 3, 1)  # Middle horizontal line
    OLED12864_I2C.hline(x, y + 6, 3, 1)  # Bottom horizontal line
    OLED12864_I2C.vline(x, y, 4, 1)  # Left vertical line
    OLED12864_I2C.pixel(x + 3, y + 4, 1)  # Middle right pixel
    OLED12864_I2C.pixel(x + 3, y + 5, 1)  # Bottom right pixel
    return 4 + spacing  # width of letter

def six(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)  # Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 2, 1)  # Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)  # Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 5, 1)  # Left vertical line
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1)  # Right vertical line
    OLED12864_I2C.pixel(x + 3, y + 1, 1)
    return 4 + spacing  # width of letter

def seven(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x, y, 5, 1)  # Top horizontal line
    OLED12864_I2C.vline(x + 4, y + 1, 2, 1)  # Top right vertical line
    OLED12864_I2C.pixel(x + 3, y + 3, 1)  # Middle pixel
    OLED12864_I2C.pixel(x + 2, y + 4, 1)  # Lower middle pixel
    OLED12864_I2C.pixel(x + 1, y + 5, 1)  # Lower middle pixel
    OLED12864_I2C.pixel(x, y + 6, 1)  # Bottom left pixel
    return 5 + spacing  # width of letter

def eight(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)  # Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 2, 1)  # Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)  # Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 2, 1)  # Top left vertical line
    OLED12864_I2C.vline(x, y + 4, 2, 1)  # Bottom left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 2, 1)  # Top right vertical line
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1)  # Bottom right vertical line
    return 4 + spacing  # width of letter

def nine(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)  # Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 3, 1)  # Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)  # Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 2, 1)  # Top left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 5, 1)  # Right vertical line
    OLED12864_I2C.pixel(x, y + 5, 1)  # Middle pixel
    return 4 + spacing  # width of letter

def zero(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)  # Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1)  # Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 5, 1)  # Left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 5, 1)  # Right vertical line
    return 4 + spacing  # width of letter

def plus(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x + 2, y + 1, 5, 1)   # Vertical line in the middle
    OLED12864_I2C.hline(x, y + 3, 5, 1)   # Horizontal line in the middle
    return 5 + spacing  # width of character

def caps_w(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 6, 1)  # Left vertical line
    OLED12864_I2C.vline(x + 4, y, 6, 1)  # Right vertical line
    OLED12864_I2C.pixel(x + 3, y + 6, 1)  # Right middle vertical line
    OLED12864_I2C.pixel(x + 1, y + 6, 1)  # Left middle vertical line
    OLED12864_I2C.vline(x + 2, y + 3, 3, 1)  # Bottom middle pixel
    return 5 + spacing  # width of letter

def caps_h(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 7, 1)  # Left vertical line
    OLED12864_I2C.vline(x + 3, y, 7, 1)  # Right vertical line
    OLED12864_I2C.hline(x, y + 3, 4, 1)  # Middle horizontal line
    return 4 + spacing  # width of letter

def caps_p(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x, y, 3, 1)      # Top horizontal line
    OLED12864_I2C.vline(x, y, 7, 1)      # Left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 2, 1)  # Right vertical line
    OLED12864_I2C.hline(x, y + 3, 3, 1)  # Middle horizontal line
    return 4 + spacing  # width of character

def caps_a(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x + 2, y, 1)     # Pixel at (x+2, y)
    OLED12864_I2C.pixel(x + 1, y + 1, 1) # Pixel at (x+1, y+1)
    OLED12864_I2C.pixel(x + 3, y + 1, 1) # Pixel at (x+3, y+1)
    OLED12864_I2C.vline(x, y + 2, 5, 1)  # Vertical line from (x, y+2) to (x, y+6)
    OLED12864_I2C.vline(x + 4, y + 2, 5, 1)  # Vertical line from (x+4, y+2) to (x+4, y+6)
    OLED12864_I2C.hline(x, y + 3, 5, 1)  # Horizontal line from (x, y+3) to (x+4, y+3)
    return 5 + spacing  # width of character

def caps_o(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)     # Top horizontal line
    OLED12864_I2C.vline(x, y + 1, 5, 1)     # Left vertical line
    OLED12864_I2C.vline(x + 3, y + 1, 5, 1) # Right vertical line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1) # Bottom horizontal line
    return 4 + spacing  # width of character

def caps_s(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y, 2, 1)     # Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 3, 2, 1) # Middle horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1) # Bottom horizontal line
    OLED12864_I2C.vline(x, y + 1, 2, 1)     # Top vertical line
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1) # Bottom vertical line
    OLED12864_I2C.pixel(x + 3, y + 1, 1)    # Top right pixel
    OLED12864_I2C.pixel(x, y + 5, 1)        # Bottom left pixel
    return 4 + spacing  # width of character

def caps_n(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 7, 1)       # Left vertical line
    OLED12864_I2C.vline(x + 4, y, 7, 1)   # Right vertical line
    OLED12864_I2C.pixel(x + 2, y + 3, 1)  # Top left pixel
    OLED12864_I2C.vline(x + 1, y + 1, 2, 1) # Left vertical line inside
    OLED12864_I2C.vline(x + 3, y + 4, 2, 1) # Right vertical line inside
    return 5 + spacing  # width of character

def caps_d(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 7, 1)       # Left vertical line
    OLED12864_I2C.hline(x + 1, y, 2, 1)   # Top horizontal line
    OLED12864_I2C.hline(x + 1, y + 6, 2, 1) # Bottom horizontal line
    OLED12864_I2C.vline(x + 3, y + 1, 5, 1) # Right vertical line
    return 4 + spacing  # width of character

def caps_y(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x, y, 1)          # Top left pixel
    OLED12864_I2C.pixel(x + 4, y, 1)      # Top right pixel
    OLED12864_I2C.pixel(x + 1, y + 1, 1)  # Second row left pixel
    OLED12864_I2C.pixel(x + 3, y + 1, 1)  # Second row right pixel
    OLED12864_I2C.vline(x + 2, y + 2, 5, 1) # Vertical line in the middle
    return 5 + spacing  # width of character

def period(x: int, y: int, spacing: int):
    OLED12864_I2C.pixel(x, y + 6, 1)
    return 1 + spacing  # width of character

def space():
    return 1

# Draw each letter and update x position
OLED12864_I2C.clear()
def draw_text(text: str, x: int, y: int, spacing: int):
    for char in text:
        if x >= 124:
            x = 0
            y += 10
        if char == 'a':
            x += a(x, y, spacing)
        elif char == 'b':
            x += b(x, y, spacing)
        elif char == 'c':
            x += c(x, y, spacing)
        elif char == 'd':
            x += d(x, y, spacing)
        elif char == 'e':
            x += e(x, y, spacing)
        elif char == 'f':
            x += f(x, y, spacing)
        elif char == 'g':
            x += g(x, y, spacing)
        elif char == 'h':
            x += h(x, y, spacing)
        elif char == 'i':
            x += i(x, y, spacing)
        elif char == 'j':
            x += j(x, y, spacing)
        elif char == 'k':
            x += k(x, y, spacing)
        elif char == 'l':
            x += l(x, y, spacing)
        elif char == 'm':
            x += m(x, y, spacing)
        elif char == 'n':
            x += n(x, y, spacing)
        elif char == 'o':
            x += o(x, y, spacing)
        elif char == 'p':
            x += p(x, y, spacing)
        elif char == 'q':
            x += q(x, y, spacing)
        elif char == 'r':
            x += r(x, y, spacing)
        elif char == 's':
            x += s(x, y, spacing)
        elif char == 't':
            x += t(x, y, spacing)
        elif char == 'u':
            x += u(x, y, spacing)
        elif char == 'v':
            x += v(x, y, spacing)
        elif char == 'w':
            x += w(x, y, spacing)
        elif char == 'x':
            x += x_(x, y, spacing)
        elif char == 'y':
            x += y_(x, y, spacing)
        elif char == 'z':
            x += z_(x, y, spacing)
        elif char == '?':
            x += qs(x, y, spacing)
        elif char == ' ':
            x += space()
        elif char == '^':
            x = 0
            y += 9
        elif char == '1':
            x += one(x, y, spacing)
        elif char == '2':
            x += two(x, y, spacing)
        elif char == '3':
            x += three(x, y, spacing)
        elif char == '4':
            x += four(x, y, spacing)
        elif char == '5':
            x += five(x, y, spacing)
        elif char == '6':
            x += six(x, y, spacing)
        elif char == '7':
            x += seven(x, y, spacing)
        elif char == '8':
            x += eight(x, y, spacing)
        elif char == '9':
            x += nine(x, y, spacing)
        elif char == '0':
            x += zero(x, y, spacing)
        elif char == 'W':
            x += caps_w(x, y, spacing)
        elif char == 'H':
            x += caps_h(x, y, spacing)
        elif char == '$':
            x += dollar(x, y, spacing)
        elif char == '(':
            x += o_parenthesis(x, y, spacing)
        elif char == ')':
            x += c_parenthesis(x, y, spacing)
        elif char == '.':
            x += period(x, y, spacing)
        elif char == 'P':
            x += caps_p(x, y, spacing)
        elif char == 'A':
            x += caps_a(x, y, spacing)
        elif char == 'O':
            x += caps_o(x, y, spacing)
        elif char == 'S':
            x += caps_s(x, y, spacing)
        elif char == 'N':
            x += caps_n(x, y, spacing)
        elif char == '+':
            x += plus(x, y, spacing)
        elif char == 'D':
            x += caps_d(x, y, spacing)
        elif char == 'Y':
            x += caps_y(x, y, spacing)

def you_chose(selection, y):
    draw_text("You chose " + selection + ".", 0, y, spacing)
    basic.pause(2000)
#ACTUAL CODE IS BELOW, NORMAL FUNCTIONS ABOVE

pins.set_pull(DigitalPin.P0, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P1, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P2, PinPullMode.PULL_UP)




x = 0  # starting x position
y = 0  # starting y position
spacing = 1  # space between letters
answered = False
draw_text("What is your budget?^1.  $500 and below^2.  $500 to $800^3.  $800 and above", x, y, spacing)
while not answered:
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        answered = True
        answer1 = 1
        OLED12864_I2C.clear()
        you_chose("$500 and below", 9)
    elif pins.digital_read_pin(DigitalPin.P1) == 0:
        answered = True
        answer1 = 2
        OLED12864_I2C.clear()
        you_chose("$500 to $800", 18)
    elif pins.digital_read_pin(DigitalPin.P2) == 0:
        answered = True
        answer1 = 3
        OLED12864_I2C.clear()
        you_chose("$800 and above", 27)
OLED12864_I2C.clear()
draw_text("Preferred operating system?^1.  Android^2.  iOS^3.  No preference", x, y, spacing)
answered = False
while not answered:
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        answered = True
        answer2 = 1
        OLED12864_I2C.clear()
        you_chose("Android", 9)
    elif pins.digital_read_pin(DigitalPin.P1) == 0:
        answered = True
        answer2 = 2
        OLED12864_I2C.clear()
        you_chose("iOS", 18)
    elif pins.digital_read_pin(DigitalPin.P2) == 0:
        answered = True
        answer2 = 3
        OLED12864_I2C.clear()
        draw_text("You did not have a preference.", x, 27, spacing)
        basic.pause(2000)

OLED12864_I2C.clear()
draw_text("Desired refresh rate?^1.  60Hz^2.  90Hz^3.  120Hz+", x, y, spacing)
answered = False
while not answered:
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        answered = True
        answer3 = 1
        OLED12864_I2C.clear()
        you_chose("60Hz", 9)
    elif pins.digital_read_pin(DigitalPin.P1) == 0:
        answered = True
        answer3 = 2
        OLED12864_I2C.clear()
        you_chose("90Hz", 18)
    elif pins.digital_read_pin(DigitalPin.P2) == 0:
        answered = True
        answer3 = 3
        OLED12864_I2C.clear()
        you_chose("120Hz+", 27)