from django.contrib import admin
from django.urls import path, include
from spreadsheet.urls import spreadsheet_router
from map.urls import map_router


urlpatterns = [
    path('admin/', admin.site.urls),
    path('spreadsheet/', include(spreadsheet_router.urls)),
    path('map/', include(map_router.urls))
]
