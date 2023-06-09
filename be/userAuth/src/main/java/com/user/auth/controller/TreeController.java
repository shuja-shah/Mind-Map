package com.user.auth.controller;

import com.user.auth.dto.TreeDto;
import com.user.auth.entity.TreeEntity;
import com.user.auth.entity.UserEntity;
import com.user.auth.repository.TreeRepository;
import com.user.auth.security.ApiResponse;
import com.user.auth.service.TreeService;
import com.user.auth.service.UserService;
import com.user.auth.transformer.TreeTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tree")
public class TreeController {

    @Autowired
    private TreeService treeService;

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<?> addTreeData(@RequestBody TreeDto treeDto){
        System.out.println(treeDto.getUserDTO().getId());
        UserEntity byId = this.userService.findById(Long.parseLong(treeDto.getUserDTO().getId()));
        TreeEntity treeEntity = this.treeService.addTree(TreeTransformer.getTreeEntity(treeDto));
        return new  ResponseEntity<>(treeEntity, HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<TreeEntity>> getAllTrees(){
        return new ResponseEntity<>(this.treeService.getAllTree(),HttpStatus.OK);
    }
}
