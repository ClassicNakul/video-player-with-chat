// Video sources for different resolutions
const videoSources = {
    '480p': 'path/to/video_480p.mp4',
    '720p': 'path/to/video_720p.mp4',
    '1080p': 'path/to/video_1080p.mp4'
};

// Function to change the video resolution
function changeResolution(select) {
    const resolution = select.value;
    const video = document.getElementById('video');
    const source = document.getElementById('source');

    source.setAttribute('src', videoSources[resolution]); // Change video source
    video.load(); // Load the new video
    video.play(); // Play the new video
}

// Function to load the video file chosen by the user
function selectVideo(input) {
    const file = input.files[0];  // Get the file
    const reader = new FileReader();

    reader.onload = function(e) {
        const src = e.target.result;  // Get the data URL
        const video = document.getElementById('video');
        const source = document.getElementById('source');
        
        source.setAttribute('src', src);  // Set the source to the new file
        video.load();  // Load the new video
        video.play();  // Play the video
    };

    reader.readAsDataURL(file);  // Read the video file as a data URL
}

// Function to skip forward or backward in the video
function skip(seconds) {
    const video = document.getElementById('video');
    video.currentTime += seconds;
}

// Mock fetch messages function for chat functionality
function fetchMessages() {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';  // Clear previous messages
}

// Mock send message function
function sendMessage() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        const messagesContainer = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = `${username}: ${message}`;
        messagesContainer.appendChild(newMessage);

        // Clear the input field after sending the message
        document.getElementById('message').value = '';
    } else {
        alert('Both username and message are required');
    }
}

// Call fetchMessages regularly to simulate chat updates (every 2 seconds)
setInterval(fetchMessages, 2000);
