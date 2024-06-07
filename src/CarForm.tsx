import React, { useState, useEffect } from 'react';

interface Car {
id: number;
marca: string;
ano: number;
modelo: string;
cor: string;
imagem: string;
}

interface CarFormProps {
addCar: (newCar: Car) => void;
editCar: (updatedCar: Car) => void;
carToEdit: Car | null;
clearEditCar: () => void;
}

const CarForm: React.FC<CarFormProps> = ({ addCar, editCar, carToEdit, clearEditCar }) => {
const [id, setId] = useState<number | ''>('');
const [marca, setMarca] = useState<string>('');
const [ano, setAno] = useState<number | ''>('');
const [modelo, setModelo] = useState<string>('');
const [cor, setCor] = useState<string>('');
const [imagem, setImagem] = useState<string>('');

useEffect(() => {
    if (carToEdit) {
    setId(carToEdit.id);
    setMarca(carToEdit.marca);
    setAno(carToEdit.ano);
    setModelo(carToEdit.modelo);
    setCor(carToEdit.cor);
    setImagem(carToEdit.imagem);
    }
}, [carToEdit]);

const handleAddOrEditCar = (e: React.FormEvent) => {
    e.preventDefault();
    if (id && marca && ano && modelo && cor) {
    const newCar: Car = { id: Number(id), marca, ano: Number(ano), modelo, cor, imagem };
    if (carToEdit) {
        editCar(newCar);
        clearEditCar();
    } else {
        addCar(newCar);
    }
    setId('');
    setMarca('');
    setAno('');
    setModelo('');
    setCor('');
    setImagem('');
    }
};

const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (ev) => {
        if (ev.target?.result) {
        setImagem(ev.target.result as string);
        }
    };
    reader.readAsDataURL(e.target.files[0]);
    }
};

return (
    <form onSubmit={handleAddOrEditCar}>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
        <label>ID:</label>
        <input
            type="number"
            value={id}
            onChange={(e) => setId(Number(e.target.value) || '')}
            required
            disabled={!!carToEdit}
        />
        </li>
        <li>
        <label>Marca:</label>
        <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
        />
        </li>
        <li>
        <label>Ano:</label>
        <input
            type="number"
            value={ano}
            onChange={(e) => setAno(Number(e.target.value) || '')}
            required
        />
        </li>
        <li>
        <label>Modelo:</label>
        <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
        />
        </li>
        <li>
        <label>Cor:</label>
        <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            required
        />
        </li>
        <li>
        <label>Imagem:</label>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
        />
        {imagem && <img src={imagem} alt="Car handleImageUpload" style={{ maxWidth: '100px', marginTop: '10px' }} />}
        </li>
        <li>
        <button type="submit">{carToEdit ? 'Editar Carro' : 'Adicionar Carro'}</button>
        {carToEdit && <button type="button" onClick={clearEditCar}>Cancelar Edição</button>}
        </li>
    </ul>
    </form>
);
};

export default CarForm;
