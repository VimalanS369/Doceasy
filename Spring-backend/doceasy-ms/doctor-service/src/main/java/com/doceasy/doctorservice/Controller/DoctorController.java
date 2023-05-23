package com.doceasy.doctorservice.Controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doceasy.doctorservice.dto.DoctorRequest;
import com.doceasy.doctorservice.dto.DoctorResponse;
import com.doceasy.doctorservice.service.DoctorService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@RequestMapping("/api/doctor")
@RequiredArgsConstructor
public class DoctorController {
	

   private final DoctorService doctorService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduct(@RequestBody DoctorRequest doctorRequest) {
        doctorService.createDoctor(doctorRequest);
    }
    
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DoctorResponse> getAllProducts() {
        return doctorService.getAllDoctors();
    }
    

    

}
