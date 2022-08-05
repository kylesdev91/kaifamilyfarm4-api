const nodemailer = require("nodemailer");

module.exports = async function (context, req) {
    let transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "kffsande12345@outlook.com",
            pass: "Pwd4Kff5and3"
        },
        });

        const mailOptions = {
            from: "kffsande@12345outlook.com",
            to: "kffsande12345@outlook.com",
            subject: req.body.emailSubject,
            text: req.body.emailBody,
            html: '<div><table><thead><tr><th>Product ID</th><th>Name</th></tr></thead><tbody>' + req.body.emailBody + '</tbody></table></div>',
        }

        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Sent: " + info.response); 
            }
        }) 
};