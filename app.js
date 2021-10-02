
            const options = document.querySelectorAll('.options');
            let pscore = 0;
             let cscore = 0;
             let playermove = document.querySelector('.playermove');
             let computermove = document.querySelector('.computermove');
             let winner = document.querySelector('.winner');


            options.forEach((op) => {
                op.addEventListener("click", function () {
                   
                    const playerinput = this.value;
                    winner .innerHTML = " ";
                    const choice = ['rock', 'paper', 'scissor'];
                    const computerinput = choice[Math.floor(Math.random() * 3)];

                    console.log(playerinput, computerinput);
                    campareinputs(playerinput,computerinput);
                    updateScore();

                    if(checkWinner())
                    {
                        pscore = cscore =0;
                        updateScore();
                    }
                })
            })

            function campareinputs(playerinput, computerinput)
            {
                
                computermove.innerHTML = `${computerinput}`;
                playermove.innerHTML = `${playerinput}`;

                if(playerinput == computerinput)
                {
                    winner.innerHTML = "Match Draw";
                    return;
                }

                // rock

                if(playerinput == "rock")
                {
                    if(computerinput == "scissor")
                    {
                        winner.innerHTML = "You Win !!";
                        pscore++;
                    }
                    else
                    {
                        winner.innerHTML = "Computer Win !!";
                        cscore++;
                    }
                }

                // paper

                else if(playerinput == "paper")
                {
                    if(computerinput == "rock")
                    {
                        winner.innerHTML = "You Win !!";
                        pscore++;
                    }
                    else
                    {
                        winner.innerHTML = "Computer Win !!";
                        cscore++;
                    }
                }

                // scissor

              else
                {
                    if(computerinput == "paper")
                    {
                        winner.innerHTML = "You Win !!";
                        pscore++;
                    }
                    else
                    {
                        winner.innerHTML = "Computer Win !!";
                        cscore++;
                    }
                }
            }

            function updateScore()
            {
                document.getElementById("p-score").textContent = pscore;
                document.getElementById("c-score").textContent = cscore;
            }

            function checkWinner()
            {
                if(pscore == 5 || cscore == 5)
                {
                    return true;
                }
                return false;
            }
