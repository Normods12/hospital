package com.hospital.controller;

import com.hospital.dto.VitalsCreateRequestDTO;
import com.hospital.dto.VitalsResponseDTO;
import com.hospital.service.VitalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/vitals")
@CrossOrigin
public class PatientVitalsController {

    @Autowired
    private VitalsService vitalsService;

    @PostMapping
    public ResponseEntity<VitalsResponseDTO> recordVitals(@RequestBody VitalsCreateRequestDTO request) {
        VitalsResponseDTO response = vitalsService.recordVitals(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<VitalsResponseDTO>> getVitalsByPatient(@PathVariable UUID patientId) {
        List<VitalsResponseDTO> response = vitalsService.getVitalsByPatientId(patientId);
        return ResponseEntity.ok(response);
    }
}
