# Práctica 2. Yeray Pérez Peraza y José Alberto Mena García.
---

## Conversor en JavaScript de grados Celsius a Farenheit y viceversa.

### Rama con el añadido del pattenr de html5.


### Requisitos:


  + Deberá aceptarse como entrada cualquier número en punto flotante seguido de cualquier letra que represente una temperatura (-1.2e-3 f debería ser aceptado).

  + Deberán aceptarse cualquier prefijo de las cadenas Fahrenheit y Celsius para definir el tipo de temperatura (independiente de que estén en mayúsculas o minúsculas). F, Fa, Far, etc. deberían ser aceptadas como descripciones legales de Fahrenheit.

  + No debería aceptarse ninguna otra cadena de entrada que no se ajuste al formato descrito.

  + Debería ser posible poner espacios en blanco antes y después de la temperatura.

  + En esta práctica no es necesario implantar las pruebas.

  + Instale y use la herramienta web-developer para ayudarle en todas las fases.

  + Escriba su propia hoja de estilo distinta de la dada sin hacer uso de frameworks como Bootstrap.

  + Observe la rama html5pattern . Añada la form y el atributo patternpara controlar la entrada escrita en el input.

## Diferencias con la versión en la rama `master`

  * En la rama `html5pattern` el tag `<input>` se metió dentro de una form.

          <form id="formulario" onsubmit="calculate();">

    mientras que en la rama `master` estaba fuera

  * Además el `<input>` está controlado con el atributo `pattern` HTML5 de `<input>`:

          <input id="original"
                 placeholder="32F"
                 size="50"
                 title = "Escribe un número seguido de una de las letras 'F' o 'C'"
                 pattern="([-+]?\d+(?:\.\d*)?)\s*([fFcC])"
          />

  * El fichero `pattern.html` tiene ejemplos de como usar el atributo `pattern`

            <form>
              <fieldset>
                <p><label>Caracteres alfanuméricos:</label><input type="text" pattern="[a-zA-Z0-9]+" /></p>
                <p><label>Letras:</label><input type="text" pattern="[a-zA-Z]+" /></p>
                <p><label>Números:</label><input type="text" pattern="[0-9]+" /></p>
                <p><label>Fecha (dd/mm/YYYYYY):</label><input type="text" pattern="(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d" /></p>
                <p><label>Email:</label><input type="text" pattern="[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+" /></p>
                <input id="final" type="submit" value="Aceptar" />
              </fieldset>
            </form>

  * En esta rama en `temperature.js` se usa `alert` para enviar los mensajes en vez de insertarlos en la página con el método `innerHTML`.

  * Véase también [HTML `<input>` pattern Attribute in W3Schools](http://www.w3schools.com/tags/att_input_pattern.asp)



### Que aprendemos:

* HTML básico
* JavaScript básico
* Expresiones Regulares
* Un poquito de CSS
* Uso de Emmet (instale el plugin para su editor)
* Uso de Mocha y Chai
* Uso de Gulp

### Enlaces:
