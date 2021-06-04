ListaNombres1 = ["Julian", "Andres", "Antonio", "Julian", "Fredes"]
ListaNombres2 = ["Pedro", "Luis", "Antonio","Jose"]
listaResultante = []

# se hace la funcion 
def filtrarDatos(): 
  #se unen las listas a lista unida
  listaunida = ListaNombres1 + ListaNombres2
  # el set saca los valores repetidos, y con lista lo transformo en lista nuevamente y se lo paso a la lista
  listaResultante =set(list(listaunida))
  # imprimo los nombres no repetidos
  print("los nombre son: ")
  for nombre in listaResultante:
    print(nombre)


filtrarDatos()
