let data=""
function downloadFile(callback){
    console.log("Starting download...");
    setTimeout(() => {
        console.log("Download completed.");
        data = "ABCDEFG";
        callback();// now it will print loaded data after download is completed
}, 3000)
}
 function readFile(){
    console.log("Processing file...");
    console.log("File data: " + data);
}
downloadFile(readFile);
