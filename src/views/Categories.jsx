import React, {useEffect, useState} from 'react';
import { listProducts, listCategories } from '../data/data';
import ProductList from '../components/ProductList';
export default function Categories(){
  const [products,setProducts]=useState([]); const [cats,setCats]=useState([]); const [active,setActive]=useState(null);
  useEffect(()=>{ setProducts(listProducts()); setCats(listCategories()); },[]);
  const filtered = active ? products.filter(p=>p.category===active) : products;
  return (<div><h2>Categorías</h2><div className="mb-3"><button className="btn btn-outline-primary me-2" onClick={()=>setActive(null)}>Todas</button>{cats.map(c=><button key={c} className={'btn me-2 '+(c===active?'btn-primary':'btn-outline-primary')} onClick={()=>setActive(c)}>{c}</button>)}</div><ProductList products={filtered} /></div>);
}