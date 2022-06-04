from src.models.daily_record_model import DailyRecordModel
from src.utils.instances import db
from src.utils.functions import get_datetime
from sqlalchemy.exc import IntegrityError as IntegrityErrorAlchemy
from src.utils.functions import row2dict
class DailyRecordService():

    def get_daily_record(self, daily_record):
        if daily_record is None:
            data = DailyRecordModel.query.all()
            data = [row2dict(x) for x in data]
        else:
            data = DailyRecordModel.query.filter_by(date=daily_record).first()
            if data is None:
                data = []
            else:
                data = [data.as_dict()]
        return ({"response":data}, 200) 

    def register_daily_record(self, content):
        try:
            db.session.add(
                DailyRecordModel(
                    date = content.get("date"),
                    bulk_ente = content.get("bulk_ente"),
                    bulk_prod = content.get("bulk_prod"),
                    bulk_inve = content.get("bulk_inve"),
                    pack_prod_1lb = content.get("pack_prod_1lb"),
                    pack_sout_1lb = content.get("pack_sout_1lb"),
                    pack_inve_1lb = content.get("pack_inve_1lb"),
                    pack_prod_5lb = content.get("pack_prod_5lb"),
                    pack_sout_5lb = content.get("pack_sout_5lb"),
                    pack_inve_5lb = content.get("pack_inve_5lb"),
                    total_pack_prod = float(content.get("pack_prod_1lb")) + float(content.get("pack_prod_5lb")),
                    total_pack_inve = float(content.get("pack_inve_1lb")) + float(content.get("pack_inve_5lb")),
                    total_pack_sout = float(content.get("pack_sout_1lb")) + float(content.get("pack_sout_5lb")),
                    registered_in = get_datetime()
                )
            )
            db.session.commit()
            return (
                {
                    "response": "Registro diario guardado correctamente."
                },
                201
            )

        except IntegrityErrorAlchemy:
            db.session.rollback()
            return self.update_daily_record(content)

        except Exception as e:
            db.session.rollback()
            return (
                {
                    "response": str(e)
                },
                500
            )
        
        finally:
            db.session.rollback()

    def update_daily_record(self, content):
        daily_record = DailyRecordModel.query.filter_by(date=content.get("date")).first()

        if daily_record is None:
            return (
                {
                    "response": "The daily record does not exist."
                },
                204
            )
            
        daily_record.bulk_ente = content.get("bulk_ente"),
        daily_record.bulk_prod = content.get("bulk_prod"),
        daily_record.bulk_inve = content.get("bulk_inve"),
        daily_record.pack_prod_1lb = content.get("pack_prod_1lb"),
        daily_record.pack_sout_1lb = content.get("pack_sout_1lb"),
        daily_record.pack_inve_1lb = content.get("pack_inve_1lb"),
        daily_record.pack_prod_5lb = content.get("pack_prod_5lb"),
        daily_record.pack_sout_5lb = content.get("pack_sout_5lb"),
        daily_record.pack_inve_5lb = content.get("pack_inve_5lb"),
        daily_record.total_pack_prod = float(content.get("pack_prod_1lb")) + float(content.get("pack_prod_5lb")),
        daily_record.total_pack_inve = float(content.get("pack_inve_1lb")) + float(content.get("pack_inve_5lb")),
        daily_record.total_pack_sout = float(content.get("pack_sout_1lb")) + float(content.get("pack_sout_5lb")),
        daily_record.registered_in = get_datetime()
        db.session.commit()

        return (
            {
                "response": "The daily record was updated successfully."
            },
            200
        )
