--CREATE DATABASE IF NOT EXISTS `financer-db` DEFAULT CHARSET `utf8`;

/*
ALTER TABLE `financer-db`.Sesiones DROP CONSTRAINT FK_USR_SNS;
ALTER TABLE `financer-db`.Validaciones DROP CONSTRAINT FK_USR_VLS;
ALTER TABLE `financer-db`.Cuentas DROP CONSTRAINT FK_USR_CTA;
ALTER TABLE `financer-db`.Movimientos DROP CONSTRAINT FK_USR_MOV;
ALTER TABLE `financer-db`.Movimientos DROP CONSTRAINT FK_CTA_MOV;

DROP TABLE `financer-db`.Usuarios;
DROP TABLE `financer-db`.Sesiones;
DROP TABLE `financer-db`.Validaciones;
DROP TABLE `financer-db`.Cuentas;
DROP TABLE `financer-db`.Movimientos;

*/
CREATE TABLE IF NOT EXISTS Usuarios(
	id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(40) UNIQUE NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    clave VARCHAR(300) NOT NULL,
    rol TINYINT(1) UNSIGNED NOT NULL,
    activo TINYINT(1) UNSIGNED NOT NULL,
    validado TINYINT(1) UNSIGNED NOT NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL
);

CREATE TABLE IF NOT EXISTS Sesiones(
	id BIGINT UNSIGNED AUTO_INCREMENT,
    usuario BIGINT UNSIGNED NOT NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    PRIMARY KEY(id, usuario)
);

CREATE TABLE IF NOT EXISTS Validaciones(
	usuario BIGINT UNSIGNED NOT NULL,
    codigo INT(6) UNSIGNED NOT NULL,
    expires DATETIME NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    PRIMARY KEY(usuario, codigo)
);

CREATE TABLE IF NOT EXISTS Cuentas(
	id BIGINT UNSIGNED AUTO_INCREMENT,
    usuario BIGINT UNSIGNED NOT NULL,
    codigo VARCHAR(40) NULL,
    nombre VARCHAR(30) NOT NULL,
    tipo TINYINT(1) UNSIGNED NOT NULL,
    saldo DOUBLE NOT NULL DEFAULT 0.0,
    activa TINYINT(1) UNSIGNED NOT NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    PRIMARY KEY(id, usuario)
);

CREATE TABLE IF NOT EXISTS Movimientos(
	id BIGINT UNSIGNED AUTO_INCREMENT,
    usuario BIGINT UNSIGNED NOT NULL,
    cuenta BIGINT UNSIGNED NOT NULL,
    destino BIGINT UNSIGNED NULL,
    tipo TINYINT(2) UNSIGNED NOT NULL,
    comentario VARCHAR(500) NULL,
    fecha DATETIME NOT NULL,
    monto DOUBLE NOT NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    PRIMARY KEY(id, usuario, cuenta)
);

ALTER TABLE Sesiones ADD CONSTRAINT FK_USR_SNS FOREIGN KEY(usuario) REFERENCES Usuarios(id);
ALTER TABLE Validaciones ADD CONSTRAINT FK_USR_VLS FOREIGN KEY(usuario) REFERENCES Usuarios(id);
ALTER TABLE Cuentas ADD CONSTRAINT FK_USR_CTA FOREIGN KEY(usuario) REFERENCES Usuarios(id);
ALTER TABLE Movimientos ADD CONSTRAINT FK_USR_MOV FOREIGN KEY(usuario) REFERENCES Usuarios(id);
ALTER TABLE Movimientos ADD CONSTRAINT FK_CTA_MOV FOREIGN KEY(cuenta) REFERENCES Cuentas(id);


-------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------

DELIMITER %%

USE `financer-db`%%
DROP FUNCTION IF EXISTS `FN_LOGIN`%%
CREATE FUNCTION `FN_LOGIN` (usuario VARCHAR(40), pass VARCHAR(300)) RETURNS BIGINT
BEGIN
    DECLARE pwd VARCHAR(300);
    DECLARE idu BIGINT;
    -- DECLARE c CURSOR (IN u VARCHAR(40)) FOR SELECT clave FROM Usuarios WHERE email = usuario;
    -- OPEN c(usuario);
    -- FETCH c INTO pwd;
    SELECT id, clave INTO idu, pwd FROM Usuarios WHERE email = usuario;
    IF pwd IS NULL THEN
        RETURN -1;
    ELSEIF pwd = pass THEN
        RETURN idu;
    ELSE
        RETURN -2;
    END IF;
END%%

DELIMITER ;


-------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------


SELECT * FROM `financer-db`.Usuarios;
SELECT * FROM `financer-db`.Sesiones;
SELECT * FROM `financer-db`.Validaciones;
SELECT * FROM `financer-db`.Cuentas;
SELECT * FROM `financer-db`.Movimientos;


INSERT INTO `financer-db`.Usuarios VALUES(null,'jorge@ejemplo.com','Jorge Algo Valdes','?',1,1,1,NOW(),NOW());
INSERT INTO `financer-db`.Usuarios VALUES(null,'arturo@ejemplo.com','Arturo','?',2,1,1,NOW(),NOW());

INSERT INTO `financer-db`.Cuentas VALUES(null,1,'XXX-XXX-014','Cuenta Principal',1,10000,1,NOW(),NOW());
INSERT INTO `financer-db`.Cuentas VALUES(null,1,'XXX-XXX-645','Cuenta Secundaria',1,150000,1,NOW(),NOW());
INSERT INTO `financer-db`.Cuentas VALUES(null,1,'XXX-XXX-055','Cuenta de respaldo',3,2500,1,NOW(),NOW());
INSERT INTO `financer-db`.Cuentas VALUES(null,2,'XXX-XXX-666','Cuenta rut',2,12500,1,NOW(),NOW());
INSERT INTO `financer-db`.Cuentas VALUES(null,2,'XXX-Y','plata',5,5000,1,NOW(),NOW());

delete from `financer-db`.Validaciones where usuario = 22;
delete from `financer-db`.Usuarios where id = 22;