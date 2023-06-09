package com.user.auth.security;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse> handler(ResourceNotFoundException e){
        String msg = e.getMessage();

        return new ResponseEntity<>(new ApiResponse(msg,false), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ApiResponse> stringMissMatchExceptionHandler(MethodArgumentTypeMismatchException e){
        String msg = "you enter invalid value";

        return new ResponseEntity<>(new ApiResponse(msg,false), HttpStatus.NOT_FOUND);
    }


}
