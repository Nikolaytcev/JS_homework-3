class Game {
    constructor(container) {
      this.container = container;
      this.wordElement = container.querySelector('.word');
      this.winsElement = container.querySelector('.status__wins');
      this.lossElement = container.querySelector('.status__loss');
      this.timer = container.querySelector('.timer');
  
      this.reset();
      this.registerEvents();
    };

    timeCounter() {
        clearInterval(this.interval);
        this.time = this.container.querySelectorAll('.symbol').length;
        this.timer.textContent = this.time;
        this.interval = setInterval(() => {
            if (this.time != 0){
                this.time--;
                this.timer.textContent = this.time;
                }
            else {
                this.fail();
            }
        }, 1000);
    }
  
    reset() {
      this.setNewWord();
      this.winsElement.textContent = 0;
      this.lossElement.textContent = 0;
      this.timeCounter();
    }

    registerEvents() {
        document.addEventListener('keyup', (event) => {if (event.key.toLowerCase() === 
            this.currentSymbol.textContent.toLowerCase()) {
            this.success() 
        }
        else {
            this.fail()
        };
        });
    }
  
    success() {
      if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
      this.currentSymbol.classList.add('symbol_correct');
      this.currentSymbol = this.currentSymbol.nextElementSibling;
  
      if (this.currentSymbol !== null) {
        this.currentSymbol.classList.add('symbol_current');
        return;
      }
  
      if (++this.winsElement.textContent === 10) {
        alert('Победа!');
        return this.reset();
      }
      
      this.setNewWord();
      this.timeCounter();
    }
  
    fail() {
      if (++this.lossElement.textContent === 5) {
        alert('Вы проиграли!');
        return this.reset();
      }
      this.setNewWord();
      this.timeCounter();
    }
  
    setNewWord() {
      const word = this.getWord();
      this.renderWord(word);
    };
  
    getWord() {
      const words = [
          'bob',
          'awesome',
          'netology',
          'hello',
          'kitty',
          'rock',
          'youtube',
          'popcorn',
          'cinema',
          'love',
          'javascript'
        ],
        index = Math.floor(Math.random() * words.length);
  
      return words[index];
    }
  
    renderWord(word) {
      const html = [...word]
        .map(
          (s, i) =>
            `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
        )
        .join('');
      this.wordElement.innerHTML = html;
  
      this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
  }
  
  new Game(document.getElementById('game'))