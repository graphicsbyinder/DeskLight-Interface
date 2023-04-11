// Function for digial clock in 12 hour time
window.onload = function() {
    clock();
        function clock() {
            var now = new Date();
            var TwentyFourHour = now.getHours();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            var mid = 'PM';
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec
            }
            if (hour > 12){
                hour = hour - 12;
            }
            if (hour == 0){
                hour=12;
            }
            if (TwentyFourHour < 12){
                mid = 'am';
            }
        document.getElementById('currentTime').innerHTML = hour + ":" + min + " " + mid; setTimeout(clock, 1000)

        }
}


//Function for notepad and download featuer
function download(){
    var text = document.getElementById("textArea").value; // Grabs the info from the textfield
    text = text.replace(/\n/g, "\r\n"); // Makes sure line spacing etc gets attributed to the file download
    var blob = new Blob ([text], {type: "text/plain"}); // Places text data in a URL (needed for download)
    var anchor = document.createElement("a"); // Creates a nodename
    anchor.download = "Desklight Notes.txt"; // Name of file when downloaded
    anchor.href = window.URL.createObjectURL(blob); // Takes the data from the Blob and generates of readable URL for Windows.
    anchor.target = "_blank"; 
    anchor.style.display = "none"; 
    document.body.appendChild(anchor); // Appends the nodename (line:36)
     anchor.click(); // 
    document.body.removeChild(anchor); // Removes the nodename
}
// Everytime this function is called after the button is pressed, this code will run once / terminate / and run again when the button is clicked.
