package com.user.auth.security;

public class ResourceNotFoundException extends RuntimeException {

    private String resourceName;
    private String fieldName;
    private long fieldValue;

    public ResourceNotFoundException(String resourceName, String fieldName, Long fieldValue){
        super(String.format(resourceName+" Not Found  "+fieldName+":"+fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue=fieldValue;
    }

}
