const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Cargar el archivo .proto
const PROTO_PATH = path.join(__dirname, './proto/hello.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const helloProto = grpc.loadPackageDefinition(packageDefinition);

// Implementar el servicio
const server = new grpc.Server();
server.addService(helloProto.HelloService.service, {
  SayHello: (call, callback) => {
    callback(null, { 
      message: `Hola ${call.request.name || 'Mundo'} desde gRPC` 
    });
  }
});

// Iniciar el servidor
server.bindAsync(
  '0.0.0.0:3005',
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
    console.log('Servidor gRPC en http://localhost:3005');
  }
);