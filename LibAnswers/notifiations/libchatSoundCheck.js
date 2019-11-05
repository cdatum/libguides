/*
 * To test the LibChat notification sounds
 */
 window.onload = function () {
     Notification.requestPermission(function () {
         if (Notification.permission === 'granted') {
             // user approved.
             // use of new Notification(...) syntax will now be successful
         } else if (Notification.permission === 'denied') {
             // user denied.
         } else { // Notification.permission === 'default'
             // user didn’t make a decision.
             // You can’t send notifications until they grant permission.
         }
     });
     // setup buttons and sounds
     // chat notification
     var btnStart = document.getElementById('btnStart');
     var btnStop = document.getElementById('btnStop');
     var sound = document.getElementById('beep');
     var beep;

     //msg notification
     var btnStartMsgAlert = document.getElementById('btnStartMsgAlert');
     var btnStopMsgAlert = document.getElementById('btnStopMsgAlert');
     var soundMsg = document.getElementById('msgAlert');
     var msgBeep;

     // vars to hold sound status
     var chatAlert, msgAlert;
     // if button clicked and chatAlert == True {don't play sound}

     setupPageElements();


     function setupPageElements() {
         btnStart.addEventListener('click', function () {
           startChatAlert();
         });

         btnStartMsgAlert.addEventListener('click', function () {
             startMsgAlert();
         });

         btnStop.addEventListener('click', function () {
             stopChatAlert();
         });

         btnStopMsgAlert.addEventListener('click', function () {
             stopMsgAlert();
         });
     }

     function startChatAlert() {
       if (chatAlert == "true"){
         // don't do anything if the alert is already activated
       }
       else {
         chatAlert = "true";
         var alert = new Notification('Chat sound check', {body: 'Chat notification test. Adjust your audio now!', icon: 'https://libapps.s3.amazonaws.com/customers/207/images/chatBubble.gif'});
         setTimeout(alert.close.bind(alert), 8000);
         beep = setInterval(function () {
             sound.play();
         }, 2000);


       }
     }

     function stopChatAlert() {
         chatAlert = "false";
         clearInterval(beep);
     }

     function startMsgAlert(){
       if (msgAlert != "true") {
         msgAlert = "true";
         var msgAlertBox = new Notification('Message sound check', {body: 'Message notification test. Adjust your audio now!', icon: 'https://libapps.s3.amazonaws.com/customers/207/images/chatBubble.gif'});
         setTimeout(msgAlertBox.close.bind(msgAlertBox), 8000);
         msgBeep = setInterval(function () {
             soundMsg.play();
         }, 2000);

       }
     }

     function stopMsgAlert(){
       msgAlert = "false";
       clearInterval(msgBeep);

     }

 };
