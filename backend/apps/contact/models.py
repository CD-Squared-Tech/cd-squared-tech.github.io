from django.db import models
from django.utils import timezone

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField(default=timezone.now)
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    message = models.CharField(max_length=5000)

    def __str__(self):
        return "Contact #{}".format(self.id)
