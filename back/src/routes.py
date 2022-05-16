from src.controllers.daily_record_controller import DailyRecordController
from src.config import APP

version = APP.VERSION
dr = "daily_record" # Daily record base endpoint

routes = {
    "register_dr": f"/{version}/{dr}/register", "register_dr_controller": DailyRecordController.as_view("register_dr"),
}