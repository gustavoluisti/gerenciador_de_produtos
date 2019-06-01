import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'


class Produtos extends Component {

    componentDidMount() {
        this.props.loadCategorias()
    }
    renderCategoria = (cat) => {
        return (
            <li key={cat.id}>
                <Link to={`/produtos/categoria/${cat.id}`} >
                <button 
                    onClick={() => this.props.removeCategoria(cat)}
                    className='btn btn-danger btn-sm'> x
                </button> {cat.categoria}</Link>
            </li>
        )
    }

    handleNewCategoria = (key) => {
        if (key.keyCode === 13) {
           this.props.createCategoria({
               categoria: this.refs.categoria.value
           })
           this.refs.categoria.value = ''
        }
    }

    render() {
        const { match, categorias } = this.props
        return (
            <div className='row'>
                <div className='col-md-2'>
                    <h3>Categorias</h3>
                    <ul>
                        {categorias.map(this.renderCategoria)}
                    </ul>
                    <div className='well well-sm'>
                        <input
                            onKeyUp={this.handleNewCategoria}
                            className='form-control'
                            type='text'
                            ref='categoria'
                            placeholder='Nova categoria' />
                    </div>

                    {/* <Link to='/produtos/categoria/1'>Categoria</Link>
                    {JSON.stringify(this.state.categorias)} */}
                </div>
                <div className='col-md-10'>
                    <h1>Produtos</h1>
                    <Route exact path={match.url} component={ProdutosHome} />
                    <Route exact path={match.url + '/categoria/:catId'} component={Categoria} />
                </div>
            </div>
        )
    }
}

export default Produtos