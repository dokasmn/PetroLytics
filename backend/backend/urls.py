from django.contrib import admin
from django.urls import path, include
from spreadsheet.urls import spreadsheet_router


urlpatterns = [
    path('admin/', admin.site.urls),
    path('spreadsheet/v1/', include(spreadsheet_router.urls))
]
