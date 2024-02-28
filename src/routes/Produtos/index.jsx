import { Link } from 'react-router-dom'
import { listaProdutos } from '../../components/listaProdutos'

export default function Produtos() {
    return (
        <main>
            <h1>Produtos</h1>
            <hr />
            {/* Lista de produtos */}
            {listaProdutos.map(prod =>(
                <div key={prod._id}>
                    <Link to={`/produtos/editar/${prod._id}`}>
                        Editar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}