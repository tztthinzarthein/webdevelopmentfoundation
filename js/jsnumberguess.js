
const game = document.querySelector('#game'),
		minnum = document.querySelector('.minnum'),
		maxnum = document.querySelector('.maxnum'),
		guessinput = document.querySelector('#guessinput'),
		guessbtn = document.querySelector('#guessbtn'),
		message1 = document.querySelector('.message1'),
		message2 = document.querySelector('.message2');


// Game Value
let min = 1,
	max = 10,
	guessleft = 3,
	winningnum = getrandomnum(min,max);

	minnum.textContent = min;
	maxnum.textContent = max;

	guessbtn.addEventListener('click',function(){
		// console.log('hay');
		// console.log(guessinput.value);

		let guess = parseInt(guessinput.value);
		// console.log(guess);
		// console.log(typeof guess);


		if(guess < min || guess > max || isNaN(guess)){
			// console.log(`Please enter a number between ${min} to ${max}`);
			// message2.innerText = `Please enter a number between ${min} to ${max}`;

			setmessage2(`Please enter a number between ${min} to ${max}`,"red");
		}




		if(guess === winningnum){
			// Gameover WON

			// disable input
			// guessinput.disabled = true;
			// border color
			// guessinput.style.borderColor = "green";
			// message2
			// message1.innerText=`${winningnum} is correct!, You Won`;
			// setmessage1(`${winningnum} is correct!, You Won`,"green");
			// play again
			// guessbtn.value = 'Play Again';
			gameover(true,`${winningnum} is correct!, You Won`);


		}else{
			// Wrong Number

			guessleft -= 1;

			if(guessleft === 0){
				// Gameover LOST
				console.log(guessleft);
				// disabled input
				// guessinput.disabled = true;
				// border color
				// guessinput.style.borderColor = "red";
				// message
				// setmessage1(`Game Over, You Lost, The correct number was ${winningnum}`,"red");

				// guessbtn.value = 'Play Again';
				gameover( false,`Game Over, You Lost, The correct number was ${winningnum}`);

			}else{
				// Game CONTINUE
				// bordercolor
				guessinput.style.borderColor = 'red';
				// clear input
				guessinput.value = '';
				setmessage1(`${guess}is not correct,${guessleft} guess left`,"red");



			}

		}



	});



	// Message
	function setmessage1(msg,col){
		message1.textContent = msg;
		message1.style.color = col;
	}

	function setmessage2(msg,col){
		message2.textContent = msg;
		message2.style.color = col;

					// (fun,ms)
		setTimeout(function(){
			message2.textContent='';
		},2000);

	}

	// Gameover

	function gameover(won,msg){
		let color;
		won === true ? color = 'green' : color = 'red';

		// disabled
		guessinput.disabled = true;
		// borderColor
		guessinput.style.borderColor = color;
		// message color
		// message1.style.color = color;
		// message
		setmessage1(msg,color);

		// play again
		guessbtn.value = 'Play Again';

		// guessbtn.className = "guessbtn play-again";
		guessbtn.classList.add('play-again');

	}
	//playagain
	game.addEventListener('mouseup',function(e){
		
		if(e.target.className === 'guessbtn play-again'){
			window.location.reload();
		}
	});

	// For Winning Number
	function getrandomnum(min,max){
		// console.log("hey");
		console.log(Math.floor(Math.random()*(max-min+1)+min));
		let rdnnumber = Math.floor(Math.random()*(max-min+1)+min);
		return rdnnumber;
	}

	// getrandomnum(1,10);