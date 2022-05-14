from flask.views import MethodView
from flask import make_response, jsonify, request
from src.schemas.daily_record_schema import DailyRecordSchema
from src.services.daily_record_service import DailyRecordService
from src.middlewares.requests_middleware import content_is_json

class DailyRecordController(MethodView):

    def __init__(self):
        self.validator = DailyRecordSchema()
        self.service = DailyRecordService()

    @content_is_json
    def post(self):
        content = request.get_json()
        errors = self.validator.validate(content)
        if errors:
            return make_response(jsonify({
                "response": errors
            }), 400)
        response, status = self.service.register_daily_record(content)
        return make_response(jsonify(response), status)
