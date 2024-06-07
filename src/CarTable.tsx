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
    <table className="table table-striped">
    <thead>
        <tr>
        <th>ID</th>
        <th>Marca</th>
        <th>Ano</th>
        <th>Modelo</th>
        <th>Cor</th>
        <th>Imagem</th>
        <th>Ações</th>
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
            <button className="btn btn-primary me-2" onClick={() => startEditCar(car)}>Editar</button>
            <button className="btn btn-danger" onClick={() => removeCar(car.id)}>Remover</button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
);
};

export default CarTable;
