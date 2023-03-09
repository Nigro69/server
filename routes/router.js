const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");


router.post("/sendMail",(req,res)=>{
    const {email,html,subject}= req.body;

    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"tedxjecofficial@gmail.com",
                pass:"ysdxgmfdqrqbomrd"
            }
        });
        const mailOptions = {
            from : "tedxjecofficial@gmail.com",
            to: email,
            subject: subject,
            html:html 
        }

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error",error)
            }else{
                console.log("email sent" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        res.status(401).json({status:401,info})
    }
})

module.exports = router;