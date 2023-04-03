window.addEventListener("DOMContentLoaded", () => {
    class Participants {
        constructor (name, roundI, roundII, roundIII){
            this.fullName = name;
            this.pointsForRoundI = roundI;
            this.pointsForRoundII = roundII;
            this.pointsForRoundIII = roundIII;
            Participants.counter++;     
        }

        static totalParticipants() {
            return Participants.counter;
        }

        sumOfPoints() {
            return this.pointsForRoundI + this.pointsForRoundII + this.pointsForRoundIII;
        }

        pointsForRoundIMetod() {
            return this.pointsForRoundI;
        }

        pointsForRoundIIMetod() {
            return this.pointsForRoundII;
        }

        pointsForRoundIIIMetod() {
            return this.pointsForRoundIII;
        }
    }

    Participants.counter = 0;

    let allBallI = 0,
    allBallII = 0,
    allBallIII = 0,
    allBallAll = 0,
    ballRoundI = 0,
    ballRoundII = 0,
    ballRoundIII = 0;
    let nameParticipants = undefined;

    document.querySelector(".form").addEventListener("change", (option) => { 
        if(document.querySelector(".selectIoption0").value === option.target.value){
            ballRoundI = 0;
        }else if(document.querySelector(".selectIoption1").value === option.target.value) {
            ballRoundI = 1;
        }else if(document.querySelector(".selectIoption2").value === option.target.value) {
            ballRoundI = 2;
        }else if(document.querySelector(".selectIoption3").value === option.target.value) {
            ballRoundI = 3;
        }else if(document.querySelector(".selectIoption4").value === option.target.value) {
            ballRoundI = 4;
        }else if(document.querySelector(".selectIoption5").value === option.target.value) {
            ballRoundI = 5;
        }else if(document.querySelector(".selectIIoption0").value === option.target.value) {
            ballRoundII = 0;
        }else if(document.querySelector(".selectIIoption1").value === option.target.value) {
            ballRoundII = 1;
        }else if(document.querySelector(".selectIIoption2").value === option.target.value) {
            ballRoundII = 2;
        }else if(document.querySelector(".selectIIoption3").value === option.target.value) {
            ballRoundII = 3;
        }else if(document.querySelector(".selectIIoption4").value === option.target.value) {
            ballRoundII = 4;
        }else if(document.querySelector(".selectIIoption5").value === option.target.value) {
            ballRoundII = 5;
        }else if(document.querySelector(".selectIIIoption0").value === option.target.value) {
            ballRoundIII = 0;
        }else if(document.querySelector(".selectIIIoption1").value === option.target.value) {
            ballRoundIII = 1;
        }else if(document.querySelector(".selectIIIoption2").value === option.target.value) {
            ballRoundIII = 2;
        }else if(document.querySelector(".selectIIIoption3").value === option.target.value) {
            ballRoundIII = 3;
        }else if(document.querySelector(".selectIIIoption4").value === option.target.value) {
            ballRoundIII = 4;
        }else if(document.querySelector(".selectIIIoption5").value === option.target.value) {
            ballRoundIII = 5;
        }

        nameParticipants = document.getElementById("nameUser").value;

        

    },false);

    document.querySelector(".submit").addEventListener("click", () => { 

        if(nameParticipants !== "" && nameParticipants !== undefined){
            
        let newParticipants = new Participants(nameParticipants, ballRoundI, ballRoundII, ballRoundIII);
            
        document.querySelector(".tbody-tr").insertAdjacentHTML('beforeend', `<tr${(function () {if(document.querySelector(".checkbox-input").checked){return ` class="captain">`}else{return `>`}})()}
            <td>${nameParticipants}</td>
            <td>${newParticipants.pointsForRoundIMetod()}</td>
            <td>${newParticipants.pointsForRoundIIMetod()}</td>
            <td>${newParticipants.pointsForRoundIIIMetod()}</td>
            <td>${newParticipants.sumOfPoints()}</td>
            </tr>`);
            
        allBallI += ballRoundI;
        allBallII += ballRoundII;
        allBallIII += ballRoundIII;
        allBallAll = allBallI + allBallII + allBallIII;
            
        document.querySelector(".allPlayers").textContent = Participants.totalParticipants();
        document.querySelector(".allSumRoundI").textContent = allBallI;
        document.querySelector(".allSumRoundII").textContent = allBallII;
        document.querySelector(".allSumRoundIII").textContent = allBallIII;
        document.querySelector(".allSumRoundAll").textContent = allBallAll;
            
        document.getElementById("nameUser").value = "";
        nameParticipants = undefined;
        document.querySelector(".checkbox-input").checked = false;
        document.getElementById("selectroundI").children[0].selected = true;
        document.getElementById("selectroundII").children[0].selected = true;
        document.getElementById("selectroundIII").children[0].selected = true;

        ballRoundI = 0;
        ballRoundII = 0;
        ballRoundIII = 0;
        }

        document.querySelector(".checkbox-input").checked = false;
                 
    },false);

}, false);