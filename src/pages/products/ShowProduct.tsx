import { useParams } from "react-router-dom"
import { useCart } from "../../hooks/useCart"

export default function ShowProduct() {
  const { getProduct } = useCart()
  const { id } = useParams()

  console.log(id)

  const item = getProduct(id)

  return (
    <div className="item">
      <h2>{item?.name}</h2>
      <p>{item?.description}</p>
    </div>
  )
}