from src.utils.instances import db

class DailyRecordModel(db.Model):

    __tablename__ = 'daily_records'

    uid = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    bulk_ente = db.Column(db.Float, nullable=False, default=0)
    bulk_prod = db.Column(db.Float, nullable=False, default=0)
    bulk_inve = db.Column(db.Float, nullable=False, default=0)
    pack_prod_1lb = db.Column(db.Integer, nullable=False, default=0)
    pack_sell_1lb = db.Column(db.Integer, nullable=False, default=0)
    pack_inve_1lb = db.Column(db.Integer, nullable=False, default=0)
    pack_prod_5lb = db.Column(db.Integer, nullable=False, default=0)
    pack_sell_5lb = db.Column(db.Integer, nullable=False, default=0)
    pack_inve_5lb = db.Column(db.Integer, nullable=False, default=0)
    total_pack_prod = db.Column(db.Integer, nullable=False, default=0)
    total_inve_prod = db.Column(db.Integer, nullable=False, default=0)
    total_pack_sell = db.Column(db.Integer, nullable=False, default=0)

    def __init__(
        self,
        date,
        bulk_ente,
        bulk_prod,
        bulk_inve,
        pack_prod_1lb,
        pack_sell_1lb,
        pack_inve_1lb,
        pack_prod_5lb,
        pack_sell_5lb,
        pack_inve_5lb,
        total_pack_prod,
        total_inve_prod,
        total_pack_sell
        ):
        self.date = date
        self.bulk_ente = bulk_ente
        self.bulk_prod = bulk_prod
        self.bulk_inve = bulk_inve
        self.pack_prod_1lb = pack_prod_1lb
        self.pack_sell_1lb = pack_sell_1lb
        self.pack_inve_1lb = pack_inve_1lb
        self.pack_prod_5lb = pack_prod_5lb
        self.pack_sell_5lb = pack_sell_5lb
        self.pack_inve_5lb = pack_inve_5lb
        self.total_pack_prod = total_pack_prod
        self.total_inve_prod = total_inve_prod
        self.total_pack_sell = total_pack_sell
