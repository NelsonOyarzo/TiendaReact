import React, {useEffect, useState} from 'react';
import { listProducts } from '../data/data';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
export default function Home(){
  const [products,setProducts]=useState([]);
  const [q,setQ]=useState('');
  useEffect(()=> setProducts(listProducts()),[]);
  const filtered = products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.category.toLowerCase().includes(q.toLowerCase()));
  return (<div><h1>Home</h1><SearchBar value={q} onChange={setQ} placeholder="Buscar por nombre o categoría"/><ProductList products={filtered} /></div>);
}