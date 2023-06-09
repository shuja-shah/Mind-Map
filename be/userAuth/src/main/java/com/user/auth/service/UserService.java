package com.user.auth.service;

import com.user.auth.entity.UserEntity;

public interface UserService {


    UserEntity create(UserEntity user);
    UserEntity authenticate(String username, String password);
    boolean existsByEmail(String email);

    UserEntity findById(Long id);
}
