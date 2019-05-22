app.controller('indexController', ['$scope','indexFactory', ($scope, indexFactory) =>{

    const connectionOptions = {
        reconnectionAttempts: 3,
        reconnectionDelay: 600
    };

    indexFactory.connectSocket('http://localhost:3000',{
    }).then((socket)=>{
        console.log('Connected ', socket);
    }).catch((err)=>{
        console.log(err)
    });

}]);