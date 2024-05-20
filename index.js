
    // Function to generate a valid IMEI number
    /*const generateIMEI = () => {
        let imei = '';
        for (let i = 0; i < 14; i++) {
            imei += Math.floor(Math.random() * 10).toString();
        }
        // Calculate checksum digit
        let sum = 0;
        for (let i = 0; i < imei.length; i++) {
            let digit = parseInt(imei[i], 10);
            if (i % 2 !== 0) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
        }
        const checksum = (sum * 9) % 10;
        imei += checksum.toString();
        return imei;
    };

    // Function to check if an IMEI number is valid
    const isValidIMEI = (imei) => {
        if (imei.length !== 15 && imei.length !== 16) {
            return false;
        }
        if (!/^\d+$/.test(imei)) {
            return false;
        }
        let sum = 0;
        for (let i = 0; i < imei.length - 1; i++) {
            let digit = parseInt(imei[i], 10);
            if (i % 2 !== 0) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
        }
        const checksum = parseInt(imei[imei.length - 1], 10);
        const calculateChecksum = (sum * 9) % 10;
        return checksum === calculateChecksum;
    };*/
    const imeiGenerator = require('imei-generator');

    document.getElementById('gen-btn').onclick = function() {
        const imei = imeiGenerator.generateIMEI();
        document.getElementById('gen-input').value = imei;
    };

    document.getElementById('validate-btn').onclick = function() {
        const imei = document.getElementById('IMEI-input').value;
        const isValid = imeiGenerator.isValidIMEI(imei);
        const resultElement = document.getElementById('validation-result');
        resultElement.textContent = isValid ? "Valid IMEI" : "Invalid IMEI";
        resultElement.style.color = isValid ? "green" : "red";
        resultElement.style.fontSize = "20px";
    };

