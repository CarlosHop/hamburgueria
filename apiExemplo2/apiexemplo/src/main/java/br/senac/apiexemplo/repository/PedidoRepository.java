package br.senac.apiexemplo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.senac.apiexemplo.models.pedido;

public interface PedidoRepository extends JpaRepository<pedido, Integer>{

    @Query("select f from pedidos f where preco = ?1")
    List<pedido> findByPreco(Double preco);

    @Query(nativeQuery = true, value = "select * from pedidos where nome = ?1 limit 1")
    List<pedido> findByNome(String nome);

    @Query("select f from pedidos f where nome like %?1%")
    List<pedido> findByNamePartial(String nome);

    @Query("select f from pedidos f where preco >= ?1")
    List<pedido> findByPrecoHigherThan(Double preco);

    @Query("select f from pedidos f where preco <= ?1")
    List<pedido> findByPrecoLessThan(Double preco);

}