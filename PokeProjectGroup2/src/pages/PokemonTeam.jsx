import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import CreatableSelect from 'react-select/creatable';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

function App() {
  const [data, setData] = useState([]);
  const [CreateTeam, SetCreateTeam] = useState('');
  const [Pokemon, SetPokemon] = useState([]);
  const [uCreateTeam, uSetCreateTeam] = useState('');
  const [uPokemon, uSetPokemon] = useState([]);
  const [editId, setEditID] = useState(-1);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Pokemon')
      .then(res => {
        setData(res.data);
        const pokemons = res.data.map(p => ({ value: p.Pokemon, label: p.Pokemon }));
        setOptions(pokemons);
      })
      .catch(er => console.log(er));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (CreateTeam === '' || Pokemon.length === 0) {
      Swal.fire({
        title: "Error",
        text: "Create Team dan Pokemon harus diisi",
        icon: "error"
      });
      return;
    }
    const id = String(data.length + 1);
    axios.post('http://localhost:3000/Pokemon', { id: id, CreateTeam: CreateTeam, Pokemon: Pokemon.map(p => p.value) })
      .then(res => {
        location.reload();
      })
      .catch(er => console.log(er));
  };

  const handleEdit = (id) => {
    axios.get('http://localhost:3000/Pokemon/' + id)
      .then(res => {
        const pokemonData = res.data;
        uSetCreateTeam(pokemonData.CreateTeam);
        uSetPokemon(pokemonData.Pokemon.map(p => ({ value: p, label: p })));
      })
      .catch(er => console.log(er));
    setEditID(id);
  };

  const handleUpdate = () => {
    axios.put('http://localhost:3000/Pokemon/' + editId, { id: editId, CreateTeam: uCreateTeam, Pokemon: uPokemon.map(p => p.value) })
      .then(res => {
        console.log(res);
        location.reload();
        setEditID(-1);
      })
      .catch(er => console.log(er));
  };

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/Pokemon/' + id)
      .then(res => {
        location.reload();
      })
      .catch(er => console.log(er));
  };

  return (
    <div className='container'>
      <h2 className="text-center text-white mt-4">Create Your Team</h2>
      <div className='form-div bg-dark p-4 rounded'>
        <form onSubmit={handleSubmit} className="form-grid row">
          <div className="col-md-6 mb-3">
            <label className="text-white">Create Team</label>
            <input type='text' className='form-control' placeholder='Create Team' onChange={e => SetCreateTeam(e.target.value)} />
          </div>
          <div className="col-md-6 mb-3">
            <label className="text-white">Pokemon</label>
            <CreatableSelect
              isMulti
              options={options}
              onChange={SetPokemon}
              value={Pokemon}
              formatCreateLabel={(inputValue) => `Create "${inputValue}"`}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-success btn-block">Add Data</button>
          </div>
        </form>
      </div>
      <table className="table table-dark table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Team</th>
            <th>Pokemon</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((Pokemon, index) =>
              Pokemon.id === editId ?
                <tr key={index}>
                  <td>{Pokemon.id}</td>
                  <td><input type='text' className='form-control' value={uCreateTeam} onChange={e => uSetCreateTeam(e.target.value)} /></td>
                  <td>
                    <CreatableSelect
                      isMulti
                      options={options}
                      value={uPokemon}
                      onChange={uSetPokemon}
                      formatCreateLabel={(inputValue) => `Create "${inputValue}"`}
                    />
                  </td>
                  <td>
                    <button className="btn btn-warning" onClick={handleUpdate}>Update</button>
                  </td>
                </tr>
                :
                <tr key={index}>
                  <td>{Pokemon.id}</td>
                  <td>{Pokemon.CreateTeam}</td>
                  <td>{Array.isArray(Pokemon.Pokemon) ? Pokemon.Pokemon.join(', ') : Pokemon.Pokemon}</td>
                  <td>
                    <button className="btn btn-info mr-2" onClick={() => handleEdit(Pokemon.id)}><FaEdit /></button>
                    <button className="btn btn-danger" onClick={() => handleDelete(Pokemon.id)}><FaTrash /></button>
                  </td>
                </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;