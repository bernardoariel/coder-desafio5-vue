# desafio 7
## APPvue
    Implementamos vuex para tener el ultimo pago que se hizo
    Cargamos el array de pagos en el store, solo con las ultimas 20 transacciones
## NavBar
    Tenemos los links para acceder a las distintas rutas.
    Y Obtenemos el ultimo importe de pago en el store
    Agregue una ruta * que haga un redirect  (se que no es la mejor opcion hice para probar)

## Todos los registros
    Obtenemos el array completo de mockapi no lo cargamos en el state, el state tiene solo los ultimos 20 registros
## Pagar 
    Agrego un nuevo pago en el store y luego actualizo los 20 ultimos registros, mas el ultimo pago
    Cree ademas un efecto  en el primer registro que obtengo en la tabla, que esta ordenado de forma inversa para obtener ese efecto.

## La tabla
    la reutilizo para mostrar solo 5 registros del store
    Y para mostrar todos de la api

## detalle adicional 
    No se si entendi mal, pero la profe dijo que para optener los valores del state, hay que usar los getter, entendí como una obligacion. Pero en la documentacion, muestra oficial que podes mapear el mapState y usar esos, 
    los guetter son cuando necesitamos transformar los datos. Eso hice en el proyecto

    1.USE MOCKAPI..... ( te hice caso )
    2. Hay un pequeño bug a la hora de pagar... "creo que no se pinta de celestito la primera fila cuando haces el primer pago"
        me quemé la cabeza... lo di vuelta... dejaba de funcionar completo.... bueno lo deje así ( no lo evaluess ;) )
    3. La idea es mantener siempre 20 registros de transacciones en el store.
    



