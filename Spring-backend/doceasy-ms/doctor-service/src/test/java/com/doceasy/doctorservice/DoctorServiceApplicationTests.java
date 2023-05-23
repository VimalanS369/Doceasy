package com.doceasy.doctorservice;

import com.doceasy.doctorservice.dto.DoctorRequest;
import com.doceasy.doctorservice.repository.DoctorRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc; 
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Container;

import java.math.BigDecimal;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
class DoctorServiceApplicationTests {
	 @Container
	    static MongoDBContainer mongoDBContainer = new MongoDBContainer(/*docker image name*/ "mongo:4.4.2");
	    @Autowired
	    private MockMvc mockMvc;
	    @Autowired
	    private ObjectMapper objectMapper;
	    @Autowired
	    private DoctorRepository doctorRepository;

	    static {
	        mongoDBContainer.start();
	    }

	    @DynamicPropertySource
	    static void setProperties(DynamicPropertyRegistry dymDynamicPropertyRegistry) {
	        dymDynamicPropertyRegistry.add("spring.data.mongodb.uri", mongoDBContainer::getReplicaSetUrl);
	    }

	    @Test
	    void shouldCreateDoctor() throws Exception {
	        DoctorRequest doctorRequest = getDoctorRequest();
	        String doctorRequestString = objectMapper.writeValueAsString(doctorRequest);
	        mockMvc.perform(MockMvcRequestBuilders.post("/api/doctor")
	                        .contentType(MediaType.APPLICATION_JSON)
	                        .content(doctorRequestString))
	                .andExpect(status().isCreated());
	        Assertions.assertEquals(1, doctorRepository.findAll().size());
	    }

	    private DoctorRequest getDoctorRequest() {
	        return DoctorRequest.builder()
	                .name("Sathiya")
	                .description("Caridologist")
	                .fee(BigDecimal.valueOf(1200))
	                .build();
	    }

	}
