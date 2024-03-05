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

    let selectors = {
        triggerButton: $("#click-me"),
        historyRecord: $('#guess-history'),
        resultText: $('#guess-result'),
        guessBtn: $('#guess-btn'),
        input: $('#guess-input'),
        restartBtn: $('#restart-btn'),
        popup: modal(options, $('#popup-modal')),
        closeBtn: $('.game-popup .modal-header .action-close')
    };

    selectors.triggerButton.on('click',function(){
        $("#popup-modal").modal("openModal");
    });

    selectors.restartBtn.on('click', resetGame);
    selectors.closeBtn.on('click', resetGame);

    // Function to reset the game
    function resetGame() {
        randomNumber = Math.floor(Math.random() * 50) + 1;
        guesses = [];
        selectors.historyRecord.empty();
        selectors.resultText.empty();
        selectors.input.val('');
        selectors.restartBtn.hide();
    }

    let randomNumber = Math.floor(Math.random() * 50) + 1,
        guesses = [];

    selectors.guessBtn.on('click', function() {
        let guess = parseInt(selectors.input.val());

        if (isNaN(guess) || guess < 1 || guess > 50) {
            selectors.resultText.html('<p>' + $t('Please enter a number between 1 and 50.') + '</p>');
            return;
        }

        guesses.push(guess);

        if (guess < randomNumber) {
            selectors.resultText.html('<p>'+ $t('The number entered was below the random number.') + '</p>');
        } else if (guess > randomNumber) {
            selectors.resultText.html('<p>'+ $t('The number entered was above the random number.') + '</p>');
        } else {
            selectors.resultText.html('<p>'+ $t('Congratulations! You guessed the correct number.') + '</p>');
            displayGuessHistory();
            selectors.restartBtn.show();
        }
    });

    // Function to display guess history
    function displayGuessHistory() {
        selectors.historyRecord.empty();

        for (let i = 0; i < guesses.length; i++) {
            let guess = guesses[i];
            let listItem = $('<li>').text(guess);
            if (i === guesses.length - 1) {
                listItem.addClass('highlight');
            }
            selectors.historyRecord.append(listItem);
        }
    }
});
