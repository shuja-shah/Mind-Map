package com.user.auth.transformer;

import com.user.auth.dto.TreeDto;
import com.user.auth.dto.UserDTO;
import com.user.auth.entity.TreeEntity;
import com.user.auth.entity.UserEntity;

import java.util.ArrayList;
import java.util.List;

public class UserTransformer {

    public static UserEntity getEntity(UserDTO userDTO){
        UserEntity userEntity = new UserEntity();
        if(userDTO.getId() != null){
            userEntity.setId(Long.parseLong(userDTO.getId()));
        }
        if(userDTO.getName() != null){
            userEntity.setName(userDTO.getName());
        }
        if(userDTO.getEmail() != null){
            userEntity.setEmail(userDTO.getEmail());
        }
        if(userDTO.getPassword() != null){
            userEntity.setPassword(userDTO.getPassword());
        }

        if(userDTO.getTreeDtos()!=null){
            List<TreeEntity> treeEntities = new ArrayList<>();
            for(TreeDto treeDto : userDTO.getTreeDtos()){
                TreeEntity treeEntity = TreeTransformer.getTreeEntity(treeDto);
                treeEntities.add(treeEntity);
            }
            userEntity.setTrees(treeEntities);
        }
        return userEntity;
    }


    public static UserDTO getDto(UserEntity userEntity){
        UserDTO userDTO = new UserDTO();
        if(userEntity.getId() != null){
            userDTO.setId(userEntity.getId().toString());
        }
        if(userEntity.getEmail() != null){
            userDTO.setEmail(userEntity.getEmail());
        }
        if(userEntity.getName() != null){
            userDTO.setName(userEntity.getName());
        }
        if(userEntity.getPassword() != null){
            userDTO.setPassword(userEntity.getPassword());
        }

        if(userEntity.getTrees() != null){
            List<TreeDto> list = new ArrayList<>();
            for(TreeEntity treeEntity : userEntity.getTrees()){
                TreeDto treeDto = TreeTransformer.getTreeDto(treeEntity);
                list.add(treeDto);
            }
            userDTO.setTreeDtos(list);
        }
        return userDTO;
    }
}
