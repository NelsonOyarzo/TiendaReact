import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function Checkout(){
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form,setForm] = useState({name:'', address:'', city:'', shipping:'standard'});
  useEffect(()=>{ if(user) setForm(f=>({...f, name: user.name||f.name, address: user.address||f.address||'', city: user.city||f.city||''})); },[user]);
  function handleSubmit(e){ e.preventDefault(); if(Math.random()<0.75) navigate('/success'); else navigate('/failure'); }
  return (<div><h2>Checkout</h2><form onSubmit={handleSubmit}><div className="mb-3"><label>Nombre</label><input className="form-control" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div><div className="mb-3"><label>Dirección</label><input className="form-control" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} required/></div><div className="mb-3"><label>Ciudad</label><input className="form-control" value={form.city} onChange={e=>setForm({...form,city:e.target.value})} required/></div><div className="mb-3"><label>Envío</label><select className="form-select" value={form.shipping} onChange={e=>setForm({...form,shipping:e.target.value})}><option value="standard">Estándar</option><option value="express">Express</option></select></div><button className="btn btn-primary" type="submit">Pagar</button></form></div>);
}