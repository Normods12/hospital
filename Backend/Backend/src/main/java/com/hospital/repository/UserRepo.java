package com.hospital.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.entity.Users;

@Repository
public interface UserRepo extends JpaRepository<Users,Integer> {

    Users findByEmail(String username);
    
    Optional<Users> findById(Long id);

}
