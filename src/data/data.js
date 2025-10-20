const STORAGE_KEY = 'tienda_online_db_v1';
const defaultProducts = [
  { id: 1, name: 'Camiseta React', price: 19990, category: 'Ropa', stock: 10, description: 'Camiseta oficial React', onSale: false },
  { id: 2, name: 'Taza JS', price: 8990, category: 'Accesorios', stock: 25, description: 'Taza para programadores', onSale: true, discount: 20 },
  { id: 3, name: 'Sticker CSS', price: 1990, category: 'Accesorios', stock: 100, description: 'Sticker brillante', onSale: false },
];

function readDB(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw){ localStorage.setItem(STORAGE_KEY, JSON.stringify({products: defaultProducts})); return {products: defaultProducts}; }
  try { return JSON.parse(raw); } catch(e){ localStorage.setItem(STORAGE_KEY, JSON.stringify({products: defaultProducts})); return {products: defaultProducts}; }
}
function persist(db){ localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); }

export function listProducts(){ return readDB().products.slice(); }
export function getProductById(id){ return readDB().products.find(p=>p.id===Number(id))||null; }
export function createProduct(product){ const db=readDB(); const nid = db.products.reduce((m,p)=>Math.max(m,p.id),0)+1; const np={...product,id:nid}; db.products.push(np); persist(db); return np; }
export function updateProduct(id,changes){ const db=readDB(); const idx=db.products.findIndex(p=>p.id===Number(id)); if(idx===-1) return null; db.products[idx]={...db.products[idx],...changes}; persist(db); return db.products[idx]; }
export function deleteProduct(id){ const db=readDB(); const before=db.products.length; db.products=db.products.filter(p=>p.id!==Number(id)); persist(db); return db.products.length<before; }
export function listCategories(){ const db=readDB(); return Array.from(new Set(db.products.map(p=>p.category))); }
export function listOffers(){ const db=readDB(); return db.products.filter(p=>p.onSale); }
