import React from "react";

const CarId = ({ params: { carId } }: { params: { carId: string } }) => {
  console.log(carId);
  return <div>CarId</div>;
};

export default CarId;
