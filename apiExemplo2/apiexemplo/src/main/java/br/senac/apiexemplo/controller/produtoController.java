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

import br.senac.apiexemplo.models.produto;
import br.senac.apiexemplo.repository.ProdutoRepository;

@RestController
@RequestMapping(path = "/produto")
public class ProdutoController {
    
    @Autowired
    private ProdutoRepository db;

    @GetMapping(path = "/")
    public List<produto> listAllProdutos(){
        return db.findAll();
    }
    
    @GetMapping(path = "/{id}")
    public Optional<produto> findProductsByIOptional (@PathVariable int id){
        return db.findById(id);
    }
    
    @GetMapping(path = "/busca1")
    public List<produto> listByPreco(Double preco){
        System.out.println(preco);
        return db.findByPreco(preco);
    }

    @GetMapping(path = "/busca2")
    public List<produto> listByNome(String nome){
        System.out.println(nome);
        return db.findByNome(nome);
    }

    @GetMapping(path = "/busca3")
    public List<produto> listByNomePartial(String nome){
        System.out.println(nome);
        return db.findByNamePartial(nome);
    }

    @GetMapping(path = "/busca4")
    public List<produto> findByPrecoHigherThan(Double preco){
        System.out.println(preco);
        return db.findByPrecoHigherThan(preco);
    }

    @GetMapping(path = "/busca5")
    public List<produto> findByPrecoLessThan(Double preco){
        System.out.println(preco);
        return db.findByPrecoLessThan(preco);
    }

    @PostMapping(path = "/")
    public produto saveProduto(@RequestBody produto product){
        return db.save(product);
    }

    @PutMapping(path ="/{id}")
    public ResponseEntity<?> updateProduto(@PathVariable int id, @RequestBody produto product){
        var resp = db.findById(id);
        if (resp.isPresent()){
            var currentProduct = resp.get();
            currentProduct.setNome(product.getNome());
            currentProduct.setPreco(product.getPreco());
            db.save(currentProduct);

            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteProduto(@PathVariable int id){
        
        var resp = db.findById(id);
        if (resp.isPresent()){
            db.deleteById(id);
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}

// Minuto do video - 35:55 -> Debug pelo Thunder Client
