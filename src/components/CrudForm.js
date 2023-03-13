import React, { useState, useEffect } from 'react';






const CrudForm = () => {
const [form, setForm] = useState({})



  //controlar los eventos
  
  //controlar los cambios
  const handleChange = (e)=> {}
  
  //controlar evento del Boton Submit
  const handleSubmit = (e)=> {}
  
  //controlar evento del Boton Reset para limpiar el formulario y el estado 
  const handleReset = (e)=> {}


  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={ handleSubmit }>
    <input type="text" name= "name" placeholder='Nombre'onChange={ handleChange } value={form.name} />
    <input type="text" name= "constelation" placeholder='Constelacion'onChange={ handleChange }value={form.constaleation} />
    <input type="reset" value="Limpiar" onChange={ handleReset }/>

      </form>

    </div>
  )
}

export default CrudForm