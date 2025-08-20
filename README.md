# 🎮 Tic Tac Toe AI Game

Play against an AI that adapts its difficulty — from casual fun to an **unbeatable opponent** powered by the **Minimax Algorithm with Alpha-Beta Pruning**.

## 🚀 Live Demo
👉 [Play here](https://sahithigundu17.github.io/tic-tac-toe-ai/) 

## 🕹️ Features
- ✅ Human (X) vs AI (O)  
- 🤖 AI Difficulty Levels

  ## Easy 🎲
  
    AI makes completely random moves.
  
    No strategy is applied, so it’s the best level for beginners to practice.
  
  ## Medium ⚖️
  
    AI plays a mix of random and smart moves.
  
    Sometimes it chooses a random move to keep the game unpredictable.
  
    Other times, it uses basic Minimax logic to block the player or try to win.
  
    Provides a balanced challenge where the player still has a fair chance to win.
  
  ## Hard 🧠
  
    AI uses the Minimax algorithm with Alpha-Beta Pruning.
  
    Simulates all possible future moves and always picks the best optimal move.
  
    Alpha-Beta pruning improves performance by ignoring unnecessary game tree branches.
  
    Extremely difficult to beat because the AI never makes mistakes.
- ✅ Highlighted winning cells  
- ✅ Colored moves:
  - Human moves → 🟩 Green  
  - AI moves → 🟥 Red  
- ✅ Turn-based hover effects (green for player, red for AI)  
- ✅ Restart button to play again  


## 🧠 The AI (Minimax + Alpha-Beta Pruning)
The **AI brain** is built using the **Minimax algorithm**, a classic decision-making algorithm in game theory:

- 🔹 **Minimax Algorithm**  
  The AI simulates **all possible moves** until the game ends (win, lose, or draw).  
  - It tries to **maximize its own chances of winning**.  
  - It assumes the player will also play optimally to **minimize AI’s chances**.  

- 🔹 **Alpha-Beta Pruning**  
  Since Minimax checks every possible move, it can be **slow**.  
  Alpha-Beta pruning improves efficiency by:  
  - Cutting off branches that **don’t need to be explored**  
  - Skipping calculations that won’t affect the final decision  
  - Making the AI **much faster** while staying **unbeatable**  

⚡ In Hard mode, the AI is mathematically **impossible to beat**.  
The best a human can do is force a **draw**.

## 📸 Screenshots
<img width="975" height="910" alt="Screenshot 2025-08-20 144033" src="https://github.com/user-attachments/assets/6db02983-5edd-4ea3-9290-6bfabcdb6820" />


<img width="815" height="909" alt="Screenshot 2025-08-20 144111" src="https://github.com/user-attachments/assets/d8d0bbc5-147f-4c4f-a86d-840ef4c39ea1" />


<img width="823" height="916" alt="Screenshot 2025-08-20 144152" src="https://github.com/user-attachments/assets/e0a945d7-1a70-489e-852e-6f7562dea521" />

## 🛠️ Installation
Clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/yourusername/tic-tac-toe-ai.git
cd tic-tac-toe-ai
```
Then just open index.html in your browser.
