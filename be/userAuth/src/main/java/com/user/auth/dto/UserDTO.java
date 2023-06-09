package com.user.auth.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import java.util.List;

@Data
public class UserDTO {

    private String Id;
    private String name;
    private String email;
    private String password;
    private List<TreeDto> treeDtos;
}
