from django.contrib import admin
from django.urls import path, include
from spreadsheet.urls import router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('spreadsheet/v1/', include(router.urls))
]
