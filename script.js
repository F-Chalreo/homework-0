const resultElement = document.getElementById("result");
const rollButton = document.getElementById("roll-button");
const clearHistoryButton = document.getElementById("clear-history-button");
const historyList = document.getElementById("history-list");

const rollHistory = [];
const maxHistoryItems = 10;

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function renderHistory() {
  historyList.innerHTML = "";

  if (rollHistory.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-state";
    emptyItem.textContent = "Nenhum lançamento ainda.";
    historyList.appendChild(emptyItem);
    return;
  }

  rollHistory.forEach((value, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. resultado: ${value}`;
    historyList.appendChild(item);
  });
}

function handleRoll() {
  const value = rollDie();

  resultElement.textContent = String(value);
  rollHistory.unshift(value);

  if (rollHistory.length > maxHistoryItems) {
    rollHistory.pop();
  }

  renderHistory();
}

function clearHistory() {
  rollHistory.length = 0;
  resultElement.textContent = "-";
  renderHistory();
}

rollButton.addEventListener("click", handleRoll);
clearHistoryButton.addEventListener("click", clearHistory);

renderHistory();
