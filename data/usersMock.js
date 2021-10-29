function getMockData(){
    return {
        "users":[
           {
               "id": 1,
               "username": "UsuarioPrueba1",
               "email": "usuarioprueba1@gmail.com",
               "mejorPartidaFlappy": 
               {
                   "id": 10,
                   "puntaje": 25
               },
               "mejorPartidaTetris":
               {
                   "id": 100,
                   "puntaje": 100,
                   "usuarioId": 1
               }
   
           },
           {
               "id": 2,
               "username": "UsuarioPrueba2",
               "email": "usuarioprueba2@gmail.com",
               "mejorPartidaFlappy": 
               {
                   "id": 11,
                   "puntaje": 15,
                   "usuarioId": 2
               },
               "mejorPartidaTetris":
               {
                   "id": 101,
                   "puntaje": 200,
                   "usuarioId": 2
               }
           },
           {
               "id": 3,
               "username": "UsuarioPrueba3",
               "email": "usuarioprueba3@gmail.com",
               "mejorPartidaFlappy": 
               {
                   "id": 12,
                   "puntaje": 13,
                   "usuarioId": 2
               },
               "mejorPartidaTetris":
               {
                   "id": 102,
                   "puntaje": 50,
                   "usuarioId": 3
               }
           },
           {
               "id": 4,
               "username": "UsuarioPrueba4",
               "email": "usuarioprueba4@gmail.com",
               "mejorPartidaFlappy": 
               {
                   "id": 13,
                   "puntaje": 33,
                   "usuarioId": 4
               },
               "mejorPartidaTetris":
               {
                   "id": 103,
                   "puntaje": 333,
                   "usuarioId": 4
               }
           },
           {
               "id": 5,
               "username": "UsuarioPrueba5",
               "email": "usuarioprueba5@gmail.com",
               "mejorPartidaFlappy": 
               {
                   "id": 14,
                   "puntaje": 100,
                   "usuarioId": 4
               },
               "mejorPartidaTetris":
               {
                   "id": 104,
                   "puntaje": 207,
                   "usuarioId": 4
               }
           }
       ],
       "partidas":[
           {
               "id": 10,
               "puntaje":25,
               "codJuego": 1
           },
           {
                "id": 11,
                "puntaje":25,
                "codJuego": 1
           },
           {
                "id": 12,
                "puntaje":11,
                "codJuego": 1
           },
           {
                "id": 13,
                "puntaje":232,
                "codJuego": 1
           },
           {
                "id": 14,
                "puntaje":121,
                "codJuego": 1
           },
           {
                "id": 15,
                "puntaje":333,
                "codJuego": 1
           },
           {
                "id": 16,
                "puntaje":600,
                "codJuego": 1
           },
           {
                "id": 17,
                "puntaje":65,
                "codJuego": 1
           },
           {
                "id": 18,
                "puntaje":233,
                "codJuego": 1
           },
           {
                "id": 19,
                "puntaje":444,
                "codJuego": 1    
           }
       ]
   }
}

export{getMockData}