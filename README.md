# Challenge Encriptaor
# Este Challenge se realiza con la base de los cursos que Alura Latam me provee para lograr competencias de Front End
# Se parte de un archivo index.html, con formatos establecidos a través de clases vinculadas en un archivo css 
# De igual manera la parte lógica del encriptador se realiza con sustento en unos criterios del challege.
# Las "llaves" de encriptación que utilizaremos son las siguientes:
# La letra "e" es convertida para "enter"
# La letra "i" es convertida para "imes"
# La letra "a" es convertida para "ai"
# La letra "o" es convertida para "ober"
# La letra "u" es convertida para "ufat"

# Como se aprecia en el condicionamiento de las llaves, la encriptación sólo se hace para las letras vocales. 
# este proceso lo realizo mediante una funcion javascript llamada cifra(a) que recibe un parametro en el que lleva
# la id del campo de textarea inicial,  para poder hacer inicialmente la evaluación.
# Cada letra de la cadena de texto es evaluada para encriptarla conforme el condicionamiento. 
# Esta cadena se almacena en una variable tx que será entregada al campo al textarea con id tx (encriptada)
# el evento que llama la funcion de cifra para encriptar es un clic sobre el botón correspondiente. 

# Igualmente existe una función para decifrar una cadena codificada, esta función es similar a la anterior, 
# manejando de forma inversa la letra que se toma de la cadena cifrada. Cuando se encuentra una vocal, se realiza 
# una evaluación de las letras subsiguientes para verificar si hace parte de una subcadena con condición del cifrado, de ser así
# toma sólo la vocal y deshecha los siguientes caracteres según el caso, para continuar con la evaluación de los demásca
# caracteres válidos. 
# Esta cadena resultante se almacena en una variable tx y al final se lleva al campo textarea tx para mostrarlo.

# Finalmente existe un botón para copiar, el evento clic sobre este botón, llama la función copiar(a) que toma el campo contenedor de
# la cadena encriptada y mediante una función externa de copiado elemento.execCommand("copy") realiza la copia en el portapapeles 
# del sistema y este valor puede ser pegado posteriormente en cualquier otro campo o documento. 

