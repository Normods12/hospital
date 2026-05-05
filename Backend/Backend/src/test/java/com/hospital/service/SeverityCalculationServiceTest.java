package com.hospital.service;

import com.hospital.entity.Vitals;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SeverityCalculationServiceTest {

    private final SeverityCalculationService service = new SeverityCalculationService();

    @Test
    void testStableVitals() {
        Vitals vitals = new Vitals();
        vitals.setHeartRate(75);
        vitals.setBloodPressureSystolic(110);
        vitals.setTemperature(36.6);
        
        assertEquals(0, service.calculateSeverityScore(vitals));
    }

    @Test
    void testUrgentVitals() {
        Vitals vitals = new Vitals();
        vitals.setHeartRate(110); // +1
        vitals.setBloodPressureSystolic(150); // +1
        vitals.setTemperature(38.5); // +1
        
        assertEquals(3, service.calculateSeverityScore(vitals));
    }

    @Test
    void testCriticalVitals() {
        Vitals vitals = new Vitals();
        vitals.setHeartRate(150); // +4
        vitals.setBloodPressureSystolic(210); // +4
        vitals.setTemperature(41.0); // +2
        
        assertEquals(10, service.calculateSeverityScore(vitals));
    }
}
