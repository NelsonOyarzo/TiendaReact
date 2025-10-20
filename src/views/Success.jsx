import React from 'react';
import { Link } from 'react-router-dom';
export default function Success(){ return (<div><h2>Compra Exitosa</h2><p>Gracias por su compra!</p><Link to='/' className='btn btn-primary'>Volver</Link></div>); }