import {useParams} from "react-router-dom";

const ProductDetail=()=> {
    const { id } = useParams();
    return (
        <div>Detail {id}</div>
    )
}
export default ProductDetail
