package com.user.auth.controller;

import com.user.auth.dto.UserDTO;
import com.user.auth.entity.UserEntity;
import com.user.auth.security.ApiResponse;
import com.user.auth.service.UserService;
import com.user.auth.transformer.UserTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody  UserDTO userDTO){
        UserEntity user = UserTransformer.getEntity(userDTO);
        user = userService.create(user);
        return new ResponseEntity<>(UserTransformer.getDto(user), HttpStatus.OK);
    }

    @GetMapping("/login")
    public ApiResponse login(String userName,String password){
        UserEntity userEntity = userService.authenticate(userName, password);
        if(userEntity != null){
            return new ApiResponse("User Loged in success fully", true,userEntity);
        }else{
            return new ApiResponse("incrooect username & password", false);
        }
    }
}
