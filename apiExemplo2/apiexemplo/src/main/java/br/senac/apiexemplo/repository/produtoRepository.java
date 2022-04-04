package br.senac.apiexemplo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.senac.apiexemplo.models.produto;

public interface produtoRepository extends JpaRepository<produto, Integer>{

}
