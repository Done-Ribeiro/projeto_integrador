package com.doneribeiro.cadastro;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoDao extends CrudRepository<Produto, Integer>{

}
