# NYCU dormitory electricity balance counting system
for students at NYCU Tainan campus
this system will get your last electricity balance and use line notification to inform the balance
and writing the record.txt file to record the daily usage of your electricity

## Setting environment variable
after cloning the code, first set your .env file
```
token = your_line_notify_auth_token
phone = your_phone_num
room = your_roomID
```

## install package
```
npm i
```

## run the code
```
npm run fetch
```

then you should get a message from the line notify with your electricity balance

## advanced usage
if you want to run this program automatically and get electricity balance daily  
there are two solutions:
### 1. Renting a cloud server
this option may need to pay some money, or you might encounter some issues with the inactive or restarting of the cloud server
### 2. Windows scheduler
  set Windows scheduler to run this program daily, the following link is the instruction for setting windows scheduler
  ref: https://joshuatz.com/posts/2020/using-windows-task-scheduler-to-automate-nodejs-scripts/

