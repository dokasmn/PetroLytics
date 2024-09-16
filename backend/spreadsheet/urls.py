from .views import WellViewSets, SpreadsheetWellViewSets
from rest_framework.routers import SimpleRouter


spreadsheet_router = SimpleRouter()
spreadsheet_router.register(r'input_datas', WellViewSets)
spreadsheet_router.register(r'input_dataset', SpreadsheetWellViewSets, basename="upload-spreadsheet")