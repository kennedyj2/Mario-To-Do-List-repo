const hoverElement = document.getElementById('character-Icon');
    const hoverSound = document.getElementById('hoverSound');
    const characterHover = document.getElementById('Mario');
    const characterSound = document.getElementById('MarioSound');
    const characterHover2 = document.getElementById('Luigi');
    const characterSound2 = document.getElementById('LuigiSound');
    const characterHover3 = document.getElementById('Peach');
    const characterSound3 = document.getElementById('PeachSound');
    const characterHover4 = document.getElementById('Toad');
    const characterSound4 = document.getElementById('ToadSound');
    const characterHover5 = document.getElementById('Rosalina');
    const characterSound5 = document.getElementById('RosalinaSound');
    const playSoundButton1 = document.getElementById('B');
    const playSoundButton2 = document.getElementById('L');
    const playSoundButton3 = document.getElementById('T');
    const playSoundButton4 = document.getElementById('P');
    const playSoundButton5 = document.getElementById('R');

    const Tasks = document.getElementById('Task_Add1')
    const Tasks2 = document.getElementById('Task_Add2')
    const Tasks3 = document.getElementById('Task_Add3')
    const Tasks4 = document.getElementById('Task_Add4')
    const Tasks5 = document.getElementById('Task_Add5')
    const myAudio = document.getElementById('myAudio');
    const Task_Audio = document.getElementById('Task_Add_Sound')
    const myInputField = document.getElementById('To-Do');
    const myInputField2 = document.getElementById('To-Do2');
    const myInputField3 = document.getElementById('To-Do3');
    const myInputField4 = document.getElementById('To-Do4');
    const myInputField5 = document.getElementById('To-Do5');

    let clickCount = 0;

        Task_Add1.addEventListener('click', () => {
            clickCount++;

            if (clickCount === 2) {
                myInputField.value = ''; // Clear the input box
                clickCount = 0;    // Reset the click count
            }

            
            
        });

        Task_Add2.addEventListener('click', () => {
            clickCount++;

            if (clickCount === 2) {
                myInputField2.value = ''; // Clear the input box
                clickCount = 0;    // Reset the click count
            }

            
            
        });

        Task_Add3.addEventListener('click', () => {
            clickCount++;

            if (clickCount === 2) {
                myInputField3.value = ''; // Clear the input box
                clickCount = 0;    // Reset the click count
            }

            
            
        });

        Task_Add4.addEventListener('click', () => {
            clickCount++;

            if (clickCount === 2) {
                myInputField4.value = ''; // Clear the input box
                clickCount = 0;    // Reset the click count
            }

            
            
        });

        Task_Add5.addEventListener('click', () => {
            clickCount++;

            if (clickCount === 2) {
                myInputField5.value = ''; // Clear the input box
                clickCount = 0;    // Reset the click count
            }

            
            
        });

    playSoundButton1.addEventListener('click', () => {
        myAudio.load(); // Optional: Reloads the audio to play from the start
        myAudio.play();
     
    });

    Tasks.addEventListener('click', () => {
        Task_Audio.load(); // Optional: Reloads the audio to play from the start
        Task_Audio.play();
     
    });

    Tasks2.addEventListener('click', () => {
        Task_Audio.load(); // Optional: Reloads the audio to play from the start
        Task_Audio.play();
     
    });

    Tasks3.addEventListener('click', () => {
        Task_Audio.load(); // Optional: Reloads the audio to play from the start
        Task_Audio.play();
     
    });

    Tasks4.addEventListener('click', () => {
        Task_Audio.load(); // Optional: Reloads the audio to play from the start
        Task_Audio.play();
     
    });

    Tasks5.addEventListener('click', () => {
        Task_Audio.load(); // Optional: Reloads the audio to play from the start
        Task_Audio.play();
     
    });


    playSoundButton2.addEventListener('click', () => {
        myAudio.load(); // Optional: Reloads the audio to play from the start
        myAudio.play();
     
    });
    playSoundButton3.addEventListener('click', () => {
        myAudio.load(); // Optional: Reloads the audio to play from the start
        myAudio.play();
     
    });
    playSoundButton4.addEventListener('click', () => {
        myAudio.load(); // Optional: Reloads the audio to play from the start
        myAudio.play();
     
    });
    playSoundButton5.addEventListener('click', () => {
        myAudio.load(); // Optional: Reloads the audio to play from the start
        myAudio.play();
     
    });

    characterHover5.addEventListener('mouseover', () => {
        characterSound5.currentTime = 0; // Rewind to the beginning
        characterSound5.play();
        characterSound5.volume = 1.0;
    });

    characterHover5.addEventListener('mouseout', () => {
        characterSound5.pause();
        characterSound5.currentTime = 0; // Optional: reset sound on mouse out
    });



    characterHover4.addEventListener('mouseover', () => {
        characterSound4.currentTime = 0; // Rewind to the beginning
        characterSound4.play();
        characterSound4.volume = 1.0;
    });

    characterHover4.addEventListener('mouseout', () => {
        characterSound4.pause();
        characterSound4.currentTime = 0; // Optional: reset sound on mouse out
    });


    characterHover3.addEventListener('mouseover', () => {
        characterSound3.currentTime = 0; // Rewind to the beginning
        characterSound3.play();
        characterSound3.volume = 1.0;
    });

    characterHover3.addEventListener('mouseout', () => {
        characterSound3.pause();
        characterSound3.currentTime = 0; // Optional: reset sound on mouse out
    });


    characterHover2.addEventListener('mouseover', () => {
        characterSound2.currentTime = 0; // Rewind to the beginning
        characterSound2.play();
        characterSound2.volume = 1.0;
    });

    characterHover2.addEventListener('mouseout', () => {
        characterSound2.pause();
        characterSound2.currentTime = 0; // Optional: reset sound on mouse out
    });

    hoverElement.addEventListener('mouseover', () => {
        hoverSound.currentTime = 0; // Rewind to the beginning
        hoverSound.play();
        hoverSound.volume = 1.0;
    });

    hoverElement.addEventListener('mouseout', () => {
        hoverSound.pause();
        hoverSound.currentTime = 0; // Optional: reset sound on mouse out
    });

    characterHover.addEventListener('mouseover', () => {
        MarioSound.currentTime = 0; // Rewind to the beginning
        MarioSound.play();
        MarioSound.volume = 1.0;
    });

    characterHover.addEventListener('mouseout', () => {
        MarioSound.pause();
        MarioSound.currentTime = 0; // Optional: reset sound on mouse out
    });



    const dateElement = document.getElementById('Current_Day');

// Step 2: Create a new Date object
    const currentDate = new Date();

// Step 3: Format the date (you can choose your own format)
    const formattedDate = currentDate.toLocaleDateString(); // Example: "7/26/2025"

// Step 4: Insert the date into the element
    dateElement.textContent = formattedDate;


    const myObject1 = document.getElementById('Char-Widen');
    const myObject2 = document.getElementById('L');
    const myObject3 = document.getElementById('T');
    const myObject4 = document.getElementById('B');
    const myObject5 = document.getElementById('P');
    const myObject6 = document.getElementById('R');
   
    myObject2.addEventListener('click', function() {
        myObject1.style.backgroundColor = 'Green';
        myObject1.style.border = 'Green';
        
    });
    myObject3.addEventListener('click', function() {
        myObject1.style.backgroundColor = 'royalblue';
        myObject1.style.border = 'royalblue';
       
    });
    myObject4.addEventListener('click', function() {
        myObject1.style.backgroundColor = 'red';
        myObject1.style.border = 'red';
    });
    myObject5.addEventListener('click', function() {
        myObject1.style.backgroundColor = 'rgb(255, 171, 185)';
        myObject1.style.border = 'rgb(255, 171, 185)';
    });
    myObject6.addEventListener('click', function() {
        myObject1.style.backgroundColor = 'cyan';
        myObject1.style.border = 'cyan';
    });


    function changeImage(imageSrc) {
    const imageElement = document.getElementById('character-Icon');
    imageElement.src = imageSrc;
  }

    function changeImage(imageSrc) {
    const imageElement = document.getElementById('character-Icon');
    imageElement.src = imageSrc;
  }

    function changeImage(imageSrc) {
    const imageElement = document.getElementById('character-Icon');
    imageElement.src = imageSrc;
  }

    function changeImage(imageSrc) {
    const imageElement = document.getElementById('character-Icon');
    imageElement.src = imageSrc;
  }

  function changePlus(image) {
  const imgElement = document.getElementById('PlusImage1');
  imgElement.src = image;
}

function changePlus2(image2) {
  const imgElement2 = document.getElementById('PlusImage2');
  imgElement2.src = image2;
}

function changePlus3(image3) {
  const imgElement3 = document.getElementById('PlusImage3');
  imgElement3.src = image3;
}
function changePlus4(image4) {
  const imgElement4 = document.getElementById('PlusImage4');
  imgElement4.src = image4;
}
function changePlus5(image5) {
  const imgElement5 = document.getElementById('PlusImage5');
  imgElement5.src = image5;
}

   


  const audioPlayer = document.getElementById('audioPlayer');
    const playlist = [
        'Audio/1-01. Title Screen.mp3',
        'Audio/1-04. Underground Theme.mp3',
        'Audio/2-32. WORLD Star.mp3',
        'Audio/2-12. Sunshine Seaside.mp3'
    ]; 

    let currentSongIndex = 0;

    function playNextSong() {
        if (currentSongIndex < playlist.length) {
            audioPlayer.src = playlist[currentSongIndex];
            audioPlayer.play();
            currentSongIndex++;
        } else {
            currentSongIndex = 0; // Loop back to the beginning
            audioPlayer.src = playlist[currentSongIndex];
            audioPlayer.play();
            currentSongIndex++;
        }
    }

    audioPlayer.addEventListener('ended', playNextSong);

    // Start playing the first song
    playNextSong();

    function changePlus(image) {
  const imgElement = document.getElementById('PlusImage1');
  const plusSound = document.getElementById('Task_Add_Sound');
  const completedSound = document.getElementById('Task_Completed_Sound');
  
  if (imgElement.src.includes("completed.png")) {
    imgElement.src = "Images/icons8-plus-button-128.png"; // back to plus
    plusSound.currentTime = 0;
    plusSound.play();
  } else {
    imgElement.src = "Images/completed.png"; // completed
    completedSound.currentTime = 0;
    completedSound.play();
  }
}

function changePlus2(image2) {
  const imgElement = document.getElementById('PlusImage2');
  const plusSound = document.getElementById('Task_Add_Sound');
  const completedSound = document.getElementById('Task_Completed_Sound');
  
  if (imgElement.src.includes("completed.png")) {
    imgElement.src = "Images/icons8-plus-button-128.png";
    plusSound.currentTime = 0;
    plusSound.play();
  } else {
    imgElement.src = "Images/completed.png";
    completedSound.currentTime = 0;
    completedSound.play();
  }
}

function changePlus3(image3) {
  const imgElement = document.getElementById('PlusImage3');
  const plusSound = document.getElementById('Task_Add_Sound');
  const completedSound = document.getElementById('Task_Completed_Sound');
  
  if (imgElement.src.includes("completed.png")) {
    imgElement.src = "Images/icons8-plus-button-128.png";
    plusSound.currentTime = 0;
    plusSound.play();
  } else {
    imgElement.src = "Images/completed.png";
    completedSound.currentTime = 0;
    completedSound.play();
  }
}

function changePlus4(image4) {
  const imgElement = document.getElementById('PlusImage4');
  const plusSound = document.getElementById('Task_Add_Sound');
  const completedSound = document.getElementById('Task_Completed_Sound');
  
  if (imgElement.src.includes("completed.png")) {
    imgElement.src = "Images/icons8-plus-button-128.png";
    plusSound.currentTime = 0;
    plusSound.play();
  } else {
    imgElement.src = "Images/completed.png";
    completedSound.currentTime = 0;
    completedSound.play();
  }
}

function changePlus5(image5) {
  const imgElement = document.getElementById('PlusImage5');
  const plusSound = document.getElementById('Task_Add_Sound');
  const completedSound = document.getElementById('Task_Completed_Sound');
  
  if (imgElement.src.includes("completed.png")) {
    imgElement.src = "Images/icons8-plus-button-128.png";
    plusSound.currentTime = 0;
    plusSound.play();
  } else {
    imgElement.src = "Images/completed.png";
    completedSound.currentTime = 0;
    completedSound.play();
  }
}

