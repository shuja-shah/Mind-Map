package com.user.auth.service;


import com.user.auth.entity.TreeEntity;
import org.antlr.v4.runtime.tree.Tree;

import java.util.List;

public interface TreeService {
    TreeEntity addTree(TreeEntity treeEntity);
    List<TreeEntity> getAllTree();

    TreeEntity findById(Long id);
}
