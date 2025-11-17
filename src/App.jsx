import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        {/* header */}
        <header style={{ display:'flex', justifyContent:'space-between',padding:'15px 40px' , borderBottom:'1px solid #ccc' }}>
          <h1>SOCIETY</h1>
        <nav>
          <a href="#">shop</a>
          <a href="#">Featured</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
        </nav>
           <div>
            <button>Search</button>
            <button>Cart</button>
        </div>
        </header>
        {/* hero section */}
        <section>
          <h2>Style Destination</h2>
          <h1>Spring Collection </h1>
        <p>An electronic title provides the same information as a paper title and requires the same documents as a paper title</p>
        <div>
          <button>Shop Now</button>
          <button>Read More </button>
        </div>
        </section>
       {/* feature tiles */}
        <section style={{ display:'flex' ,justifyContent:'center',gap:'20px',padding:'20px 40px' }}>
          
          <div style={{backgroundColor:'#eee' ,width:'100px' ,height:'100px', margin:'auto'}}>
          <p>Online store</p>
          <a href="#">Shop Now</a>
          </div>
          <div style={{ backgroundColor:'#eee', width: '100px' ,height: ''}}>
            <p>New Items</p>
            <a href="#">Shop Now</a>
          </div>
           <div  style={{ backgroundColor:'#eee', width: '100px' ,height: '100px'}}>
          <p>Online store</p>
          <a href="#">Shop Now</a>
          </div>
          <div  style={{ backgroundColor:'#eee', width: '100px' ,height: '100px'}}>
            <p>New Items</p>
            <a href="#">Shop Now</a>
          </div>
        </section>
        {/* last Collection */}
        
        {/* <section style={{padding:'40px'}}>
          <h2 style={{ textAlign:'center'}}>Last Collection</h2>
          <div style={{display:'grid' ,gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'20px',marginTop:'20px'}}>
          {products.map(product=>(
            <div key={product.id}
             style={{ border:'1px solid #ddd' ,padding:'15px' ,textAlign:'center'}}>
              <div style={{ backgroundColor:'#f5f5f5' ,height:'120px' ,marginBottom:'10px'}}>Product image</div>
              <h4>{product.name }</h4>
              <p>${product.price.tofixed(2)}</p>
            </div>
          ))}
          </div>
        </section> */}

        {/*  more about store */ }
        <section style={{ backgroundColor:'#000', color:'#fff', padding:'50px 40px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{ width:'50%'}}> 
            <h3>GADGET STORE</h3>
            <p>Your trusted tech partner</p>
            <button>View More</button>
          </div>
          <div style={{ width:'40%' ,backgroundColor:'#333', height:'200px', textAlign:'center',lineHeight:'200px' }}>IMAGE</div>
        </section>
        {/* footer */}
        <footer style={{ borderTop:'1px solid #ccc',padding:'30px 40px'}}>
          <div style={{ display:'flex', justifyContent:'space-between'}}>
            <div>
              <h4>Shop</h4>
              <ul>
                <li>All Products</li>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div>
              <h4>Subscribe</h4>
              <input placeholder='your email' />
              <button>Go</button>
            </div>
          </div>
          <p style={{ textAlign:'center' ,marginTop:'20px'}}>{new Date().getFullYear()} SOCIETY. All rights reserved.</p>
        </footer>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
