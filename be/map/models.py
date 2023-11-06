from django.db import models

# Create your models here.
class Park(models.Model):
    name = models.CharField(verbose_name="장소이름", primary_key=True, max_length=50)
    add = models.TextField(verbose_name="주소")

    def __str__(self):
        return self.name
    

