const mongoose = require('mongoose');

const healthDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    vitalSigns: {
        heartRate: {
            type: Number,
            required: true,
            min: 0
        },
        bloodPressure: {
            systolic: {
                type: Number,
                required: true,
                min: 0
            },
            diastolic: {
                type: Number,
                required: true,
                min: 0
            }
        },
        respirationRate: {
            type: Number,
            required: true,
            min: 0
        },
        temperature: {
            type: Number,
            required: true,
            min: 30,
            max: 45
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }
});

const HealthData = mongoose.model('HealthData', healthDataSchema);

module.exports = HealthData;