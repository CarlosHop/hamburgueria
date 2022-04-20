package br.senac.apiexemplo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.senac.apiexemplo.models.produto;

public interface ProdutoRepository extends JpaRepository<produto, Integer>{

    @Query("select f from produtos f where preco = ?1")
    List<produto> findByPreco(Double preco);

    @Query(nativeQuery = true, value = "select * from produtos where nome = ?1 limit 1")
    List<produto> findByNome(String nome);

    @Query("select f from produtos f where nome like %?1%")
    List<produto> findByNamePartial(String nome);
}
