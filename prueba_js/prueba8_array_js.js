let monitos = ["Chiquitin","Mamito","Zaza","Pipi","Popi"]

function agregarMonitos (nuevoMonito)

{
   monitos.push (nuevoMonito)
   console.log(monitos)
}

function imprimirMonitos ()

{
   for (var i = 0 ; i < monitos.length ; i++)
   {
      console.log(`Holi ${monitos[i]}`)
   }
}

agregarMonitos ("Tripita")
imprimirMonitos ()