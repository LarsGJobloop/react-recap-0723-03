import style from './style.module.css'


const products = [
  {id: 1, name: "Mop", price: 435},
  {id: 2, name: "Cat", price: 435},
  {id: 3, name: "Dog", price: 435},
  {id: 4, name: "Bird", price: 435},
  {id: 5, name: "Fish", price: 435},
]

export function ProductList() {
  return (
    <ul>
      {
        products.map(product => {
          return (
            <li>
              <h3 className={product.name}>{product.name}</h3>
            </li>
          )
        })
      }
    </ul>
  )
}