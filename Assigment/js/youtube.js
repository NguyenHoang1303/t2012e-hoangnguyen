document.addEventListener("DOMContentLoaded", function () {
})
var validate = false;
var txtKeyword = document.forms["search-form"]["keyword"];
var btnSearch = document.forms["search-form"]["search"];
btnSearch.onclick = function () {
    var keyword = txtKeyword.value;
    var divResult = document.getElementById("result");
    var xhr = new XMLHttpRequest();
    var msgError = document.getElementById("error");
    if (keyword.length == "") {
        msgError.innerText = "Please enter video name!!";
        validate = false;
    } else {
        validate = true;
    }
    if (validate = true) {
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    var jsObject = JSON.parse(this.responseText);
                    var listYoutubeVideo = jsObject.items;
                    var htmlResult = "";
                    for (var i = 0; i < listYoutubeVideo.length; i++) {
                        var videoId = listYoutubeVideo[i].id.videoId;
                        var youtubeThumbnails = listYoutubeVideo[i].snippet.thumbnails.high.url;
                        htmlResult += `<div class="youtube-item">                 
                        <div class="thumbnail">
                            <img src="${youtubeThumbnails}" onclick="showVideo('${videoId}')">
                        </div>
                         <div class="title">${listYoutubeVideo[i].snippet.title}</div>
                    </div>`;
                    }
                    divResult.innerHTML = htmlResult;
                } else {
                    console.log("Có lỗi xảy ra.");
                }
            }
        }
        xhr.open("GET", `https://content.googleapis.com/youtube/v3/search?q=${keyword}
                                     &type=video&maxResults=16&part=snippet&key=AIzaSyC__kw4rrUc5tkntrhThEGTR5WSxCYcEB4`)
        xhr.send();
    }
}

var modal = document.getElementById("myModal");
var videoFrame = document.getElementById("video-frame");

function showVideo(videoId) {
    modal.style.display = "block";
    videoFrame.src = "https://www.youtube.com/embed/" + videoId;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
    videoFrame.src = "";

}