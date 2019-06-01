import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

const Apis = {
    loadCategorias: () => api.get('categorias'),
    deleteCategoria: (id) => api.delete('categorias/'+id),
    createCategoria : (categoria) => api.post('categorias', categoria)
}
export default Apis