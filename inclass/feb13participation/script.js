function displaySong() {
    // Gather information
    const song = document.getElementById("song-input").value;
    const artist = document.getElementById("artist-input").value;

    let displayP = document.getElementById("ex");
    //let displaySongArtist = document.getElementById("exsongartist");

    // Errors
    const firstError = isBlank(song, "error-song");
    const secondError = isBlank(artist, "error-artist");
    if(firstError||secondError) return;
    
    // Display
    displayP.innerHTML = `Your favorite song is ${song} by ${artist}`;


}

//Check for blanks function
function isBlank(data, errorSpanID)
{
    let errorSpan = document.getElementById(errorSpanID);
    if(data.trim() == "")
    {
        errorSpan.classList.remove("hidden");
        return true;
    }
    return false;
}


const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displaySong;
btnDisplay.onclick = displaySongArtist;