from flask import Flask, request, render_template
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib
import random

app = Flask(__name__)

def random_code():
    return str(random.randint(100000, 999999))

def send_email(recipient_email, verification_code):
    smtp_server = 'a*****t'
    smtp_port = 587  
    smtp_username = 's*****i'
    smtp_password = 'e*****t'

    sender_email = 'shiki@alwaysdata.net'
    recipient_email = recipient_email

    subject = '驗證碼'
    body = f'您的驗證碼是：{verification_code}'
    message = MIMEMultipart()
    message.attach(MIMEText(body, 'plain'))
    message['Subject'] = subject
    message['From'] = sender_email
    message['To'] = recipient_email

    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.sendmail(sender_email, recipient_email, message.as_string())

@app.route('/', methods=['GET', 'POST'])

def verify():
    if request.method == 'POST':
        email = request.form['email']
        verification_code = random_code()
        send_email(email, verification_code)
        return f'驗證碼已發送至 {email}，請檢查您的郵件。'
    return render_template('verify.html')

if __name__ == '__main__':
    app.run(debug=True)