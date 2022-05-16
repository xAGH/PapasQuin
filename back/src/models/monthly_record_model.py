from src.utils.instances import db

class MonthlyRecordModel(db.Model):

    __tablename__: str = 'monthly_records'

    uid = db.Column(db.Integer, primary_key=True) # Unique id
    month_year = db.Column(db.String(5), nullable=False) # Month and year, format: 01/22 (MONTH/YEAR)
    total_bulk_ente = db.Column(db.Float, nullable=False, default=0) # Total bulks entered.
    total_bulk_prod = db.Column(db.Float, nullable=False, default=0) # Total bulks produced.
    total_bulk_inve = db.Column(db.Float, nullable=False, default=0) # Total bulks in inventory.
    total_pack_prod_1lb = db.Column(db.Integer, nullable=False, default=0) # Total 1 pound packages quantity produced.
    total_pack_sell_1lb = db.Column(db.Integer, nullable=False, default=0) # Total 1 pound packages quantity sold out.
    total_pack_inve_1lb = db.Column(db.Integer, nullable=False, default=0) # Total 1 pound packages quantity in inventory.
    total_pack_prod_5lb = db.Column(db.Integer, nullable=False, default=0) # Total 5 pound packages quantity produced.
    total_pack_sell_5lb = db.Column(db.Integer, nullable=False, default=0) # Total 5 pound packages quantity sold out.
    total_pack_inve_5lb = db.Column(db.Integer, nullable=False, default=0) # Total 5 pound packages quantity in inventory.

    def __init__(
        self, 
        month_year,
        total_bulk_ente,
        total_bulk_prod,
        total_bulk_inve,
        total_pack_prod_1lb,
        total_pack_sell_1lb,
        total_pack_inve_1lb,
        total_pack_prod_5lb,
        total_pack_sell_5lb,
        total_pack_inve_5lb
    ):
    
        self.month_year = month_year
        self.total_bulk_ente = total_bulk_ente
        self.total_bulk_prod = total_bulk_prod
        self.total_bulk_inve = total_bulk_inve
        self.total_pack_prod_1lb = total_pack_prod_1lb
        self.total_pack_sell_1lb = total_pack_sell_1lb
        self.total_pack_inve_1lb = total_pack_inve_1lb
        self.total_pack_prod_5lb = total_pack_prod_5lb
        self.total_pack_sell_5lb = total_pack_sell_5lb
        self.total_pack_inve_5lb = total_pack_inve_5lb
