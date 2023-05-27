package com.doceasy.signuppage.service;

import com.doceasy.signuppage.model.User;

public interface UserService {
  
 public User findUserByEmail(String email);
 
 public void saveUser(User user);
}