package com.user.auth.serviceImpl;

import com.user.auth.entity.NodeEntity;
import com.user.auth.repository.NodeRepository;
import com.user.auth.security.ResourceNotFoundException;
import com.user.auth.service.NodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NodeServiceImpl implements NodeService {

    @Autowired
    private NodeRepository nodeRepository;
    @Override
    public NodeEntity createNode(NodeEntity nodeEntity) {
        return this.nodeRepository.save(nodeEntity);
    }

    @Override
    public List<NodeEntity> listOfNodeEntity() {
        return (List<NodeEntity>) this.nodeRepository.findAll();
    }

    @Override
    public NodeEntity findById(Long id) {
        return this.nodeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tree Not Found","id",id));
    }
}
