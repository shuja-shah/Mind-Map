package com.user.auth.serviceImpl;

import com.user.auth.entity.TreeEntity;
import com.user.auth.repository.TreeRepository;
import com.user.auth.security.ResourceNotFoundException;
import com.user.auth.service.TreeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreeServiceImpl implements TreeService {

    @Autowired
    private TreeRepository treeRepository;

    @Override
    public TreeEntity addTree(TreeEntity treeEntity) {
        return  this.treeRepository.save(treeEntity);
    }

    @Override
    public List<TreeEntity> getAllTree() {
        return (List<TreeEntity>) this.treeRepository.findAll();
    }

    @Override
    public TreeEntity findById(Long id) {
        return this.treeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tree Not Found","id",id));
    }
}
