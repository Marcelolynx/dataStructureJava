/**
 * 0 Obter um usuario
 * 1 Obter o numero de telefone de um usuario a partir de seu Id
 * 2 Obter o endereco do usuario pelo Id
 */

 function getUser() {
   setTimeout(function() {

    return {
      id: 1,
      nome: 'Marcelo',
      birthDay: new Date()
    }
   }, 1000)
 }

 function getTelephone() {
    setTimeout(() =>{
      return {
      telephone: '1100999159852',
      ddd: 11
      }
    }, 2000);
 }


 function getAdress() {

 }


 const user = getUser()
 const telephone = getTelephone(usuario.id)

 console.log('usuario', usuario)
 console.log('telephone', telephone)