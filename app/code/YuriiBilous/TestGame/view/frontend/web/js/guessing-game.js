define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'mage/translate'
], function($, modal, $t) {
    let options = {
        type: 'popup',
        responsive: true,
        innerScroll: true,
        modalClass: 'game-popup',
        buttons: [{
            text: $t('Exit'),
            class: 'guess-modal',
            click: function () {
                this.closeModal();
                resetGame();
            }
        }]
    };

    let triggerButton = $("#click-me"),
        historyRecord = $('#guess-history'),
        resultText = $('#guess-result'),
        guessBtn = $('#guess-btn'),
        input = $('#guess-input'),
        restartBtn = $('#restart-btn'),
        popup = modal(options, $('#popup-modal')),
        closeBtn = $('.game-popup .modal-header .action-close');

    triggerButton.on('click',function(){
        $("#popup-modal").modal("openModal");
    });

    restartBtn.on('click', resetGame);
    closeBtn.on('click', resetGame);

    // Function to reset the game
    function resetGame() {
        randomNumber = Math.floor(Math.random() * 50) + 1;
        guesses = [];
        historyRecord.empty();
        resultText.empty();
        input.val('');
        restartBtn.hide();
    }

    let randomNumber = Math.floor(Math.random() * 50) + 1,
        guesses = [];

    guessBtn.on('click', function() {
        let guess = parseInt(input.val());

        if (isNaN(guess) || guess < 1 || guess > 50) {
            resultText.html('<p>' + $t('Please enter a number between 1 and 50.') + '</p>');
            return;
        }

        guesses.push(guess);

        if (guess < randomNumber) {
            resultText.html('<p>'+ $t('The number entered was below the random number.') + '</p>');
        } else if (guess > randomNumber) {
            resultText.html('<p>'+ $t('The number entered was above the random number.') + '</p>');
        } else {
            resultText.html('<p>'+ $t('Congratulations! You guessed the correct number.') + '</p>');
            displayGuessHistory();
            restartBtn.show();
        }
    });

    // Function to display guess history
    function displayGuessHistory() {
        historyRecord.empty();

        for (let i = 0; i < guesses.length; i++) {
            let guess = guesses[i];
            let listItem = $('<li>').text(guess);
            if (i === guesses.length - 1) {
                listItem.addClass('highlight');
            }
            historyRecord.append(listItem);
        }
    }
});
