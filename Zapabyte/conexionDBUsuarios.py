import psycopg2

class ConexionDBUsuario:
    def __init__(self):
        try:
            self.conexion = psycopg2.connect(
                host="localhost",
                database="proyecto_Python",
                user="postgres",
                password="admin"
            )
            self.crear_tabla()  # Llama al método crear_tabla al inicializar la conexión
        except psycopg2.Error as e:
            print("Error al conectar a la base de datos:", e)

    def crear_tabla(self):
        cursor = self.conexion.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS comentarios (
                id SERIAL PRIMARY KEY,
                nombre TEXT,
                correo TEXT,
                mensaje TEXT
            )
            """
        )
        self.conexion.commit()

    def insertar_comentario(self, nombre, correo, mensaje):
        cursor = self.conexion.cursor()
        try:
            cursor.execute(
                """
                INSERT INTO comentarios (nombre, correo, mensaje)
                VALUES (%s, %s, %s)
                """,
                (nombre, correo, mensaje)
            )
            self.conexion.commit()
            print("Comentario insertado correctamente.")
        except psycopg2.Error as e:
            self.conexion.rollback()
            print("Error al insertar comentario:", e)
        finally:
            cursor.close()