package com.user.auth.dto;

import lombok.Data;
import java.util.List;

@Data
public class TreeDto {
    private String id;
    private String treeName;
    private UserDTO userDTO;
    private List<NodeDto> nodeDtoList;

}

