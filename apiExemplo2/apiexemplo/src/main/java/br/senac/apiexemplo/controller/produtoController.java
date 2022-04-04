package br.senac.apiexemplo.controller;

import java.util.List;
import java.util.Optional;

import com.jayway.jsonpath.internal.Path;

import org.apache.catalina.connector.Response;
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

import br.senac.apiexemplo.models.produto;
import br.senac.apiexemplo.repository.produtoRepository;

@RestController
@RequestMapping(path = "/produto")
public class produtoController {
    
    @Autowired
    private produtoRepository db;

    @GetMapping(path = "/")
    public List<produto> listAllProdutos(){
        return db.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<produto> findProductsByIOptional (@PathVariable int id){
        return db.findById(id);
    }

    @PostMapping(path = "/")
    public produto saveProduto(produto product){
        return db.save(product);
    }

    @PutMapping(path ="/{id}")
    public void updateProduto(@PathVariable int id, @RequestBody produto product){
        var resp = db.findById(id);
        if (resp.isPresent()){
            var currentProduct = resp.get();
            currentProduct.setNome(product.getNome());
            currentProduct.setId(product.getId());
            currentProduct.setPreco(product.getPreco());
            db.save(currentProduct);
        }else{
            ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public void deleteProduto(int id){
        
        var resp = db.findById(id);
        if (resp.isPresent()){
            db.deleteById(id);
        }else{
            ResponseEntity.notFound().build();
        }
    }
}
// Minuto do video - 35:55 -> Debug pelo Thunder Client
