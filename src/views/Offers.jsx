import React, {useEffect, useState} from 'react';
import { listOffers } from '../data/data';
import ProductList from '../components/ProductList';
export default function Offers(){ const [offers,setOffers]=useState([]); useEffect(()=> setOffers(listOffers()),[]); return (<div><h2>Ofertas</h2><ProductList products={offers} /></div>); }