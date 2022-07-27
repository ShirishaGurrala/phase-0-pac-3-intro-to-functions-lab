function shout(value) {
 return value.toUpperCase()
}

function whisper(value) {
    return value.toLowerCase()
   }

function logShout(value) {
   console.log(value.toUpperCase()) 
   }

function logWhisper(value) {
    console.log(value.toLowerCase()) 
    }   

function sayHiToHeadphonedRoommate(value) {
    if (value === value.toLowerCase()) {
        return "I can't hear you!"
    } else if (value === value.toUpperCase()) {
        return "YES INDEED!"
    } else if (value === "Let's have dinner together!") {
        return "I would love to!"
    }     
}    