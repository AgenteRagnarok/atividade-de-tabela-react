import React, { useState } from 'react';
import '../../App.css';
import CarForm from '../../CarForm';
import CarTable from '../../CarTable';


interface Car {
  id: number;
  marca: string;
  ano: number;
  modelo: string;
  cor: string;
  imagem: string;
}



const Usuarios: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [carToEdit, setCarToEdit] = useState<Car | null>(null);

  const addCar = (newCar: Car) => {
    setCars([...cars, newCar]);
  };

  const removeCar = (id: number) => {
    setCars(cars.filter(car => car.id !== id));
  };

  const editCar = (updatedCar: Car) => {
    setCars(cars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
  };

  const startEditCar = (car: Car) => {
    setCarToEdit(car);
  };

  const clearEditCar = () => {
    setCarToEdit(null);
  };

  return (
    <div className="App">
      <h1>Adicione seus carros aqui!!</h1>
      <CarForm addCar={addCar} editCar={editCar} carToEdit={carToEdit} clearEditCar={clearEditCar} />
      <CarTable cars={cars} removeCar={removeCar} startEditCar={startEditCar} />
    </div>
  );
};



export default Usuarios;
