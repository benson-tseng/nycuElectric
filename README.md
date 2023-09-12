# NYCU dormitory eletricity balance counting system
for student at nycu Tainan campus
this system will get your lastly eletricity balance and use line notify to inform the balance
and writing the record.txt file to record the daliy usage of your eletricity

## setting enviroment variable
after pulling the code, first set your .env file
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

then you should get a message from line notify with your electricity balance

## advanced usage
if you want to run this program automatically and get electricity balance daliy  
there have two solution:
### 1. renting a cloud server
this option may need to pay some money, or you might encounter some issue by the inactice or restarting of the cloud server
### 2. windows scheduler
  set windows scheduler to run this program daily, following link is the instruction of setting windows scheduler
  ref: https://joshuatz.com/posts/2020/using-windows-task-scheduler-to-automate-nodejs-scripts/

