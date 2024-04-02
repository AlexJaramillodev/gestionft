import json
import random

# Función para generar un nombre ficticio
def generar_nombre():
    nombres = ["Juan", "María", "Luis", "Ana", "Pedro", "Sofía", "Diego", "Laura", "Carlos", "Marta",
           "Andrés", "Camila", "Javier", "Valentina", "Fernando", "Isabella", "Alejandro", "Gabriela",
           "Daniel", "Lucía", "Manuel", "Juliana", "Miguel", "Daniela", "José", "Paula", "Ricardo", "Elena",
           "Felipe", "Verónica"]
    apellidos = ["Gómez", "Rodríguez", "Pérez", "Martínez", "González", "Hernández", "López", "Díaz", "Sánchez", "Torres",
             "Ramírez", "Flores", "Vázquez", "Rojas", "Reyes", "Morales", "Gutiérrez", "Ortiz", "Castillo", "Jiménez",
             "Ruiz", "Álvarez", "Fernández", "García", "Núñez", "Cruz", "Mendoza", "Aguilar", "Silva", "Ramos"]
    return random.choice(nombres) + " " + random.choice(apellidos)

# Generar 50,000 datos ficticios
datos = []
for _ in range(50):
    dato = {
        "Nombre_completo": generar_nombre(),
        "Documento_de_identidad": str(random.randint(100000000, 999999999)),
        "Salario": round(random.uniform(1000, 5000), 2),
        "Ciudad": random.choice(["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cucuta", "Caldas", "Tolima", "Bucaramanga", "Bello", "Pereira", "Armenia", "Envigado", "Rionegro"]),
        "Tipo_de_independiente": random.choice(["Independiente", "Prestación de servicio", "Voluntario"]),
        "Sector_económico": random.choice(["Tecnología", "Salud", "Educación", "Comercio", "Manufactura", "Finanzas", "Servicios", "Turismo",
                       "Construcción", "Transporte", "Agricultura", "Medios de comunicación", "Energía", "Ingeniería",
                       "Entretenimiento", "Alimentos y bebidas", "Automoción", "Bienes raíces", "Textil", "Software",
                       "Telecomunicaciones", "Consultoría", "Seguros", "Minería", "Moda", "Biotecnología", "Aeroespacial",
                       "Arte y cultura", "Publicidad"]),
        "Nivel_de_riesgo": random.randint(1, 5)
    }
    datos.append(dato)

# Escribir los datos en un archivo JSON
with open("datosPrueba.json", "w") as archivo:
    json.dump(datos, archivo, indent=2)

print("Se han generado 50,000 datos ficticios y se han guardado en el archivo 'datos.json'.")