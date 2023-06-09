package com.user.auth.security;

import lombok.Data;

@Data
public class ApiResponse {

    private String msg;
    private Boolean success;
    private Object object;

    public ApiResponse(String msg, Boolean success, Object object) {
        this.msg = msg;
        this.success = success;
        this.object = object;
    }

    public String getMsg() {
        return msg;
    }

    public ApiResponse(String msg, Boolean success) {
        this.msg = msg;
        this.success = success;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }


}
