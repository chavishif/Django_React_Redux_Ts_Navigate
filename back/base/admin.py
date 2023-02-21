from django.contrib import admin
from .models import Product
from .models import Gallery
from .models import Albums
from .models import AlbumsType

# Register your models here.


admin.site.register(Product)

admin.site.register(Gallery)

admin.site.register(Albums)

admin.site.register(AlbumsType)

