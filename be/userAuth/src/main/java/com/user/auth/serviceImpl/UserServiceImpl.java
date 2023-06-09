package com.user.auth.serviceImpl;

import com.user.auth.entity.UserEntity;
import com.user.auth.repository.UserRepository;
import com.user.auth.security.ResourceNotFoundException;
import com.user.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository repository;

    @Override
    public UserEntity create(UserEntity user) {
        return repository.save(user);
    }

    @Override
    public UserEntity authenticate(String username, String password) {
        return repository.findByEmailAndPassword(username, password);
    }

    @Override
    public boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }

    @Override
    public UserEntity findById(Long id) {
        return this.repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Not Found","id",id));
    }
}
