from .views import LocalizationViewSets
from rest_framework.routers import SimpleRouter


map_router = SimpleRouter()
map_router.register(r'localization_well', LocalizationViewSets)