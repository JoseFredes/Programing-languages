#include <iostream>
int main() {
  int x;
  int numeros, resultado= 0;

  std::cout << "Dijite un numero ";
  std::cin>>x;
  for(int i=1;i<=x;i++){
    std::cout << "Dijite los numeros ";
    std::cin>>numeros;
    resultado = resultado + numeros;
  }
  std::cout << "El numero ingresado es " << x <<"\n";
  std::cout << " la suma es " << resultado;
  
}