package br.senac.apiexemplo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.senac.apiexemplo.models.pedido;
import br.senac.apiexemplo.repository.PedidoRepository;

@RestController
@RequestMapping(path = "/pedidos")
public class PedidoController {
    
    @Autowired
    private PedidoRepository db;

    @GetMapping(path = "/")
    public List<pedido> listAllPedidos(){
        return db.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<pedido> findProductsByIdOptional (@PathVariable int id){
        return db.findById(id);
    }

    @GetMapping(path = "/buscaNome")
    public List<pedido> listByNome(String descricao){
        System.out.println(descricao);
        return db.findByNome(descricao);
    }

    @GetMapping(path = "/buscaNomeP")
    public List<pedido> listByNomePartial(String descricao){
        System.out.println(descricao);
        return db.findByNamePartial(descricao);
    }

    @GetMapping(path = "/buscaPrecoHigh")
    public List<pedido> findByPrecoHigherThan(Double preco){
        System.out.println(preco);
        return db.findByPrecoHigherThan(preco);
    }

    @GetMapping(path = "/buscaPrecoLess")
    public List<pedido> findByPrecoLessThan(Double preco){
        System.out.println(preco);
        return db.findByPrecoLessThan(preco);
    }

    @PostMapping(path="/")
    public pedido savePedidos(@RequestBody pedido request) {
        return db.save(request);
    }
    
    @PutMapping(path ="/{id}")
    public ResponseEntity<?> updatePedido(@PathVariable int id, @RequestBody pedido request){
        var resp = db.findById(id);
        if (resp.isPresent()){
            var currentRequest = resp.get();
            currentRequest.setDescricao(request.getDescricao());
            currentRequest.setQuantidade(request.getQuantidade());
            currentRequest.setSituacao(request.getSituacao());
            db.save(currentRequest);

            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable int id){
        
        var resp = db.findById(id);
        if (resp.isPresent()){
            db.deleteById(id);
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }
    
}
