package com.example.ai.practice.controller;

import com.example.ai.practice.entity.User;
import com.example.ai.practice.repository.UserRepository;
import com.example.ai.practice.service.OTPGeneratorService;
import com.example.ai.practice.service.TwilioService;
import com.example.ai.practice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api") // Define the endpoint path
public class UserController {

    @Autowired
    private UserRepository userRepository; // Inject your UserRepository

    @Autowired
    private UserService userService;

    @Autowired
    private OTPGeneratorService otpGeneratorService;

    @Autowired
    private TwilioService twilioService;

    @GetMapping("/")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/login")
    public void sendLoginOtp(){
        Optional<User> user = userRepository.findByUsername("debjit_2001");
        String otp=otpGeneratorService.generateOTP();
        twilioService.sendOTP(user.get().getPhoneNumber(),otp);
    }

    @PutMapping("/{userId}/change-password")
    public ResponseEntity<?> changePassword(@PathVariable Long userId, @RequestBody String newPassword) {
        try {
            userService.changePassword(userId, newPassword);
            return ResponseEntity.ok("Password changed successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to change password: " + e.getMessage());
        }
    }
}

