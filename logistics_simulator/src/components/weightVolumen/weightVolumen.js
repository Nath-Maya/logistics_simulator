

function weightVolumen(boxWidth,boxLength,boxHeight) {
   //Factor de equialencia para convertir cm3 a kg.
   let volumetricWeightFactor = 400;

   const volumenCm3 = boxHeight * boxLength * boxWidth;
   const volumenMt = volumenCm3/1000000;
   const weightVolumen = volumenMt * volumetricWeightFactor;

   console.log("Peso volumen: " + weightVolumen)
   return weightVolumen;

}

const  calculatedWeightVolumen = weightVolumen(57,37,24);