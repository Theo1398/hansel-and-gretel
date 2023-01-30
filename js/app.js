/*
    start game
    select options
    bad end screen and restart game
    good end screen and restart game
*/

class Fairytale {
    constructor(){
        this.optBtn1 = document.getElementById('optionOne');
        this.optBtn2 = document.getElementById('optionTwo');
        this.startBtn = document.getElementById('start');
        this.atckBtn1 = document.getElementById('attackOne');
        this.storyImg = document.getElementById('storyImg');
        this.storyText = document.getElementById('text');
        this.pHealthDisplay = document.getElementById('playerHealth');
        this.mHealthDisplay = document.getElementById('monsterHealth');
        
        // make an array of objects for monsters
        
        // this.characters = [
        //     {
        //         id: 1,
        //         name: 'crows',
        //         health: 100,
        //         playerHealth: 200
        //     },
        //     {
        //         id: 2,
        //         name: 'witch',
        //         health: 175,
        //         playerHealth: 200
        //     },
        //     {
        //         id: 3,
        //         name: 'wolf',
        //         health: 150,
        //         playerHealth: 200
        //     }
        // ]

        this.optBtn1.style.display = 'none';
        this.optBtn2.style.display = 'none';
        this.atckBtn1.style.display = 'none';
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';

        this.storyImg.src = "./media/hghouse.jpg";        
    }

    startGame(){
        this.startBtn.style.display = 'none';

        // house picture
        this.storyImg.src = "./media/hghouse.jpg";

        this.storyText.innerText = `Gretel and her brother Hansel have decided to run away from their evil stepmother. They take a loaf of bread with them to leave a trail.`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'none';

        this.optBtn1.innerText = `Continue`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.light();
        })
    }

    
    // crows(){
    //     this.startBtn.style.display = 'none';
    //     this.optBtn1.style.display = 'none';
    //     this.optBtn2.style.display = 'none';
    //     document.getElementById('attackOne').style.display = 'block';
    //     this.pHealthDisplay.style.display = 'block';
    //     this.mHealthDisplay.style.display = 'block';

    //     // crows picture
    //     this.storyImg.src = "./media/crow.jpg";

    //     this.storyText.innerText = `Crows appear and try to eat the breadcrumb trail the siblings have made. Fight the crows off to save the breadcrumbs.`;

    //     // this.pHealth = 200;
    //     // this.mHealth = 100;

    //     this.pHealthDisplay.innerText = `Hansel & Gretel: ${this.characters[0].playerHealth}`;
    //     this.mHealthDisplay.innerText = `Monster: ${this.characters[0].health}`;

    //     document.getElementById('attackOne').addEventListener('click', (e)=> {            
    //         // this.update();
    //         this.mDamage = Math.floor(Math.random()*10); 
    //         this.pDamage = Math.floor(Math.random()*10); 
    //         console.log(this.mDamage, this.pDamage);
        
    //         if (this.atckBtn1.hasAttribute('data-clicked')) {
    //         // console.log(this.mhealth)
    //             this.mHealthDisplay.innerText = `Monster: ${this.characters[0].health -= this.mDamage}`;
    //             this.pHealthDisplay.innerText = `Hansel & Gretel: ${this.characters[0].playerHealth -= this.pDamage}`;
    //         } 

    //         if (this.characters[0].health <= 0){
    //             this.light();
    //         } else if (this.characters[0][1] <= 0){
    //             this.badEnd4();
    //         }
    //     })
    // }
    

    light(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // woods picture
        this.storyImg.src = "./media/woods.jpg";

        this.storyText.innerText = `As Hansel and Gretel venture deeper into the woods they see a light in the distance. Should they head towards it?`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'flex';

        this.optBtn1.innerText = `Head towards the light.`;
        this.optBtn2.innerText = `Ignore the light and go a different direction.`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.goToLight();
        })
        this.optBtn2.addEventListener('click', (e)=> {
            this.badEnd1();
        })
    }

    goToLight(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // candy house
        this.storyImg.src = "https://i.pinimg.com/originals/75/22/ff/7522ff2ce346ebcbfbd31805c414409a.jpg";

        this.storyText.innerText = `The siblings head towards the light and find a house made of candy. They are hungry from their walk in the woods. Should they eat from the candy house?`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'flex';

        this.optBtn1.innerText = `Start eating the candy.`;
        this.optBtn2.innerText = `Knock on the door.`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.candy();
        })
        this.optBtn2.addEventListener('click', (e)=> {
            this.knock();
        })
    }

    candy(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // candy house
        this.storyImg.src = "https://i.pinimg.com/originals/75/22/ff/7522ff2ce346ebcbfbd31805c414409a.jpg";

        this.storyText.innerText = `The children eat their fill of candy drawing the attention of the occupant inside the house.  A Witch comes outside angry that the children have eaten her house. What should the children do?`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'flex';

        this.optBtn1.innerText = `Apologize to the witch.`;
        this.optBtn2.innerText = `Run away.`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.apologize();
        })
        this.optBtn2.addEventListener('click', (e)=> {
            this.badEnd1();
        })
    }

    apologize(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // candy house
        this.storyImg.src = "https://i.pinimg.com/originals/75/22/ff/7522ff2ce346ebcbfbd31805c414409a.jpg";

        this.storyText.innerText = `The witch invites the children into her home.`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'flex';

        this.optBtn1.innerText = `Enter the witch\'s home.`;
        this.optBtn2.innerText = `Run away.`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.invite();
        })
        this.optBtn2.addEventListener('click', (e)=> {
            this.badEnd1();
        })
    }

    knock(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // candy house
        this.storyImg.src = "https://i.pinimg.com/originals/75/22/ff/7522ff2ce346ebcbfbd31805c414409a.jpg";

        this.storyText.innerText = `A Witch comes to the door and invites the children into her home.`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'flex';

        this.optBtn1.innerText = `Enter the witch\'s home.`;
        this.optBtn2.innerText = `Run away.`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.invite();
        })
        this.optBtn2.addEventListener('click', (e)=> {
            this.badEnd1();
        })
    }

    invite(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // candy house
        this.storyImg.src = "https://i.pinimg.com/originals/75/22/ff/7522ff2ce346ebcbfbd31805c414409a.jpg";

        this.storyText.innerText = `The children enter the Witch's home where she offers them food to eat and a place to sleep. They slept and when they woke Hansel found himself locked in a cage. The witch declared that she would fatten Hansel up to eat him and until then Gretel would work for her. After a few days the Witch decided to check if Hansel was ready to eat. She asked him to stick his finger out of the cage. What should he do?`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'flex';

        this.optBtn1.innerText = `Stick his finger out of the cage for the witch.`;
        this.optBtn2.innerText = `Grab a bone from the floor of the cage and stick that out for the Witch.`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.badEnd2();
        })
        this.optBtn2.addEventListener('click', (e)=> {
            this.boneTrick();
        })
    }

    boneTrick(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // candy house
        this.storyImg.src = "https://i.pinimg.com/originals/75/22/ff/7522ff2ce346ebcbfbd31805c414409a.jpg";

        this.storyText.innerText = `The Witch has poor eyesight and is fooled by Hansel\’s trick and decides not to eat him yet.  This gives Gretel more time to come up with a plan. One morning the Witch decides to eat Hansel no matter how skinny he is. She asks Gretel to prepare the oven, then the Witch smiles and asks Gretel to climb inside the oven to see if it's hot enough. What should Gretel do?`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'flex';

        this.optBtn1.innerText = `Climb inside the oven as the witch asks.`;
        this.optBtn2.innerText = `Ask the witch to show you how to climb inside.`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.badEnd3();
        })
        this.optBtn2.addEventListener('click', (e)=> {
            this.witch();
        })
    }

    witch(){
        this.startBtn.style.display = 'none';
        this.optBtn1.style.display = 'none';
        this.optBtn2.style.display = 'none';
        document.getElementById('attackOne').style.display = 'block';
        this.pHealthDisplay.style.display = 'block';
        this.mHealthDisplay.style.display = 'block';

        // witch picture
        this.storyImg.src = "./media/witch.jpg";

        this.storyText.innerText = `Gretel tries to shove the witch into the oven but she fights back. Fight the witch.`;

        this.pHealth = 200;
        this.mHealth = 150;

        this.pHealthDisplay.innerText = `Hansel & Gretel: ${this.pHealth}`;
        this.mHealthDisplay.innerText = `Monster: ${this.mHealth}`;

        document.getElementById('attackOne').addEventListener('click', (e)=> {
            // this.update();
            this.mDamage = Math.floor(Math.random()*15); 
            this.pDamage = Math.floor(Math.random()*15); 
            console.log(this.mDamage, this.pDamage);
        
            if (this.atckBtn1.hasAttribute('data-clicked')) {
                this.mHealthDisplay.innerText = `Monster: ${this.mHealth -= this.mDamage}`;
                this.pHealthDisplay.innerText = `Hansel & Gretel: ${this.pHealth -= this.pDamage}`;
            } 

            if (this.mHealth <= 0){
                this.oven();
            } else if (this.pHealth <= 0){
                this.badEnd4();
        }
        })
    }

    oven(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // candy house
        this.storyImg.src = "./media/woods.jpg";

        this.storyText.innerText = `Gretel shoves the witch into the oven and slams it closed, locking the Witch inside and cooking her.  She unlocks Hansel's cage and they both run back out into the woods. They wander through the woods lost. How will the siblings get home?`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'flex';

        this.optBtn1.innerText = `Wander through the woods and hope you find your home.`;
        this.optBtn2.innerText = `Follow the breadcrumbs back home.`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.badEnd1();
        })
        this.optBtn2.addEventListener('click', (e)=> {
            this.goodEnd();
        })
    }

    // wolf(){
    //     this.startBtn.style.display = 'none';
    //     this.optBtn1.style.display = 'none';
    //     this.optBtn2.style.display = 'none';
    //     document.getElementById('attackOne').style.display = 'block';
    //     this.pHealthDisplay.style.display = 'block';
    //     this.mHealthDisplay.style.display = 'block';

    //     // wolf picture
    //     this.storyImg.src = "./media/wolf.jpg";

    //     this.storyText.innerText = `A wolf appears and attacks Hansel and Gretel, fight back.`;

    //     // this.pHealth = 200;
    //     // this.mHealth = 150;

    //     this.pHealthDisplay.innerText = `Hansel & Gretel: ${this.characters[2].playerHealth}`;
    //     this.mHealthDisplay.innerText = `Monster: ${this.characters[2].health}`;

    //     document.getElementById('attackOne').addEventListener('click', (e)=> {
    //         // this.update();
    //         this.mDamage = Math.floor(Math.random()*10); 
    //         this.pDamage = Math.floor(Math.random()*10); 
    //         console.log(this.mDamage, this.pDamage);
        
    //         if (this.atckBtn1.hasAttribute('data-clicked')) {
    //             this.mHealthDisplay.innerText = `Monster: ${this.characters[2].health -= this.mDamage}`;
    //             this.pHealthDisplay.innerText = `Hansel & Gretel: ${this.characters[2].playerHealth -= this.pDamage}`;
    //         } 

    //         if (this.characters[2].health <= 0){
    //             this.goodEnd();
    //         } else if (this.characters[2].playerHealth <= 0){
    //             this.badEnd4();
    //         }
    //     })
    // }

    // update(){
    //     this.mDamage = Math.floor(Math.random()*10); 
    //     this.pDamage = Math.floor(Math.random()*10); 
    //     console.log(this.mDamage, this.pDamage);
        
    //     if (this.atckBtn1.hasAttribute('data-clicked')) {
    //         // console.log(this.mhealth)
    //         this.mHealthDisplay.innerText = `Monster: ${this.mHealth -= this.mDamage}`;
    //         this.pHealthDisplay.innerText = `Hansel & Gretel: ${this.pHealth -= this.pDamage}`;
    //     } 
    // }

    goodEnd(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // GOOD END
        this.storyImg.src = "./media/good.jpg";

        this.storyText.innerText = `GOOD END: Hansel and Gretel find their way home and makeup with their parents and they all live happily ever after.`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'none';

        this.optBtn1.innerText = `Restart Game`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.startGame();
        })
    }

    badEnd1(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // BAD END
        this.storyImg.src = "./media/bad.jpg";

        this.storyText.innerText = `BAD END 1: Hansel and Gretel wander through the woods for days on end until they eventually starve to death.`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'none';

        this.optBtn1.innerText = `Restart Game`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.startGame();
        })
    }

    badEnd2(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // BAD END
        this.storyImg.src = "./media/bad.jpg";

        this.storyText.innerText = `BAD END 2: The Witch decides Hansel is ready to eat and cooks him up and Gretel is forced to work for the Witch for the rest of her life.`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'none';

        this.optBtn1.innerText = `Restart Game`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.startGame();
        })
    }

    badEnd3(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // BAD END
        this.storyImg.src = "./media/bad.jpg";

        this.storyText.innerText = `BAD END 3: The witch eats both Hansel and Gretel.`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'none';

        this.optBtn1.innerText = `Restart Game`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.startGame();
        })
    }

    badEnd4(){
        this.pHealthDisplay.style.display = 'none';
        this.mHealthDisplay.style.display = 'none';
        document.getElementById('attackOne').style.display = 'none';

        // BAD END
        this.storyImg.src = "./media/bad.jpg";

        this.storyText.innerText = `BAD END 4: Hansel and Gretel perish.`;

        this.optBtn1.style.display = 'flex';
        this.optBtn2.style.display = 'none';

        this.optBtn1.innerText = `Restart Game`;

        this.optBtn1.addEventListener('click', (e)=> {
            this.startGame();
        })
    }
}

let newGame = new Fairytale();

newGame.startBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    newGame.startGame();
})