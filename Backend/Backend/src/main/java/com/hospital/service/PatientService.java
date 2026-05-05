package com.hospital.service;

import com.hospital.dto.PatientCreateRequestDTO;
import com.hospital.dto.PatientResponseDTO;
import com.hospital.entity.Patient;
import com.hospital.exception.ResourceNotFoundException;
import com.hospital.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public PatientResponseDTO createPatient(PatientCreateRequestDTO request) {
        Patient patient = new Patient();
        patient.setName(request.getName());
        patient.setAge(request.getAge());
        patient.setGender(request.getGender());
        
        Patient savedPatient = patientRepository.save(patient);
        return mapToResponseDTO(savedPatient);
    }

    public PatientResponseDTO getPatientById(UUID id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + id));
        return mapToResponseDTO(patient);
    }

    private PatientResponseDTO mapToResponseDTO(Patient patient) {
        return PatientResponseDTO.builder()
                .id(patient.getId())
                .name(patient.getName())
                .age(patient.getAge())
                .gender(patient.getGender())
                .admissionTime(patient.getAdmissionTime())
                .severityScore(patient.getSeverityScore())
                .build();
    }
}
