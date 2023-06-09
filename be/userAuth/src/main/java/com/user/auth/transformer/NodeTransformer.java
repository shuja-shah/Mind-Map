package com.user.auth.transformer;

import com.user.auth.dto.NodeDto;
import com.user.auth.entity.NodeEntity;

public class NodeTransformer {

    public static NodeEntity getNodeEntity(NodeDto nodeDto){
        NodeEntity nodeEntity = new NodeEntity();
        if(nodeDto.getId()!=null){
            nodeEntity.setId(Long.parseLong(nodeDto.getId()));
        }
        if(nodeDto.getNodeName()!=null){
            nodeEntity.setNodeName(nodeDto.getNodeName());
        }

        return nodeEntity;
    }

    public static  NodeDto getNodeDto(NodeEntity  nodeEntity){
            NodeDto nodeDto  = new NodeDto();
            if(nodeEntity.getId()!=null){
                nodeDto.setId(nodeEntity.getId().toString());
            }
            if(nodeEntity.getNodeName()!= null){
                nodeDto.setNodeName(nodeDto.getNodeName());
            }
            return nodeDto;
    }
}
