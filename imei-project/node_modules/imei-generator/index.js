function generateIMEI() {
    let imei = '';

    // Generate 14 random digits
    for (let i = 0; i < 14; i++) {
        imei += Math.floor(Math.random() * 10);
    }

    // Calculate the checksum
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

    // Append the checksum to the IMEI
    imei += checksum;

    return imei;
}

function isValidIMEI(imei = null) {
    if (imei === null) {
        imei = generateIMEI();
        console.log(imei);
    }
    if (imei.length !== 15 && imei.length !== 16) {
        return false;
    }
    if (!imei.match(/^\d+$/)) {
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
    return checksum == calculateChecksum;
}



module.exports = {
    generateIMEI,
    isValidIMEI
};

module.exports.generateIMEI = generateIMEI;
module.exports.isValidIMEI = isValidIMEI;

