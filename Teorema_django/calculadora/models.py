from django.db import models

# Create your models here. http://127.0.0.1:8000/swagger/
"""
class calc
    hipotenusa int
    catetoum int
    catetodois int
    
    Classes para representação de dados da API
"""
    
class Calc(models.Model):
    hipotenusa=models.IntegerField()
    catetoum=models.IntegerField()
    catetodois=models.IntegerField()
    
    def __int__(self):
        return self.hipotenusa