from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=32,)

    def __str__(self):
        return self.title

class Furniture(models.Model):
    title = models.CharField(max_length=32,)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title