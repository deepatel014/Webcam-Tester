const videoEL = document.getElementById("webcam-vid");
const screenshotEL = document.getElementById("screenshots");

let imageCapture ;




const startWebcam = () =>{
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true}).then(stream =>{
            videoEL.srcObject = stream
            imageCapture = new ImageCapture(stream.getVideoTracks()[0])
        })
        .catch(err => {
            console.log("Somthing went wrong",err);
        });
    }
}

const takeScreenshot = () => {
    imageCapture.takePhoto().then(blob => {
        const img = document.createElement('img')
        img.src = window.URL.createObjectURL(blob)
        screenshotEL.appendChild(img)
    })
}

function invertCam() {
    
      document.getElementById("webcam-vid").classList.add('videoElement');
    
     
   
}
