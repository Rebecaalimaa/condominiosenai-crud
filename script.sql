DROP DATABASE condominiosenai;
CREATE DATABASE condominiosenai;
    USE condominiosenai;

    CREATE TABLE condominio (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Nome VARCHAR(100) NOT NULL,
        Endereco TEXT,
        CNPJ VARCHAR(15)
    );

    CREATE TABLE funcionarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_cond INT,
        FOREIGN KEY (id_cond) REFERENCES condominio(id),
        Nome VARCHAR(100) NOT NULL UNIQUE,
        Cargo VARCHAR(100),
        CPF DECIMAL(10, 2) NOT NULL,
        data_admissao INT DEFAULT 0
    );

    CREATE TABLE apartamentos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_cond INT,
        numero INT,
        bloco VARCHAR(10),
        andar INT,
        FOREIGN KEY (id_cond) REFERENCES condominio(id)
    );

    CREATE TABLE moradores (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_ap INT,
        idade INT,
        nascimento VARCHAR(10),
        CPF DECIMAL(10, 2) NOT NULL,
        Nome VARCHAR(100) NOT NULL UNIQUE,
        telefone VARCHAR(15),
        FOREIGN KEY (id_ap) REFERENCES apartamentos(id)
    );

INSERT INTO condominio (Nome, Endereco, CNPJ) 
VALUES 
('Condomínio Alpha', 'Rua das Palmeiras, 123', '12.345.678/0001-90'),
('Condomínio Beta', 'Avenida Central, 456', '98.765.432/0001-01'),
('Condomínio Gamma', 'Travessa do Sol, 789', '11.223.344/0001-12');

INSERT INTO funcionarios (id_cond, Nome, Cargo, CPF, data_admissao) 
VALUES 
(1, 'João da Silva', 'Síndico', 12345678901, 20230101),
(1, 'Maria Souza', 'Portaria', 98765432100, 20230115),
(2, 'Carlos Oliveira', 'Zelador', 19283746501, 20230210),
(3, 'Fernanda Lima', 'Assistente Administrativo', 56473829100, 20230405);

INSERT INTO apartamentos (id_cond, numero, bloco, andar) 
VALUES 
(1, 101, 'A', 1),
(1, 102, 'A', 1),
(1, 201, 'B', 2),
(2, 301, 'C', 3),
(3, 401, 'D', 4);

INSERT INTO moradores (id_ap, idade, nascimento, CPF, Nome, telefone)
VALUES
(1, 25, '1998-01-15', '12345678901', 'João Silva', '9876543210'),
(2, 32, '1991-02-20', '23456789012', 'Maria Oliveira', '9876543211'),
(3, 45, '1978-11-30', '34567890123', 'Carlos Souza', '9876543212'),
(4, 29, '1994-05-10', '45678901234', 'Ana Costa', '9876543213'),
(5, 60, '1963-12-25', '56789012345', 'Paulo Santos', '9876543214');
