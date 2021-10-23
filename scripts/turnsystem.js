//write a global variable that is turn
//write a function that changes the value of turn from pos to neg
//when turn is positive, let it be player turn - has to be in main?
//when turn is negative, let it be enemy turn - has to be in main?
//at the end of player and enemy actions, call the change turn function

export let turnStatus = 1;

export function changeTurn() {
  turnStatus = -turnStatus;
}
