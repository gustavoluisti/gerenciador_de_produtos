import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

const Apis = {
    loadCategorias: () => api.get('http://localhost:3000/categorias'),
    deleteCategoria: (id) => api.delete('http://localhost:3000/categorias/'+id)
}
export default Apis