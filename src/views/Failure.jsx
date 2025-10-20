import React from 'react';
import { Link } from 'react-router-dom';
export default function Failure(){ return (<div><h2>Compra Fallida</h2><p>Error en el pago.</p><Link to='/checkout' className='btn btn-warning'>Reintentar</Link></div>); }