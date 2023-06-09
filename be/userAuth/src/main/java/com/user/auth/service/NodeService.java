package com.user.auth.service;

import com.user.auth.entity.NodeEntity;

import java.util.List;

public interface NodeService {
    NodeEntity createNode(NodeEntity nodeEntity);
    List<NodeEntity> listOfNodeEntity();

    NodeEntity findById(Long id);
}
