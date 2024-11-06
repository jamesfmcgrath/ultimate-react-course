import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header >
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Menu</h2>

      {/* Ternary operator */}
      {numPizzas > 0 ? (
        // React.Fragment long version if a key is needed
        <>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Risus inceptos purus nulla dis, sem ad. Faucibus sed ad facilisis gravida interdum facilisis. </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : <p>We're still working on our menu. Please come back later.</p>}
      {/* {numPizzas > 0 && (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* <div className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredient={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
            key={pizza.name}
          />
        ))}
      </div> */}

      {/* <Pizza
        name='Pizza Prosciutto'
        ingredient='Tomato, mozarella, ham, aragula, and burrata cheese'
        photoName='pizzas/prosciutto.jpg'
        price={10}
      />
      <Pizza
        name='Pizza Margherita'
        ingredient='Tomato and mozarella'
        photoName='pizzas/margherita.jpg'
        price={10}
      /> */}
    </main>
  );
}


function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className='pizza-info'>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  // const year = new Date().getFullYear();
  // const time = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert('We are open!');
  // else alert('We are closed!');

  // if (!isOpen) alert('We are closed!');

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
    </footer >
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>Order</button>
    </div>
  );
}

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
