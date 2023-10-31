function handleKeyDown(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('commandLine');
        const command = input.value;
        const outputDiv = document.getElementById('output');

        outputDiv.innerHTML += '<span class="green-text">me@alfieSite</span><span class="white-text">:</span><span class="blue-text">/home/usr/me</span><span class="white-text">$ </span><span class="white-text">' + command + '</span>';
        
        if (command === 'help') {
            outputDiv.innerHTML += '<p>Available commands: cv, profile, about, socials</p>';
        } else if (command === 'cv') {
            outputDiv.innerHTML += '<p class="pink-cv-text" style="font-size: 18px; text-transform: uppercase;">Personal Statement</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">An enthusiastic Games Development student, looking for part-time employment. Proven<br>experience in practical, communicative, and administration skills. A reliable and collaborative team<br>member, looking for work within a games studio or programming setting.</p><br>';
            
            outputDiv.innerHTML += '<p class="pink-cv-text" style="font-size: 18px; text-transform: uppercase;">Key Skills</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">3D design and modelling in a range of software such as Blender, 3ds Max and Fusion 360</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Games development with Unity and Unreal Engine</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Programming with C#, C++, Java, Python, HTML and many more</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Adobe Creative Suite including Photoshop, Illustrator, and Premier Pro</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Team working and cooperation in high-pressure environments</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Project management and supervision</p><br>';
            
            outputDiv.innerHTML += '<p class="pink-cv-text" style="font-size: 18px; text-transform: uppercase;">Education</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Computer Science GCSE - Grade 8</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Design and Technology GCSE - Grade 6</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Interactive Media GCSE - Level 2 merit</p><br>';
            
            outputDiv.innerHTML += '<p class="blue-cv-text">UAL Level 3 Diploma in Creative Media Production and Technology - Distinction</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">UAL Level 3 Extended Diploma in Creative Media Production and Technology in Games Development - Distinction</p><br>';
            
            outputDiv.innerHTML += '<p class="pink-cv-text" style="font-size: 18px; text-transform: uppercase;">Previous Employment</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">Fast Food Operative, Dominos Pizza, (Location available on request)</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">(September 2021 – February 2022)</p><br>';
            
            outputDiv.innerHTML += '<p class="blue-cv-text">In-Store Assistant, John Lewis Partnership, Waitrose, (Location available on request)</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">(March 2022 – February 2023)</p><br>';

            outputDiv.innerHTML += '<p class="blue-cv-text">Catering Assistant, KnockHatch, (Location available on request)</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">(July 2023 – Present)</p><br>';
            
            outputDiv.innerHTML += '<p class="pink-cv-text" style="font-size: 18px; text-transform: uppercase;">References</p>';
            outputDiv.innerHTML += '<p class="blue-cv-text">References are available upon request</p><br>';
            
        } else if (command === 'profile') {
            outputDiv.innerHTML += '<p class="pink-profile-text">╭─── alfie@alfiedev.co.uk ──────────╮</p>';
            outputDiv.innerHTML += '<p class="blue-profile-text">| <span class="white-profile-text">Name</span> - <span class="white-profile-text">Alfie Richards</span></p>';
            outputDiv.innerHTML += '<p class="blue-profile-text">| <span class="white-profile-text">Pronouns</span> - <span class="white-profile-text">He/Him</span></p>';
            outputDiv.innerHTML += '<p class="blue-profile-text">| <span class="white-profile-text">Occupation</span> - <span class="white-profile-text">UOP Games Technology</span></p>';
            outputDiv.innerHTML += '<p class="blue-profile-text">| <span class="white-profile-text">Contact</span> - <span class="white-profile-text">alfie11r@gmail.com</span></p>';
            outputDiv.innerHTML += '<p class="pink-profile-text">╰───────────────────────────────────╯</p>';
            
        } else if (command === 'socials') {
            outputDiv.innerHTML += '<p class="pink-profile-text">╭─── Socials ───────────────────────────────────────────╮</p>';
            outputDiv.innerHTML += '<p class="blue-profile-text">| <span class="white-profile-text">LinkedIn</span> - <a href="https://www.linkedin.com/in/alfie-richards" class="white-profile-text">https://www.linkedin.com/in/alfie-richards</a></p>';
            outputDiv.innerHTML += '<p class="blue-profile-text">| <span class="white-profile-text">X (Twitter)</span> - <a href="https://twitter.com/AlfieDev11" class="white-profile-text">https://twitter.com/AlfieDev11</a></p>';
            outputDiv.innerHTML += '<p class="blue-profile-text">| <span class="white-profile-text">Facebook</span> - <a href="https://www.facebook.com/alfie.richards11" class="white-profile-text">https://www.facebook.com/alfie.richards11</a></p>';
            outputDiv.innerHTML += '<p class="blue-profile-text">| <span class="white-profile-text">GitHub</span> - <a href="https://github.com/AlfieRichards" class="white-profile-text">https://github.com/AlfieRichards</a></p>';
            outputDiv.innerHTML += '<p class="pink-profile-text">╰───────────────────────────────────────────────────────╯</p>';
            

        } else {
            outputDiv.innerHTML += '<p>Command not found. Type "help" for available commands.</p>';
        }

        input.value = '';

        scrollToBottom();
    }
}


function scrollToBottom() {
    var terminalOutput = document.getElementById("output");
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}