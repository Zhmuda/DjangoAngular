from django.db import models
from django.contrib.auth.models import User

class Cat(models.Model):
    BREED_CHOICES = [
        ('SIAMESE', 'Siamese'),
        ('PERSIAN', 'Persian'),
        ('MAINE_COON', 'Maine Coon'),
        # Другие породы
    ]

    name = models.CharField(max_length=100)
    age = models.IntegerField()
    breed = models.CharField(max_length=100, choices=BREED_CHOICES)
    is_fluffy = models.BooleanField(default=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
