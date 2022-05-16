from src.controllers.daily_record_controller import DailyRecordController
from src.config import APP

version = APP.VERSION

routes = {
    "daily_record": f"/{version}/daily_record", "daily_record_controller": DailyRecordController.as_view("daily_record"),
}