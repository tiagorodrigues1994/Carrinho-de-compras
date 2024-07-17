import axios from 'axios'
// ir na pasta que contem o projeto clicar em abrir outrocmd , digitar esse comando apra rodar a api --
// json-server --watch db.json
export const api = axios.create({
  baseURL: "http://localhost:3000"
})
