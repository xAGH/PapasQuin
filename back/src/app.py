from dotenv import load_dotenv

load_dotenv()

from flask_cors import CORS
from src.config import DB, APP
from flask import Flask
from src.routes import routes

class Application():

    @classmethod
    def create_app(cls):
        cls.app = Flask(__name__)
        cls.__configure()
        return cls.app

    @classmethod
    def __configure(cls):
        cls.app.config["SQLALCHEMY_DATABASE_URI"] = f'mysql+pymysql://{DB.USER}:{DB.PASS}@{DB.HOST}:{DB.PORT}/{DB.NAME}'
        cls.app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
        cls.app.config["RUN_CONFIG"] = dict(host=APP.HOST, port=APP.PORT, debug=APP.DEBUG)
        
        CORS(cls.app, resources={
            r"/*": {
                "origins": [APP.CORS, "*"]
            }
        }, supports_credentials=True)

        cls.__register_routes()

    @classmethod
    def __register_routes(cls):
        cls.app.add_url_rule()
