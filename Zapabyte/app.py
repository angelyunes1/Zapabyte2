from flask import Flask, render_template, request

from conexionDBUsuarios import ConexionDBUsuario
app = Flask(__name__)


@app.route('/index')  # Definiendo la ruta raíz
def principal():
    return render_template('index.html')

@app.route('/hombres')
def hombres():
    return render_template('hombres.html')

@app.route('/mujeres')
def mujeres():
    return render_template('mujeres.html')

@app.route('/niños')
def niños():
    return render_template('niños.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/prueba')
def login1():
    return render_template('prueba.html')  

@app.route('/privacety')
def politicas_de_privacidad():
    return render_template('privacety.html')

@app.route('/devoluciones')
def politicas_de_devoluciones():
    return render_template('devoluciones.html')

@app.route('/terminosCompra')
def terminosDeCompra():
    return render_template('terminosCompra.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/registro')
def registro():
    return render_template('registro.html')

@app.route('/preguntas')
def pregruntas():
    return render_template('preguntas.html')

@app.route('/insertar_comentario', methods=['POST'])
def insertar_comentario():
    if request.method == 'POST':
        nombre = request.form['nombre']
        correo = request.form['correo']
        mensaje = request.form['mensaje']

        conexion_db = ConexionDBUsuario()
        conexion_db.insertar_comentario(nombre, correo, mensaje)

        return "Comentario insertado correctamente."

if __name__ == '__main__':
    app.run(debug=True)
    


# Link pagina web -----> http://127.0.0.1:5000/index