package com.doceasy.availabilityservice.controller;
//import com.doceasy.availabilityservice.dto.AvailabilityResponse;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.doceasy.availabilityservice.dto.AvailabilityResponse;
import com.doceasy.availabilityservice.model.Availability;
import com.doceasy.availabilityservice.repository.AvailabilityRepository;
import com.doceasy.availabilityservice.service.AvailabilityService;
import com.doceasy.availabilityservice.model.Availability;



//import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/availability")
@RequiredArgsConstructor
//@Slf4j
public class AvailabilityController {

    private final AvailabilityService availabilityService;
    
    @Autowired
    private AvailabilityRepository availabilityRepository;

    // http://localhost:8082/api/availability/iphone-13,iphone13-red

    // http://localhost:8082/api/availability?dCode=cardio&dCode=neuro
   
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<AvailabilityResponse> isInStock(@RequestParam List<String> dCode) {
    	
    	return availabilityService.isInStock(dCode);
    }
    
  
    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Availability> getAllAvailability() {
    	return availabilityRepository.findAll();
    }
    
    @GetMapping("{id}")
    public ResponseEntity<Availability> getAvailabilityById(@PathVariable  String id){
        Availability availability = availabilityRepository.findByDCode(id)
                .orElseThrow(() -> new Error("Availability not exist with id:" + id));
        return ResponseEntity.ok(availability);
    }
    
    //public List<AvailabilityResponse> isInStock(@RequestParam List<String> skuCode) {
     //   log.info("Received availability check request for skuCode: {}", skuCode);
    //    
    //}
}




