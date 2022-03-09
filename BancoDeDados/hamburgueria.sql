CREATE DATABASE hamburgueria;

USE hamburgueria;

CREATE TABLE pedidos(
	id INT NOT NULL AUTO_INCREMENT,
    total_price DECIMAL(5,2) NOT NULL,
    mesa INT NOT NULL,
    id_funcionario INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id)
);

CREATE TABLE funcionarios(
	id INT NOT NULL AUTO_INCREMENT,
    login VARCHAR(20) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    logradouro VARCHAR(60) NOT NULL,
    logradouro_numero INT NOT NULL,
    complemento VARCHAR(40) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    celular VARCHAR(19) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE produtos(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE produtos_pedidos(
	id INT NOT NULL AUTO_INCREMENT,
    amount INT NOT NULL,
    id_produto INT NOT NULL,
    id_pedido INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_produto) REFERENCES produtos (id),
    FOREIGN KEY (id_pedido) REFERENCES pedidos (id)
);