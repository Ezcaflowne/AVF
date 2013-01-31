//////////////////////NOTIFICATION

var playBeep = function() {
        navigator.notification.beep(3);
        console.log("It's Beeping");
    }

    // Vibrate for 2 seconds
    //
    var vibrate = function() {
        navigator.notification.vibrate(2000);
        console.log("It's Vibrating");
    }



// Show a custom confirmation dialog
//
var showAlert = function() {
    function alertDismissed() {
        console.log("Alert Dismissed");
    }
    navigator.notification.alert(
                                 'You have been notified!',  // message
                                 alertDismissed,         // callback
                                 'Notification',            // title
                                 'Okay'                  // buttonName
                                 );
};

var showConfirm = function() {
    function onConfirm(button) {
        alert('You chose button ' + button);
    }
    navigator.notification.confirm(
                                   'Confirmation Message',  // message
                                   onConfirm,              // callback to invoke with index of button pressed
                                   'Confirmation Title',            // title
                                   'ReStart,Exit'          // buttonLabels
                                   );

};