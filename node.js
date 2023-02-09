const nodemailer =require('nodemailer')

const html=`<h1> hello there </h1> 
<p> this is a test </p>`



async function main(){
    const transporter= nodemailer.createTransport({

        host:'simomutu8@gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'upchh@example.com',
            pass: '123456789'
        }
     })
     const info= await transporter.sendMail({
        from: 'upchh@example.com',
        to: 'upchh@example.com',
        subject: 'test',
        html: html
          
     }) 
     console.log("message sent"+ info.messageId);
}
main()
.catch(err => console.log(err.message))