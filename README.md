# melinode
meli challenge

Guía para utilizar las api

Acceso a las API y descripción:

/mutant : https://meliprueba2022.herokuapp.com/mutant
    Método: POST
    Resultado:
        - Si la cadena de adn tiene más de una cadena de caracteres repetidos 4 veces, el sistema devolverá un mensaje indicándole que el adn es mutante y dara como resultado un status 200 OK
        - Si la cadena de adn tiene una cadena de caracteres repetidos 4 veces o no tiene caracteres repetidos 4 veces, el sistema devolverá un mensaje indicándole que el adn no es mutante y dara como resultado un status 403 - Forbidden
    Características:
        - recibe un JSON con el método POST
        - permite que el array sea de un tamaño nXn
        - Valida que solo se usen las letras A,C,T,G
        - Muestra en el resultado la cantidad de coincidencias horizontales, verticales y/o diagonales que haya encontrado
        - Para acelerar el procesamiento, el algoritmo tan pronto encuentra mas de una cadena de repeticiones muestra el resultado como Mutante
        

/stats : https://meliprueba2022.herokuapp.com/stats
    Método: GET
    Resultado: la API entrega json con la siguiente información:
        - Total de ejecuciones que dieron como resultado "mutante" en la variable "count_mutant_dna"
        - Total de ejecuciones que dieron como resultado "No mutante" en la variable "count_human_dna"
        - ratio de ejecuciones con resultado "mutante" en la variable "ratio", se calcula diviendo la variable "count_mutant_dna" sobre la variable "count_human_dna"


Uso de las API

paso previo: 1. Descargue e instale un programa para pruebas de api, recomiendo hacerlo con Postman. Puede descargarlo de este link: https://www.postman.com/downloads/

Para probar la API realice los siguientes pasos:

- API /mutant: esta api usa el método POST para enviar los datos.
    1. abra una pestaña del programa 
    2. En la parte superior de la pantalla escriba la url: https://meliprueba2022.herokuapp.com/mutant
    3. A la izquierda de dicha url escoja el metodo POST
    4. Diríjase a la zona central y escoja la opción "Body"
    5. Dentro de la zona de parámetros elija la opción "raw" y en el tipo de archivo escoja la opción "JSON"
    6. Aparecerá una zona en la cuál usted puede escribir un JSON que será enviado por el método POST hacia el servidor.
    7. Escriba el JSON respectivo en la casilla
    8. Dé clic en el botón SEND ubicado al lado de la URL
    9. En la parte inferior de la pantalla podrá ver el resultado del llamado a la API para

- API /stats: esta api usa el método GET para enviar los datos.
    1. abra una pestaña del programa 
    2. En la parte superior de la pantalla escriba la url:https://meliprueba2022.herokuapp.com/stats
    3. A la izquierda de dicha url escoja el metodo GET
    4. Dé clic en el botón SEND ubicado al lado de la URL
    5. En la parte inferior de la pantalla podrá ver el resultado del llamado a la API para






    

