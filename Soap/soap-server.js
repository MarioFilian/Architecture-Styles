const soap = require('soap');
const http = require('http');

// 1. Definimos el servicio SOAP
const service = {
  HelloService: {
    HelloPort: {
      sayHello: (args) => {
        return { message: `Hola ${args.name || 'Mundo'} desde SOAP` };
      }
    }
  }
};

// 2. Generamos el WSDL dinámicamente (sin archivo físico)
const wsdl = `
<definitions name="HelloService" targetNamespace="urn:HelloService" xmlns="http://schemas.xmlsoap.org/wsdl/"
  xmlns:tns="urn:HelloService" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
  <message name="sayHelloRequest">
    <part name="name" type="xsd:string"/>
  </message>
  <message name="sayHelloResponse">
    <part name="message" type="xsd:string"/>
  </message>
  <portType name="HelloPort">
    <operation name="sayHello">
      <input message="tns:sayHelloRequest"/>
      <output message="tns:sayHelloResponse"/>
    </operation>
  </portType>
  <binding name="HelloBinding" type="tns:HelloPort">
    <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>
    <operation name="sayHello">
      <soap:operation soapAction="urn:HelloService#sayHello"/>
      <input>
        <soap:body use="encoded" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
      </input>
      <output>
        <soap:body use="encoded" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
      </output>
    </operation>
  </binding>
  <service name="HelloService">
    <port name="HelloPort" binding="tns:HelloBinding">
      <soap:address location="http://localhost:3001/wsdl"/>
    </port>
  </service>
</definitions>
`;

// 3. Creamos el servidor HTTP y SOAP
const server = http.createServer((request, response) => {
  response.end('Servidor SOAP: Usar /wsdl');
});
server.listen(3001);
soap.listen(server, '/wsdl', service, wsdl);  // ¡Wsdl como string, no como archivo!
console.log('Servidor SOAP en http://localhost:3001/wsdl?wsdl');