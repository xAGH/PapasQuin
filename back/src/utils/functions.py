from datetime import datetime
DATETIME_FORMAT = '%Y-%m-%d %H:%M:%S'

def get_datetime():
    return datetime.now().strftime(DATETIME_FORMAT)

def row2dict(row):
    data = {}
    for column in row.__table__.columns:
        data[column.name] = str(getattr(row, column.name))

    return data