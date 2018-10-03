def bmi(weight, height):
    bmi_calculation = weight / (height*height)
    if bmi_calculation <= 18.5:
        return "Underweight"

    if bmi_calculation <= 25.0:
        return "Normal"

    if bmi_calculation <= 30.0:
        return "Overweight"

    if bmi_calculation > 30:
        return "Obese"

def bmi_short(weight, height):
    b = weight / height ** 2
    return ['Underweight', 'Normal', 'Overweight', 'Obese'][(b > 30) + (b > 25) + (b > 18.5)]


print(bmi_short(80, 1.78))

