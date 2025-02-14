  function nextStep(current, next) {
            document.getElementById(current).classList.remove('active');
            document.getElementById(next).classList.add('active');
        }
        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart-icon");
            heart.innerHTML = "❤️";
            heart.style.left <script>
    function nextStep(current, next) {
        document.getElementById(current).classList.remove('active');
        document.getElementById(next).classList.add('active');
    }

        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart-icon");
            heart.innerHTML = ["❤️", "💖", "💗", "💘", "💞", "💕", "💜"][Math.floor(Math.random() * 7)]; // Random heart style
            heart.style.left = Math.random() * 100 + "vw"; // Random position
            heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random floating speed
            heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Random size
            heart.style.color = ["red", "pink", "hotpink", "#ff69b4", "#ff1493"][Math.floor(Math.random() * 5)]; // Random color
            
            document.getElementById("floatingHearts").appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 300); // Creates a new heart every 300ms

    function showReply() {
        let message = document.getElementById("replyMessage").value;
        if (message.trim() === "") {
            alert("Please enter a message!");
            return;
        }
        document.getElementById("replyDisplay").innerHTML = "💌 Your reply: " + message;
        document.getElementById("replyBox").style.display = "none";
    }
</script>
= Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            document.getElementById("floatingHearts").appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }
        setInterval(createHeart, 500);
