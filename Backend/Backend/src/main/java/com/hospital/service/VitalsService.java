package com.hospital.service;

import com.hospital.dto.VitalsCreateRequestDTO;
import com.hospital.dto.VitalsResponseDTO;
import com.hospital.entity.Patient;
import com.hospital.entity.Vitals;
import com.hospital.exception.ResourceNotFoundException;
import com.hospital.repository.PatientRepository;
import com.hospital.repository.VitalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class VitalsService {

    @Autowired
    private VitalsRepository vitalsRepository;

    @Autowired
    private PatientRepository patientRepository;

    public VitalsResponseDTO recordVitals(VitalsCreateRequestDTO request) {
        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + request.getPatientId()));

        Vitals vitals = new Vitals();
        vitals.setPatient(patient);
        vitals.setHeartRate(request.getHeartRate());
        vitals.setBloodPressureSystolic(request.getBloodPressureSystolic());
        vitals.setBloodPressureDiastolic(request.getBloodPressureDiastolic());
        vitals.setTemperature(request.getTemperature());

        Vitals savedVitals = vitalsRepository.save(vitals);
        return mapToResponseDTO(savedVitals);
    }

    public List<VitalsResponseDTO> getVitalsByPatientId(UUID patientId) {
        if (!patientRepository.existsById(patientId)) {
            throw new ResourceNotFoundException("Patient not found with id: " + patientId);
        }
        
        return vitalsRepository.findByPatientIdOrderByRecordedAtDesc(patientId)
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    private VitalsResponseDTO mapToResponseDTO(Vitals vitals) {
        return VitalsResponseDTO.builder()
                .id(vitals.getId())
                .patientId(vitals.getPatient().getId())
                .heartRate(vitals.getHeartRate())
                .bloodPressureSystolic(vitals.getBloodPressureSystolic())
                .bloodPressureDiastolic(vitals.getBloodPressureDiastolic())
                .temperature(vitals.getTemperature())
                .recordedAt(vitals.getRecordedAt())
                .build();
    }
}
