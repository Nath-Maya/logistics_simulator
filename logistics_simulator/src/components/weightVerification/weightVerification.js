function weightVerification(actualWeight, volumetricWeight) {
  return actualWeight > volumetricWeight ? actualWeight : volumetricWeight;
}

const verifiedWeight = weightVerification(50, 23);
