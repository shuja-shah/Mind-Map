package com.user.auth.repository;

import com.user.auth.entity.TreeEntity;
import org.antlr.v4.runtime.tree.Tree;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreeRepository extends CrudRepository<TreeEntity, Long> {

}
