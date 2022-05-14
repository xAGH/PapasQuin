from marshmallow import Schema, fields
from src.config import APP

class DailyRecordSchema(Schema):
    date = fields.DateTime(required=True, format=APP.DATE_FORMAT)
    bulk_ente = fields.Float(required=True)
    bulk_prod = fields.Float(required=True)
    bulk_inve = fields.Float(required=True)
    pack_prod_1lb = fields.Integer(required=True, validate=lambda x: x > 0)
    pack_sell_1lb = fields.Integer(required=True, validate=lambda x: x > 0)
    pack_inve_1lb = fields.Integer(required=True, validate=lambda x: x > 0)
    pack_prod_5lb = fields.Integer(required=True, validate=lambda x: x > 0)
    pack_sell_5lb = fields.Integer(required=True, validate=lambda x: x > 0)
    pack_inve_5lb = fields.Integer(required=True, validate=lambda x: x > 0)
    total_pack_prod = fields.Integer(required=True, validate=lambda x: x > 0)
    total_inve_prod = fields.Integer(required=True, validate=lambda x: x > 0)
    total_pack_sell = fields.Integer(required=True, validate=lambda x: x > 0)
