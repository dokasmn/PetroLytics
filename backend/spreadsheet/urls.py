from .views import WellViewSets
from rest_framework.routers import SimpleRouter


router = SimpleRouter()
router.register(r'input_datas', WellViewSets)