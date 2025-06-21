const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, './proto/hello.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const helloProto = grpc.loadPackageDefinition(packageDefinition);

const client = new helloProto.HelloService(
  'localhost:3005',
  grpc.credentials.createInsecure()
);

client.SayHello({ name: 'Mundo' }, (err, response) => {
  if (err) console.error(err);
  else console.log('Respuesta gRPC:', response.message);
});