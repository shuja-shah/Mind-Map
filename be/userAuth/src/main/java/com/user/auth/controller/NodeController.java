package com.user.auth.controller;

import com.user.auth.dto.NodeDto;
import com.user.auth.entity.NodeEntity;
import com.user.auth.entity.TreeEntity;
import com.user.auth.security.ApiResponse;
import com.user.auth.service.NodeService;
import com.user.auth.service.TreeService;
import com.user.auth.transformer.NodeTransformer;
import com.user.auth.transformer.TreeTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/node")
public class NodeController {

    @Autowired
    private NodeService nodeService;

    @Autowired
    private TreeService treeService;

    @PostMapping("/create")
    public ResponseEntity<?> createNewNode(@RequestBody NodeDto nodeDto){
        System.out.println(nodeDto.getTreeDto().getId());
        TreeEntity treeEntity = treeService.findById(Long.parseLong(nodeDto.getTreeDto().getId()));
        NodeEntity savedNode = this.nodeService.createNode(NodeTransformer.getNodeEntity(nodeDto));
        return new ResponseEntity<>(savedNode, HttpStatus.OK);

    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllNodees(){
        List<NodeEntity> nodeEntities = this.nodeService.listOfNodeEntity();
        if(nodeEntities.size()<=0){
            return new ResponseEntity<>(new ApiResponse("Data Empty",false),HttpStatus.NOT_FOUND);
        }else{
        return new ResponseEntity<>(nodeEntities,HttpStatus.OK);
        }
    }

}

