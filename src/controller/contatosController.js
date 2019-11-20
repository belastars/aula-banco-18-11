const contatosCollection = require("../model/contatoSchema");

// const getAll = (request, response) => {
//   console.log(request.url);
//   //response.status(200).send(model.agenda);
// };

// const getById = (request, response) => {
//   const id = request.params.id;
//   response.status(200).send(contatos.find(tarefa => tarefa.id == id));
// };
const pushAdd = (request, response) => {
  // novo objeto para a nossa coleção
    const contatoDoBory = request.body
    const contato = new contatosCollection(contatoDoBory)

    contato.save((error) => {
      //if(error !== null && error !== underfined)
      if(error) {
        return response.status(400).send(error)
      }else{
        return response.status(201).send(contato)
      }
    })
};

const getById = (request,response) =>{
   const idParam = request.params.id
   contatosCollection.findById(idParam,(error,contato) => {    
    if(error){
      return response.status(500).send(error)
    } else {
      if(contato){
        return response.status(200).send(contato)
      } else{
        return response.status(404).send("Contato não encontrado")
      }
    }
  })
}

const getByName = (request, response) =>{
  const nomeParam = request.params.nome
  const regex = new RegExp(nomeParam)
  const filtro = { nome: regex }
  console.log(nomeParam)
 
    contatosCollection.find(filtro,(error, contatos) => {
      if(error){
        return response.status(500).send(error)
      } else {
        return response.status(200).send(contatos)
      }
    })
  
  };


  const deletarById = (request, response) => {
    const idParam = request.params.id
    contatosCollection.findOneAndDelete(idParam, (error,contato) => {
      if(error){
        return response.status(500).send(error)
    } else{
      if(contato){
       return response.status(200).send('Contato excluído com sucesso') 
      } else{
        return response.sendStatus(404)
      }
    }
    
   })
  }


const getAll = (request, response) =>{
//response.status(200).send(model.agenda)
  console.log(request.url)
  contatosCollection.find((error,contatos) => {

    if(error){
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })

};


// const pushAdd = (request,response) => {
//      const contato =request.body;
//      contato.id = Math.random().toString(36).substr(-8)
//      let contatoExistente = model.agenda.contatos.find(item => item.nome == contato.nome)
      
//      console.log(contatoExistente)
     
//      if(contatoExistente){
//         response.status(400).send("Este contato já existe!")
//       } else{
//         model.agenda.contatos.push(contato)
//         response.status(201).send("Contato cadastrado com Sucesso")
//       }
     
// }


module.exports = {
  getById,
  getByName,
  getAll,
  deletarById,
  pushAdd

}

