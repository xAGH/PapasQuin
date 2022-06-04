from src.utils.instances import db

class MonthlyRecordModel(db.Model):

    __tablename__: str = 'monthly_records'

    month_year = db.Column(db.String(5), nullable=False) # Month and year, format: 01/22 (MONTH/YEAR)
    bulk_ente = db.Column(db.Float, nullable=False, default=0) # Total bulks entered.
    bulk_prod = db.Column(db.Float, nullable=False, default=0) # Total bulks produced.
    bulk_inve = db.Column(db.Float, nullable=False, default=0) # Total bulks in inventory.
    pack_prod_1lb = db.Column(db.Integer, nullable=False, default=0) # Total 1 pound packages quantity produced.
    pack_sout_1lb = db.Column(db.Integer, nullable=False, default=0) # Total 1 pound packages quantity sold out.
    pack_inve_1lb = db.Column(db.Integer, nullable=False, default=0) # Total 1 pound packages quantity in inventory.
    pack_prod_5lb = db.Column(db.Integer, nullable=False, default=0) # Total 5 pound packages quantity produced.
    pack_sout_5lb = db.Column(db.Integer, nullable=False, default=0) # Total 5 pound packages quantity sold out.
    pack_inve_5lb = db.Column(db.Integer, nullable=False, default=0) # Total 5 pound packages quantity in inventory.

    def __init__(
        self, 
        month_year,
        bulk_ente,
        bulk_prod,
        bulk_inve,
        pack_prod_1lb,
        pack_sout_1lb,
        pack_inve_1lb,
        pack_prod_5lb,
        pack_sout_5lb,
        pack_inve_5lb
    ):
    
        self.month_year = month_year
        self.bulk_ente = bulk_ente
        self.bulk_prod = bulk_prod
        self.bulk_inve = bulk_inve
        self.pack_prod_1lb = pack_prod_1lb
        self.pack_sout_1lb = pack_sout_1lb
        self.pack_inve_1lb = pack_inve_1lb
        self.pack_prod_5lb = pack_prod_5lb
        self.pack_sout_5lb = pack_sout_5lb
        self.pack_inve_5lb = pack_inve_5lb

    def as_dict(self):
        return dict(
            month_year=self.month_year,
            bulk_ente=self.bulk_ente,
            bulk_prod=self.bulk_prod,
            bulk_inve=self.bulk_inve,
            pack_prod_1lb=self.pack_prod_1lb,
            pack_sout_1lb=self.pack_sout_1lb,
            pack_inve_1lb=self.pack_inve_1lb,
            pack_prod_5lb=self.pack_prod_5lb,
            pack_sout_5lb=self.pack_sout_5lb,
            pack_inve_5lb=self.pack_inve_5lb
        )