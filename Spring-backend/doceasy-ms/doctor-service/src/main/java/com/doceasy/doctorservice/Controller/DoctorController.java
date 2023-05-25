package com.doceasy.doctorservice.Controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doceasy.doctorservice.dto.DoctorRequest;
import com.doceasy.doctorservice.dto.DoctorResponse;
import com.doceasy.doctorservice.model.Doctor;
import com.doceasy.doctorservice.repository.DoctorRepository;
import com.doceasy.doctorservice.service.DoctorService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/doctor")
@RequiredArgsConstructor
public class DoctorController {
	

   private final DoctorService doctorService;
   @Autowired
   private DoctorRepository doctorRepository;
   
   
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createDoctor(@RequestBody DoctorRequest doctorRequest) {
        doctorService.createDoctor(doctorRequest);
    }
    
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DoctorResponse> getAllDoctors() {
        return doctorService.getAllDoctors();
    }
    
    
    //GetbyId
    @GetMapping("{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable  String id){
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new Error("Doctor not exist with id:" + id));
        return ResponseEntity.ok(doctor);
    }
    
 // build update Doctor REST API
    @PutMapping("{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable String id,@RequestBody Doctor DoctorDetails) {
        Doctor updateDoctor = doctorRepository.findById(id)
                .orElseThrow(() -> new Error("Doctor not exist with id: " + id));

        updateDoctor.setDid(DoctorDetails.getDid());
        updateDoctor.setName(DoctorDetails.getName());
        updateDoctor.setDepartment(DoctorDetails.getDepartment());
        updateDoctor.setDescription(DoctorDetails.getDescription());
        updateDoctor.setFee(DoctorDetails.getFee());

        doctorRepository.save(updateDoctor);

        return ResponseEntity.ok(updateDoctor);
    }
    
    
 // build delete doctor REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable String id){

        Doctor deleteDoctor = doctorRepository.findById(id)
                .orElseThrow(() -> new Error("Doctor not exist with id: " + id));

        doctorRepository.delete(deleteDoctor);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    

}
