from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Product(models.Model):
    user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    desc = models.CharField(max_length=50,null=True,blank=True)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    createdTime=models.DateTimeField(auto_now_add=True)
    fields =['desc','price']
 
    def __str__(self):
           return self.desc



class Gallery(models.Model):
    user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')

    def __str__(self):
        return self.title



class Profile(models.Model):
    # cascade- שתמחוק את היוזר תמחוק גם את הפרופייל שלו
    user = models.ForeignKey(User, related_name='profile_set', on_delete=models.CASCADE)
    # user = models.OneToOneField(User, on_delete =models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)


class Albums(models.Model):
    user = models.ForeignKey(User, related_name='albums_set', on_delete=models.CASCADE)
    desc = models.TextField(max_length=500, blank=True)

class AlbumsType(models.Model):
    user = models.ForeignKey(User, related_name='albumstypes_set', on_delete=models.CASCADE)
    desc = models.TextField(max_length=500, blank=True)
    catId = models.ForeignKey(Albums, on_delete=models.CASCADE)
