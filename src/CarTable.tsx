import React from 'react';

interface Car {
id: number;
marca: string;
ano: number;
modelo: string;
cor: string;
imagem: string;
}

interface CarTableProps {
cars: Car[];
removeCar: (id: number) => void;
startEditCar: (car: Car) => void;
}

const CarTable: React.FC<CarTableProps> = ({ cars, removeCar, startEditCar }) => {
return (
    <table>
    <thead>
        <tr>
        <th>ID</th>
        <th>Marca</th>
        <th>Ano</th>
        <th>Modelo</th>
        <th>Cor</th>
        <th>Imagem</th>
        </tr>
    </thead>
    <tbody>
        {cars.map((car) => (
        <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.marca}</td>
            <td>{car.ano}</td>
            <td>{car.modelo}</td>
            <td>{car.cor}</td>
            <td>{car.imagem && <img src={car.imagem} alt="Car" style={{ maxWidth: '100px' }} />}</td>
            <td>
            <button onClick={() => startEditCar(car)}>Editar</button>
            <button onClick={() => removeCar(car.id)}>Remover</button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
);
};

export default CarTable;
