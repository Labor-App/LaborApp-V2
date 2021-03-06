CREATE DATABASE LaborApp;
USE LaborApp;

CREATE TABLE Paises(
codigoPais INT(10) NOT NULL,
nombrePais VARCHAR(100) NOT NULL,
PRIMARY KEY(codigoPais)
);


CREATE TABLE Departamentos (
codigoDepartamento INT(10) NOT NULL,
nombreDepartamento VARCHAR(100) NOT NULL,
codigoPais INT(10) NOT NULL,
PRIMARY KEY(codigoDepartamento),
FOREIGN KEY (codigoPais) REFERENCES Paises(codigoPais)
);

CREATE TABLE Ciudades (
codigoCiudad INT(10) NOT NULL,
nombreCiudad VARCHAR(100) NOT NULL,
codigoDepartamento INT(10) NOT NULL,
PRIMARY KEY(codigoCiudad),
FOREIGN KEY (codigoDepartamento) REFERENCES Departamentos(codigoDepartamento)
);


CREATE TABLE Personas (
tipoDocumentoPersona VARCHAR(70)   NOT NULL,/*dato necesario para ingresar persona natural*/
numeroDocumentoPersona INT(60)  NOT NULL , /*dato necesario para ingresar persona natural*/
nombresPersona VARCHAR(70)   NOT NULL,/*dato necesario para ingresar persona natural*/
apellidosPersona VARCHAR(70)  NOT NULL,/*dato necesario para ingresar persona natural*/
fechaNacimientoPersona DATE  NULL, /* DATE - format YYYY-MM-DD */
direccionPersona VARCHAR(70)   NULL,/*dato necesario para ingresar persona natural*/
generoPersona VARCHAR(70)  NULL,
lugarExpedicionCedulaPersona INT (10)   NULL,/**el lugar de expedición es el código de la ciudad que se encuentra en la tabla ciudades**/
contrasenaPersona VARCHAR(70)   NULL, /*Este dato es null porque las personas naturales no tienen contrasena*/
codigoCiudad INT(10) NOT NULL,/*Esta es la ciudad de residencia, dato necesario para ingresar persona natural - llave foranea */
PRIMARY KEY(tipoDocumentoPersona,numeroDocumentoPersona),
FOREIGN KEY(codigoCiudad) REFERENCES Ciudades(codigoCiudad)
);

CREATE TABLE correoPersonas(
correoPersona VARCHAR(70) NULL,
tipoDocumentoPersona VARCHAR(70)   NOT NULL,/*dato necesario para ingresar persona natural*/
numeroDocumentoPersona INT(60)  NOT NULL , /*dato necesario para ingresar persona natural*/
PRIMARY KEY(correoPersona),
FOREIGN KEY (tipoDocumentoPersona, numeroDocumentoPersona) REFERENCES Personas (tipoDocumentoPersona, numeroDocumentoPersona)
);


CREATE TABLE Empresa (
NItEmpresa INT(50) NOT NULL,
nombreEmpresaRS VARCHAR(300) NOT NULL,
direccionEmpresa VARCHAR(200) NOT NULL,/* este dato no puede ser nulo porque debe de existir una */
telefonoEmpresa INT(60)  NULL,
emailEmpresa VARCHAR(100) NULL,
codigoCiudad INT(10) NOT NULL,
tipoDocumentoPersona VARCHAR(70)    NULL, /*llave foranea*/
numeroDocumentoPersona INT(60)   NULL, /*dato necesario para ingresar persona natural*/
PRIMARY KEY(NItEmpresa),
FOREIGN KEY(tipoDocumentoPersona,numeroDocumentoPersona) REFERENCES Personas(tipoDocumentoPersona,numeroDocumentoPersona),
FOREIGN KEY(codigoCiudad) REFERENCES Ciudades(codigoCiudad)
);




CREATE TABLE PersonaNatural(
IdPersonaNatural INT (60) NOT NULL, /* Este número se obtiene que asignarle un número a cada tipo de documento y concatenarlo con el número en el frotend*/
tipoDocumentoPersona VARCHAR(70)   NOT NULL,
numeroDocumentoPersona INT(60)  NOT NULL, /*dato necesario para ingresar persona natural*/
PRIMARY KEY(IdPersonaNatural),
FOREIGN KEY(tipoDocumentoPersona,numeroDocumentoPersona) REFERENCES Personas(tipoDocumentoPersona,numeroDocumentoPersona)
);


CREATE TABLE consultorioJuridico (
IdconsultorioJuridico INT (60) NOT NULL AUTO_INCREMENT,
tipoConsultorioJuridico VARCHAR(100) NULL,/*En este campo se detalla si es individual(un solo abogado) o grupal(un consultorio de una universidad o algo por el estílo)*/
nombreConsultorioJuridico VARCHAR(300) NOT NULL,
telefonoConsultorioJuridico INT(60) NOT NULL,
emailConsultorioJuridico VARCHAR(100) NULL,
direccionConsultorioJuridico VARCHAR(200) NULL,
tipoDocumentoPersona VARCHAR(70)   NOT  NULL,/*Dato de administrador del */
numeroDocumentoPersona INT(60)  NOT NULL, /* Consultorio Jurídico*/
codigoCiudad INT(10) NOT NULL,
PRIMARY KEY(IdconsultorioJuridico),
FOREIGN KEY(tipoDocumentoPersona,numeroDocumentoPersona) REFERENCES Personas(tipoDocumentoPersona,numeroDocumentoPersona),
FOREIGN KEY(codigoCiudad) REFERENCES Ciudades(codigoCiudad)
) ;

CREATE TABLE contratoLaboral(
idContrato INT (60) NOT NULL AUTO_INCREMENT,
tipoContrato VARCHAR(100) NOT NULL,/* puede ser o indefinido, por prestación de servicio, termino fijo u otros*/
fechaInicioContrato DATE NOT NULL,
fechaFinalContrato DATE NULL,
ultimoSalario INT (60) NOT NULL,
descripcionFunciones TEXT(40000) NOT NULL, /* En el front hay que incorporar un contador de caractéres*/
tipoDocumentoPersona VARCHAR(70)   NOT NULL,/*Dato de administrador del */
numeroDocumentoPersona INT(60)  NOT NULL, /* Consultorio Jurídico*/
IdPersonaNatural INT (60) NULL,/* El contato puede ser con una persona natural o... */
NItEmpresa INT(50) NULL, /* El contato puede ser con una empresa */
PRIMARY KEY (idContrato),
FOREIGN KEY(tipoDocumentoPersona,numeroDocumentoPersona) REFERENCES Personas(tipoDocumentoPersona,numeroDocumentoPersona),
FOREIGN KEY (IdPersonaNatural) REFERENCES PersonaNatural(IdPersonaNatural),
FOREIGN key (NItEmpresa) REFERENCES Empresa(NItEmpresa)
);


CREATE TABLE demandaEmpresa(
idDemandaEmpresa INT (60) NOT NULL AUTO_INCREMENT,
fechaDemandaEmpresa DATE NOT NULL,
codigoCiudad INT(10) NOT NULL,
tipoDocumentoPersona VARCHAR(70)   NOT NULL,
numeroDocumentoPersona INT(60)  NOT NULL, /*dato necesario para ingresar persona natural*/
NItEmpresa INT(50) NOT NULL,
idContrato INT (60) NOT NULL,
fechaPropuestaRadicacionDemandaEmpresa DATE NULL,
fecharRealRadicacionDemandaEmpresa DATE NULL,
fechaPropuestaRadicacionDerechoPetiEmpresa DATE NULL,
fecharRealRadicacionDerechoPetiEmpresa DATE NULL,
informeDesicionFinalDemandaEmpresa TEXT(40000)  NULL, /*La persona puede informar sobre el resultado final en su demanda*/
respuestaFinalDemandaEmpresa bit NULL, /*y finalmente informa con un vedadero o falso sobre la respuesta final al caso*/
montoTotalDemandaPersJuri float NULL,/* agregado sobre diseño incial, 13,mar,2019*/
superaMinimaCuantiaPersJuri  bit NULL,/* agregado sobre diseño incial, 13,mar,2019*/
PRIMARY KEY(idDemandaEmpresa),
FOREIGN KEY(tipoDocumentoPersona,numeroDocumentoPersona ) REFERENCES Personas(tipoDocumentoPersona,numeroDocumentoPersona),
FOREIGN KEY(NItEmpresa) REFERENCES Empresa(NItEmpresa),
FOREIGN KEY(codigoCiudad) REFERENCES Ciudades(codigoCiudad),
FOREIGN KEY (idContrato) REFERENCES contratoLaboral(idContrato)
);

CREATE TABLE demandaPersonaNatural(
idDemandaPersonaNatural INT (60) NOT NULL AUTO_INCREMENT,
fechaDemandaPersonaNatural DATE NOT NULL,
codigoCiudad INT(10) NOT NULL,
tipoDocumentoPersona VARCHAR(70)   NOT NULL,
numeroDocumentoPersona INT(60)  NOT NULL, /*dato necesario para ingresar persona natural*/
IdPersonaNatural INT (60) NOT NULL,
idContrato INT (60) NOT NULL,
fechaPropuestaRadicacionDemandaPersonaN DATE NULL,
fecharRealRadicacionDemandaPersonaN DATE NULL,
fechaPropuestaRadicacionDerechoPetiPersonaN DATE NULL,
fecharRealRadicacionDerechoPetiPersonaN DATE NULL,
informeDesicionFinalDemandaPersonaN TEXT(40000)  NULL, /*La persona puede informar sobre el resultado final en su demanda*/
respuestaFinalDemandaersonaN bit NULL, /*y finalmente informa con un vedadero o falso sobre la respuesta final al caso*/
montoTotalDemandaPersNat float NULL,  /* agregado sobre diseño incial, 13,mar,2019*/
superaMinimaCuantiaPersNat  bit NULL, /* agregado sobre diseño incial, 13,mar,2019*/
PRIMARY KEY(idDemandaPersonaNatural),
FOREIGN KEY (IdPersonaNatural) REFERENCES PersonaNatural(IdPersonaNatural),
FOREIGN KEY(tipoDocumentoPersona,numeroDocumentoPersona) REFERENCES Personas(tipoDocumentoPersona,numeroDocumentoPersona),
FOREIGN KEY(codigoCiudad) REFERENCES Ciudades(codigoCiudad),
FOREIGN KEY (idContrato) REFERENCES contratoLaboral(idContrato)
);

CREATE TABLE conflictoDespidoSJC(
idConflictoDespidoSJC INT (60) NOT NULL AUTO_INCREMENT,
idDemandaPersonaNatural INT (60)  NULL, /*llave foranea desde demanda persona Natutal*/
idDemandaEmpresa INT (60)  NULL,  /*llave foranea desde demanda a empresa */
fechaInicioContrato DATE NOT NULL, /* llave foranea desde contrato */
tipoContrato VARCHAR(100) NOT NULL,/* agregado sobre diseño incial, 13,mar,2019*/
fechaDespido DATE  NULL,
montoDinero_DSJC INT (60) NULL,
PRIMARY KEY (idConflictoDespidoSJC),
FOREIGN KEY (idDemandaPersonaNatural) REFERENCES  demandaPersonaNatural(idDemandaPersonaNatural),
FOREIGN KEY (idDemandaEmpresa) REFERENCES demandaEmpresa(idDemandaEmpresa ),
FOREIGN KEY (fechaInicioContrato,tipoContrato) REFERENCES contratoLaboral(fechaInicioContrato,tipoContrato)
);


CREATE TABLE conflictoPagoSalario(
idConflictoPagoSalario INT(60) NOT NULL AUTO_INCREMENT,
fechaInicioContrato DATE NOT NULL, /* llave foranea desde contrato */
fechaInicioNoPago DATE NOT NULL,/*Fecha desde la que no se le paga a la persona*/
fechaFinalNoPagoSalario DATE NULL,
fechaFinalContrato DATE NULL,/* llave foranea desde contrato */
montoDinero_PagoSalario INT (60) NULL,
idDemandaPersonaNatural INT (60)  NULL, /*llave foranea desde demanda persona Natutal*/
idDemandaEmpresa INT (60)  NULL,  /*llave foranea desde demanda a empresa */
PRIMARY KEY (idConflictoPagoSalario),
FOREIGN KEY (idDemandaPersonaNatural) REFERENCES  demandaPersonaNatural(idDemandaPersonaNatural),
FOREIGN KEY (idDemandaEmpresa) REFERENCES demandaEmpresa(idDemandaEmpresa ),
FOREIGN KEY (fechaInicioContrato,fechaFinalContrato) REFERENCES contratoLaboral(fechaInicioContrato,fechaFinalContrato)
);

CREATE TABLE conflictoVacaciones(
idConflictoVacaciones INT (60) NOT NULL AUTO_INCREMENT,
fechaInicioContrato DATE NOT NULL, /* llave foranea desde contrato */
fechaFinalContrato DATE NULL, /* llave foranea desde contrato */
fechaUltimasVacaciones DATE NOT NULL,
fechaFinalNoPagoVacaciones DATE NULL,
montoDinero_Vacaciones INT (60) NULL,
idDemandaPersonaNatural INT (60)  NULL, /*llave foranea desde demanda persona Natutal*/
idDemandaEmpresa INT (60)  NULL,  /*llave foranea desde demanda a empresa */
PRIMARY KEY (idConflictoVacaciones ),
FOREIGN KEY (idDemandaPersonaNatural) REFERENCES  demandaPersonaNatural(idDemandaPersonaNatural),
FOREIGN KEY (idDemandaEmpresa) REFERENCES demandaEmpresa(idDemandaEmpresa ),
FOREIGN KEY (fechaInicioContrato,fechaFinalContrato) REFERENCES contratoLaboral(fechaInicioContrato,fechaFinalContrato)
);


CREATE TABLE conflictoCesantias(
idConflictoCesantias INT (60) NOT NULL AUTO_INCREMENT,
fechaInicioContrato DATE NOT NULL, /* llave foranea desde contrato */
fechaFinalContrato DATE NULL, /* llave foranea desde contrato */
fechaUltimasCesantiasPagadas DATE NULL,
fechaFinalNoPagoCesantias DATE NULL,
montoDinero_Cesantias INT (60) NULL,
montoDinero_InteresesCesantias INT (60) NULL,
idDemandaPersonaNatural INT (60)  NULL, /*llave foranea desde demanda persona Natutal*/
idDemandaEmpresa INT (60)  NULL,  /*llave foranea desde demanda a empresa */
PRIMARY KEY (idConflictoCesantias ),
FOREIGN KEY (idDemandaPersonaNatural) REFERENCES  demandaPersonaNatural(idDemandaPersonaNatural),
FOREIGN KEY (idDemandaEmpresa) REFERENCES demandaEmpresa(idDemandaEmpresa ),
FOREIGN KEY (fechaInicioContrato,fechaFinalContrato) REFERENCES contratoLaboral(fechaInicioContrato,fechaFinalContrato)
);


CREATE TABLE conflictoPrimas( 
idConflictoPrima INT (60) NOT NULL AUTO_INCREMENT,
fechaInicioContrato DATE NOT NULL, /* llave foranea desde contrato */ 
fechaFinalContrato DATE NULL, /* llave foranea desde contrato */
fechaUltimaPrimaPagada DATE NULL,
fechaFinalNoPagoPrima DATE NULL,
montoDinero_Prima INT (60) NULL,
idDemandaPersonaNatural INT (60)  NULL, /*llave foranea desde demanda persona Natutal*/
idDemandaEmpresa INT (60)  NULL,  /*llave foranea desde demanda a empresa */
PRIMARY KEY (idConflictoPrima),
FOREIGN KEY (idDemandaPersonaNatural) REFERENCES  demandaPersonaNatural(idDemandaPersonaNatural),
FOREIGN KEY (idDemandaEmpresa) REFERENCES demandaEmpresa(idDemandaEmpresa ),
FOREIGN KEY (fechaInicioContrato,fechaFinalContrato) REFERENCES contratoLaboral(fechaInicioContrato,fechaFinalContrato)
);

CREATE TABLE conflictosContactaAbogado(
idConflictoContactaAbogado INT (60) NOT NULL AUTO_INCREMENT,
conflictoARL BIT NULL,
conflictoPensiones BIT NULL,
conflictoHorasExtras BIT  NULL,
conflictoDominicalesFestivos BIT NULL,
idDemandaPersonaNatural INT (60)  NULL, /*llave foranea desde demanda persona Natutal*/
idDemandaEmpresa INT (60)  NULL,  /*llave foranea desde demanda a empresa */
PRIMARY KEY (idConflictoContactaAbogado),
FOREIGN KEY (idDemandaPersonaNatural) REFERENCES  demandaPersonaNatural(idDemandaPersonaNatural),
FOREIGN KEY (idDemandaEmpresa) REFERENCES demandaEmpresa(idDemandaEmpresa )
);
