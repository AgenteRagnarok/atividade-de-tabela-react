import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavBar/Navbar';
import CarForm from './CarForm';
import CarTable from './CarTable';
import { Container } from 'react-bootstrap';

interface Car {
id: number;
marca: string;
ano: number;
modelo: string;
cor: string;
imagem: string;
}

const App: React.FC = () => {
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
    <NavigationBar />
    <Container className="mt-4">
        <h1 className="mb-4">Gerenciar Carros</h1>
        <CarForm addCar={addCar} editCar={editCar} carToEdit={carToEdit} clearEditCar={clearEditCar} />
        <CarTable cars={cars} removeCar={removeCar} startEditCar={startEditCar} />
    </Container>
    </div>
);
};

export default App;
