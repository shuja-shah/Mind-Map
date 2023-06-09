package com.user.auth.repository;

import com.user.auth.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    @Query("select u from UserEntity u where u.email = ?1 and u.password = ?2")
    UserEntity findByEmailAndPassword(String email, String password);

    @Query("select (count(u) > 0) from UserEntity u where u.email = ?1")
    boolean existsByEmail(String email);


}
