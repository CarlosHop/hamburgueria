CREATE DATABASE hamburgueria;

USE hamburgueria;

CREATE TABLE pedidos(
	id INT NOT NULL AUTO_INCREMENT,
    mesa INT NOT NULL,
    preco_total DECIMAL(5,2) NOT NULL,
    situacao TINYINT NOT NULL,
    quantidade INT NOT NULL,
    id_funcionario INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id),
    FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

CREATE TABLE funcionarios(
	id INT NOT NULL AUTO_INCREMENT,
    login VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE produtos(
	id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(55) NOT NULL,
    preco DECIMAL(4,2) NOT NULL,
    PRIMARY KEY (id)
);
