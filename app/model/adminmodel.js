const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports = function(connect) {
    
    const adminSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        mobile: {
            type: Number,
            required: true
        }
    });

    // Pre-save middleware to hash the password before saving
    adminSchema.pre('save', async function(next) {
        if (this.isModified('password') || this.isNew) {
            try {
                const salt = await bcrypt.genSalt(10);
                this.password = await bcrypt.hash(this.password, salt);
                next();
            } catch (error) {
                next(error);
            }
        } else {
            return next();
        }
    });

    const adminModel = connect.model('Registration', adminSchema);
    return adminModel;
};
