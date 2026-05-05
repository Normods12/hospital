package com.hospital.service;

import com.hospital.entity.Vitals;
import org.springframework.stereotype.Service;

@Service
public class SeverityCalculationService {

    /**
     * Calculates a severity score (0-10) based on patient vitals.
     * Higher score means higher priority.
     * 0-2: Stable
     * 3-6: Urgent
     * 7-10: Critical
     */
    public int calculateSeverityScore(Vitals vitals) {
        int score = 0;

        // 1. Heart Rate (Normal: 60-100)
        int hr = vitals.getHeartRate();
        if (hr < 40 || hr > 140) score += 4;      // Very Critical
        else if (hr < 50 || hr > 120) score += 2; // Critical
        else if (hr < 60 || hr > 100) score += 1; // Abnormal

        // 2. Systolic Blood Pressure (Normal: 90-120)
        int sbp = vitals.getBloodPressureSystolic();
        if (sbp < 70 || sbp > 200) score += 4;
        else if (sbp < 90 || sbp > 160) score += 2;
        else if (sbp > 140) score += 1;

        // 3. Temperature (Normal: 36.1 - 37.2 C)
        double temp = vitals.getTemperature();
        if (temp < 35.0 || temp > 40.0) score += 2;
        else if (temp < 36.0 || temp > 38.0) score += 1;

        // Cap score at 10
        return Math.min(score, 10);
    }
}
