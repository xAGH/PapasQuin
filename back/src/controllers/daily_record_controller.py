from flask.views import MethodView
from flask import make_response, jsonify, request
from src.schemas.daily_record_schema import DailyRecordSchema
from src.services.daily_record_service import DailyRecordService
from src.middlewares.requests_middleware import content_is_json

class DailyRecordController(MethodView):

    def __init__(self):
        self.validator = DailyRecordSchema()
        self.service = DailyRecordService()

    def get(self):
        daily_record = request.args.get("daily_record")
        if daily_record is None:
            response, status = self.service.get_daily_record(daily_record)
        elif len(daily_record) == 10:
            daily_validation = daily_record.split("-")
            for i in daily_validation:
                if not i.isdigit():
                    return make_response(jsonify({
                            "response": "The date must be a number"
                        }), 400)
            response, status = self.service.get_daily_record(daily_record)
        else:
            return make_response(jsonify({
                    "response": "Invalid date format (YYYY-MM-DD)"
                }), 400)
        return make_response(jsonify(response), status)

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

    @content_is_json
    def put(self):
        content = request.get_json()
        errors = self.validator.validate(content)
        if errors:
            return make_response(jsonify({
                "response": errors
            }), 400)
        response, status = self.service.update_daily_record(content)
        return make_response(jsonify(response), status)
