package com.doceasy.availabilityservice.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.doceasy.availabilityservice.dto.AvailabilityResponse;
import com.doceasy.availabilityservice.repository.AvailabilityRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AvailabilityService {
	
      private  final AvailabilityRepository availabilityRepository;
      
      @Transactional(readOnly =true)
      public List<AvailabilityResponse> isInStock(List<String> dCode) {
      return availabilityRepository.findByDCodeIn(dCode).stream()
    		  .map(availability ->
    			  AvailabilityResponse.builder()
    			         .dcode(availability.getDCode())
    			         .isInStock(availability.getQuantity() > 0)
    			         .build()
    		  ).toList();
      }
}
