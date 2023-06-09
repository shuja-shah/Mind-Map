package com.user.auth.transformer;

import com.user.auth.dto.NodeDto;
import com.user.auth.dto.TreeDto;
import com.user.auth.dto.UserDTO;
import com.user.auth.entity.NodeEntity;
import com.user.auth.entity.TreeEntity;
import com.user.auth.entity.UserEntity;
import org.antlr.v4.runtime.tree.Tree;

import java.util.ArrayList;
import java.util.List;

public class TreeTransformer {
    public static TreeEntity getTreeEntity(TreeDto treeDto){
        TreeEntity treeEntity = new TreeEntity();

        if(treeDto.getId()!=null) {
            treeEntity.setId(Long.parseLong(treeDto.getId()));
        }
        if(treeDto.getTreeName()!=null) {
            treeEntity.setTreeName(treeDto.getTreeName());
        }

        if(treeDto.getUserDTO() != null){
            UserEntity userEntity = UserTransformer.getEntity(treeDto.getUserDTO());
            treeEntity.setUserEntity(userEntity);
        }
        if(treeDto.getNodeDtoList() != null){
            List<NodeEntity> nodeEntityList = new ArrayList<>();
            for(NodeDto nodeDto : treeDto.getNodeDtoList()){
                NodeEntity nodeEntity = NodeTransformer.getNodeEntity(nodeDto);
                nodeEntityList.add(nodeEntity);
            }
            treeEntity.setNodeEntityList(nodeEntityList);
        }

        return treeEntity;
    }

    public  static  TreeDto getTreeDto(TreeEntity treeEntity){
        TreeDto treeDto= new TreeDto();
       if(treeEntity.getTreeName()!=null) {
           treeDto.setTreeName(treeEntity.getTreeName());
       }
       if(treeEntity.getId()!=null) {
           treeDto.setId(treeDto.getId().toString());
       }

        if(treeEntity.getUserEntity() != null){
            UserDTO userDTO = UserTransformer.getDto(treeEntity.getUserEntity());
            treeDto.setUserDTO(userDTO);
        }
        if(treeEntity.getNodeEntityList() != null){
            List<NodeDto> nodeDtoArrayList = new ArrayList<>();
            for(NodeEntity nodeEntity : treeEntity.getNodeEntityList()){
                NodeDto nodeDto = NodeTransformer.getNodeDto(nodeEntity);
                nodeDtoArrayList.add(nodeDto);
            }
            treeDto.setNodeDtoList(nodeDtoArrayList);
        }
        return  treeDto;

    }
}
