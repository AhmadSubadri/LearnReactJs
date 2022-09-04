import logo from './logo.svg';
import './App.css';
import Title from './Title'

const phoneData = [
  {name: "iphone X", price: "10000000", discount: "50"},
  {name: "Oppo Find X", price: "14000000", discount: "30"},
  {name: "Redmi Note X", price: "12000000", discount: "42"},
];

function Product({name, price, discount = 0}) {
  return(
    <div>
      <h2>{name}</h2>
      <p>
        <s>Rp {price}</s> ({discount}%)
      </p>
      <p>
        <b>Rp {parseInt(price) - parseInt(price) * parseInt(discount) / 100}</b>
      </p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <Title />
      {phoneData.map((phone, id) => (
        <Product
          key={id}
          name={phone.name}
          price={phone.price}
          discount={phone.discount}>
        </Product>
      ))}
    </div>
  );
}

export default App;
