import json
from flask import Flask, jsonify, request, render_template
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, Usuario, Personaje_favorito, Planeta_favorito
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db.init_app(app)
Migrate(app, db)
app.config["JWT_SECRET_KEY"] = "@alfa123@254alfacentaurizxcvbnm@123456789ASDFGHJKL"
jwt = JWTManager(app)

# Allow CORS requests to this API
CORS(app)


@app.route('/crearcuenta', methods=['POST'])
def crear_usuario():
    request_body = request.data
    decoded_object = json.loads(request_body)
    nombre = decoded_object["nombre"]
    correo = decoded_object["correo"]
    clave = decoded_object["clave"]
    usuario = Usuario()
    usuario.nombre = nombre
    usuario.correo = correo
    usuario.clave = generate_password_hash(clave)
    usuario.save()

    return jsonify(usuario.serialize()), 201


@app.route('/login', methods=['POST'])
def login_usuario():
    request_body = request.data
    decoded_object = json.loads(request_body)
    correo = decoded_object["correo"]
    clave = decoded_object["clave"]
    usuario = Usuario.query.filter(correo == Usuario.correo).first()
    if usuario is not None and check_password_hash(usuario.clave, clave):
        token = create_access_token(identity=clave)
        return jsonify(usuario.nombre, token), 200
    else:
        return jsonify({"Error": "Clave o Usuario incorrecto"}), 401


@app.route('/api/usuarios', methods=['GET', 'POST'])
@app.route('/api/usuarios/<int:id>', methods=['GET'])
def list_usuarios(id=None):
    if(request.method == 'GET'):
        if(id is not None):
            # Retorna Planetas y Personajes Favoritos segun Usuario
            personajes_favoritos_usuario = Personaje_favorito.query.filter_by(
                usuario_id=id)
            planetas_favoritos_usuario = Planeta_favorito.query.filter_by(
                usuario_id=id)
            personajes_favoritos_usuario = list(
                map(lambda favorito: favorito.serialize(), personajes_favoritos_usuario))
            planetas_favoritos_usuario = list(
                map(lambda favorito: favorito.serialize(), planetas_favoritos_usuario))
            return jsonify(personajes_favoritos_usuario + planetas_favoritos_usuario), 200

        usuarios = Usuario.query.all()
        usuarios = list(map(lambda usuario: usuario.serialize(), usuarios))
        return jsonify(usuarios), 200

    if(request.method == 'POST'):
        request_body = request.data
        decoded_object = json.loads(request_body)
        nombre = decoded_object["nombre"]
        correo = decoded_object["correo"]
        clave = decoded_object["clave"]
        usuario = Usuario()
        usuario.nombre = nombre
        usuario.correo = correo
        usuario.clave = create_access_token(identity=clave)
        usuario.save()

        return jsonify(usuario.serialize()), 201


# Post a Personaje Favorito seg??n id Usuario
@app.route('/api/usuarios/personaje/<int:id>', methods=['POST'])
def create_personaje(id):
    if(request.method == 'POST'):
        request_body = request.data
        decoded_object = json.loads(request_body)
        usuario_id = id
        personaje_id = decoded_object["personaje_id"]

        personaje = Personaje_favorito()
        personaje.usuario_id = usuario_id
        personaje.personaje_id = personaje_id
        personaje.save()

        return jsonify(personaje.serialize())


# Post a Planeta Favorito seg??n id Usuario
@app.route('/api/usuarios/planeta/<int:id>', methods=['POST'])
def create_planeta_favorito(id):
    if(request.method == 'POST'):
        request_body = request.data
        decoded_object = json.loads(request_body)
        usuario_id = id
        planeta_id = decoded_object["planeta_id"]
        planeta = Planeta_favorito()
        planeta.usuario_id = usuario_id
        planeta.planeta_id = planeta_id
        planeta.save()

        return jsonify(planeta.serialize())


# DELETEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
@app.route('/api/usuarios/personaje/<int:id>', methods=['DELETE'])
def delete_personaje(id):

    personajes_favoritos_usuario = Personaje_favorito.query.filter(
        Personaje_favorito.usuario_id == id).first()
    personajes_favoritos_usuario.delete()

    return jsonify({"success": "Personaje Favorito deleted"}), 200


@app.route('/api/usuarios/planeta/<int:id>', methods=['DELETE'])
def delete_planeta(id):

    planetas_favoritos_usuario = Planeta_favorito.query.filter(
        Planeta_favorito.usuario_id == id).first()
    planetas_favoritos_usuario.delete()

    return jsonify({"success": "Planeta Favorito deleted"}), 200


if __name__ == '__main__':
    app.run()
