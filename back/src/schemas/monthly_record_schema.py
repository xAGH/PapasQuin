from marshmallow import Schema, fields
from src.config import APP

class MonthlyRecordSchema(Schema):
    month_year = fields.Str(required=True, validate=lambda x: len(x) == 5)
    total_bulk_ente = fields.Float(required=True)
    total_bulk_prod = fields.Float(required=True)
    total_bulk_inve = fields.Float(required=True)
    total_pack_prod_1lb = fields.Integer(required=True, validate=lambda x: x > 0)
    total_pack_sout_1lb = fields.Integer(required=True, validate=lambda x: x > 0)
    total_pack_inve_1lb = fields.Integer(required=True, validate=lambda x: x > 0)
    total_pack_prod_5lb = fields.Integer(required=True, validate=lambda x: x > 0)
    total_pack_sout_5lb = fields.Integer(required=True, validate=lambda x: x > 0)
    total_pack_inve_5lb = fields.Integer(required=True, validate=lambda x: x > 0)
