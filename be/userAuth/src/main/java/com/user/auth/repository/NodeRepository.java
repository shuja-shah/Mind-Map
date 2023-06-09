package com.user.auth.repository;

import com.user.auth.entity.NodeEntity;
import org.springframework.data.repository.CrudRepository;

public interface NodeRepository extends CrudRepository<NodeEntity, Long> {
}
