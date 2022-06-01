from email import message
from src.utils.instances import db

class DailyRecordModel(db.Model):

    __tablename__ = 'daily_records'

    date = db.Column(db.Date, nullable=False, primary_key=True) # Date
    bulk_ente = db.Column(db.Float, nullable=False, default=0) # Bulks entered
    bulk_prod = db.Column(db.Float, nullable=False, default=0) # Bulks produced
    bulk_inve = db.Column(db.Float, nullable=False, default=0) # Bulks in inventory
    pack_prod_1lb = db.Column(db.Integer, nullable=False, default=0) # 1 pound packages quantity produced.
    pack_sout_1lb = db.Column(db.Integer, nullable=False, default=0) # 1 pound packages quantity sold out.
    pack_inve_1lb = db.Column(db.Integer, nullable=False, default=0) # 1 pound packages quantity in inventory.
    pack_prod_5lb = db.Column(db.Integer, nullable=False, default=0) # 5 pound packages quantity produced.
    pack_sout_5lb = db.Column(db.Integer, nullable=False, default=0) # 5 pound packages quantity sold out.
    pack_inve_5lb = db.Column(db.Integer, nullable=False, default=0) # 5 pound packages quantity in inventory.
    total_pack_prod = db.Column(db.Integer, nullable=False, default=0) # Total packages quantity produced.
    total_pack_sout = db.Column(db.Integer, nullable=False, default=0) # Total packages quantity sold out.
    total_pack_inve = db.Column(db.Integer, nullable=False, default=0) # Total packages quantity in inventory.
    registered_in = db.Column(db.DateTime, nullable=False) # Date of the register.

    def __init__(
        self,
        date,
        bulk_ente,
        bulk_prod,
        bulk_inve,
        pack_prod_1lb,
        pack_sout_1lb,
        pack_inve_1lb,
        pack_prod_5lb,
        pack_sout_5lb,
        pack_inve_5lb,
        total_pack_prod,
        total_pack_inve,
        total_pack_sout,
        registered_in
        ):
        self.date = date
        self.bulk_ente = bulk_ente
        self.bulk_prod = bulk_prod
        self.bulk_inve = bulk_inve
        self.pack_prod_1lb = pack_prod_1lb
        self.pack_sout_1lb = pack_sout_1lb
        self.pack_inve_1lb = pack_inve_1lb
        self.pack_prod_5lb = pack_prod_5lb
        self.pack_sout_5lb = pack_sout_5lb
        self.pack_inve_5lb = pack_inve_5lb
        self.total_pack_prod = total_pack_prod
        self.total_pack_inve = total_pack_inve
        self.total_pack_sout = total_pack_sout
        self.registered_in = registered_in

    def as_dict(self):
        return dict(
            date=str(self.date),
            bulk_ente=str(self.bulk_ente),
            bulk_prod=str(self.bulk_prod),
            bulk_inve=str(self.bulk_inve),
            pack_prod_1lb=str(self.pack_prod_1lb),
            pack_sout_1lb=str(self.pack_sout_1lb),
            pack_inve_1lb=str(self.pack_inve_1lb),
            pack_prod_5lb=str(self.pack_prod_5lb),
            pack_sout_5lb=str(self.pack_sout_5lb),
            pack_inve_5lb=str(self.pack_inve_5lb),
            total_pack_prod=str(self.total_pack_prod),
            total_pack_inve=str(self.total_pack_inve),
            total_pack_sout=str(self.total_pack_sout),
            registered_in=str(self.registered_in)
        )