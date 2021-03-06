from os import getenv

class DB():
    ENGINE = getenv("DB_ENGINE", "mysql")
    DRIVER = getenv("DB_DRIVER", "pymysql")
    HOST = getenv("DB_HOST")
    USER = getenv("DB_USER")
    PASS = getenv("DB_PASS")
    NAME = getenv("DB_NAME")
    PORT = int(getenv("DB_PORT"))

class APP():
    HOST = getenv("APP_HOST", "localhost")
    PORT = int(getenv("APP_PORT", "3000"))
    DEBUG = bool(getenv("APP_DEBUG", True))
    CORS = getenv("CORS_ORIGIN", "localhost:4200")
    DATETIME_FORMAT = '%Y-%m-%d %H:%M:%S'
    DATE_FORMAT = '%Y-%m-%d'
    VERSION = "api/v01"
