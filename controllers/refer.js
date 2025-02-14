const { PrismaClient } = require("@prisma/client");

async function handleRefer(req, res) {
    const prisma = new PrismaClient();

    try {
        const { referee_email, referee_name, referrer_email, referrer_name, voucher_code } = req.body;
        
        if (!referee_email || !referee_name || !referrer_email || !referrer_name || !voucher_code) {
            res.status(400).json({
                message: "Enter all credentials"
            });
            return;
        }

        const referredOffer = await prisma.refers.create({data: {referee_email, referee_name, referrer_email, referrer_name, voucher_code}})

        res.status(200).json({
            message: "refer created",
            referredOffer
        })
        
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({
            message: "Internal server error"
        })
    }

}

module.exports = handleRefer;