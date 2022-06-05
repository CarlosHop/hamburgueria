package br.senac.apiexemplo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity(name= "pedidos")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class pedido {
    
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "mesa")
    private int mesa;

    @Column(name = "situacao")
    private String situacao;

    @Column(name = "preco_total")
    private Double preco_total;
}