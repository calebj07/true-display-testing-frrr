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
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.vline(x, y + 4, 2, 1)
    OLED12864_I2C.vline(x + 2, y + 4, 5, 1)
    OLED12864_I2C.pixel(x + 1, y + 6, 1)
    OLED12864_I2C.hline(x, y + 9, 2, 1)
    return 3 + spacing  # width of letter

def h(x: int, y: int, spacing: int):
    OLED12864_I2C.vline(x, y, 7, 1)
    OLED12864_I2C.pixel(x + 1, y + 3, 1)
    OLED12864_I2C.vline(x + 2, y + 4, 3, 1)
    return 3 + spacing  # width of letter

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

def s(x: int, y: int, spacing: int):
    OLED12864_I2C.hline(x + 1, y + 2, 2, 1)
    OLED12864_I2C.pixel(x + 0, y + 3, 1)
    OLED12864_I2C.pixel(x + 1, y + 4, 1)
    OLED12864_I2C.pixel(x + 2, y + 5, 1)
    OLED12864_I2C.hline(x, y + 6, 2, 1)
    return 3 + spacing  # width of letter

def space():
    return 1

# Starting position
x = 1  # starting x position
y = 0  # starting y position
spacing = 1  # space between letters

# Draw each letter and update x position
OLED12864_I2C.clear()
def draw_text(text: str, x: int, y: int, spacing: int):
    for char in text:
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
        elif char == 's':
            x += s(x, y, spacing)
        elif char == ' ':
            x += space()

# Example usage
draw_text("abcdefghijklmnop", x, y, spacing)