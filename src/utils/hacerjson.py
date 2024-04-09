import json
import random
from faker import Faker
from datetime import datetime

# Inicializar Faker para generar nombres y apellidos ficticios
faker = Faker()

# Lista de tipos de documento
usuario_gestor = ["andrgohr", "claulelo", "adrijaag", "pedrper"]

# Lista de tipos de documento
tipos_documento = ["C", "T", "E", "R"]

# Lista de tipos de plan
tipos_plan = ["Poliza", "PBS", "Particular"]

# Lista de sedes
sedes = ["Industriales", "Calle 100", "Chipichape"]

# Lista de tipos de gestión
tipos_gestion = ["Acondicionamiento Fisco", "Evaluacion Hidroterapia", "Evaluacion miembro superior"]

# Lista de diagnósticos
diagnosticos = ["0 - NO APLICA",
                "A000 - COLERA DEBIDO A VIBRIO CHOLERAE O1 BIOTIPO CHOLERAE",
                "A001 - COLERA DEBIDO A VIBRIO CHOLERAE O1 BIOTIPO EL TOR",
                "A009 - COLERA NO ESPECIFICADO",
                "A010 - FIEBRE TIFOIDEA",
                "A011 - FIEBRE PARATIFOIDEA A",
                "A012 - FIEBRE PARATIFOIDEA B",
                "A013 - FIEBRE PARATIFOIDEA C"]

# Función para generar una fecha de gestión ficticia
def generar_fecha_gestion():
    return faker.date_this_decade().strftime('%Y-%m-%d')  # Convertir la fecha a string

# Función para generar un número de documento ficticio
def generar_numero_documento():
    return str(random.randint(1000000, 999999999))

# Función para generar un nombre ficticio
def generar_nombre():
    return faker.first_name()

# Función para generar un apellido ficticio
def generar_apellido():
    return faker.last_name()

# Función para generar un médico remitente ficticio
def generar_medico_remitente():
    return faker.name()

# Generar datos ficticios
datos = []
for _ in range(100):  # Crear 100 registros ficticios
    dato = {
        "Usuario_Gestor": random.choice(usuario_gestor),
        "fecha_gestion": generar_fecha_gestion(),
        "tipo_documento": random.choice(tipos_documento),
        "numero_documento": generar_numero_documento(),
        "tipo_plan": random.choice(tipos_plan),
        "sede": random.choice(sedes),
        "nombre": generar_nombre(),
        "apellido": generar_apellido(),
        "tipo_gestion": random.choice(tipos_gestion),
        "diagnostico": random.choice(diagnosticos),
        "medico_remitente": generar_medico_remitente()
    }
    datos.append(dato)

# Escribir los datos en un archivo JSON
with open("datosGestionFTReal.json", "w") as archivo:
    json.dump(datos, archivo, indent=2)

print("Se han generado los datos ficticios y se han guardado en el archivo 'datos.json'.")

