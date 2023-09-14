# import psycopg2
# from flask import Flask, request, render_template
# class ConexionDBUsuario:
#     def __init__(self):
#         try:
#             self.conexion = psycopg2.connect(
#                 host="localhost",
#                 database="proyecto_Python",
#                 user="postgres",
#                 password="admin"
#             )
#             self.crear_tabla()  # Llama al método crear_tabla al inicializar la conexión
#         except psycopg2.Error as e:
#             print("Error al conectar a la base de datos:", e)

#     def crear_tabla(self):
#         cursor = self.conexion.cursor()
#         cursor.execute(
#             """
#             CREATE TABLE IF NOT EXISTS comentarios (
#                 id SERIAL PRIMARY KEY,
#                 nombre TEXT,
#                 correo TEXT,
#                 mensaje TEXT
#             )
#             """
#         )
#         self.conexion.commit()

#     def insertar_comentario(self, nombre, correo, mensaje):
#         cursor = self.conexion.cursor()
#         try:
#             cursor.execute(
#                 """
#                 INSERT INTO comentarios (nombre, correo, mensaje)
#                 VALUES (%s, %s, %s)
#                 """,
#                 (nombre, correo, mensaje)
#             )
#             self.conexion.commit()
#             print("Comentario insertado correctamente.")
#         except psycopg2.Error as e:
#             self.conexion.rollback()
#             print("Error al insertar comentario:", e)
#         finally:
#             cursor.close()

# # Mueve la función main fuera de la clase
# def main():
#     # Crear una instancia de la clase ConexionDBUsuario
#     conexion_db = ConexionDBUsuario()

#     while True:
#         print("Menú:")
#         print("1. Crear tabla de comentarios")
#         print("2. Insertar un comentario")
#         print("3. Salir")
#         opcion = input("Elija una opción (1/2/3): ")

#         if opcion == "1":
#             conexion_db.crear_tabla()
#         elif opcion == "2":
#             nombre = input("Ingrese su nombre: ")
#             correo = input("Ingrese su correo: ")
#             mensaje = input("Ingrese su mensaje: ")
#             conexion_db.insertar_comentario(nombre, correo, mensaje)
#         elif opcion == "3":
#             print("Saliendo del programa.")
#             break
#         else:
#             print("Opción no válida. Intente de nuevo.")

# if __name__ == "__main__":
#     main()

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
