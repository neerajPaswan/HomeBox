//this js file containes user emaile verification through nodemailer
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:process.env.EMAIL,
      pass:process.env.MAIL_PASS
    }});

    
 export const gmailVerifier = ({email,password})=>{

    const mailOptions = {
        from: 'neerajpaswan025@gmail.com',
        to: email,
        subject: 'HomeBox email verification',
        // text: `${password}${firstName+lastName}.`,
        html:`<h1>Welcome to HomeBox</h1>
            <h2>your Email: ${email}</h2>
            <h2>your password: ${password}</h2>
            <br>
            <br>
            <h4>click here to login: <a href="http://localhost:5173/sign-in">Verify</a></h4>         
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return true;
        }
        
       
    });
}

export const generateBill = ({email,totalPrice})=>{
    console.log("trnas",transporter)

    console.log('hello',"h",process.env.EMAIL,process.env.MAIL_PASS);
    const mailOptions = {
        from : "neerajpaswan025@gmail.com",
        to:email,
        subject:"HomeBox shopping bill",
        html:`
            <p> Thank you for using HomeBox</p>
            <br>
            <p>Your total amount is : ₹${totalPrice}</p>
        `
    };

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log('error',error)
            return true;
        }
        console.log(info);
        return false;
    });
}

// export default gmailVerifier;