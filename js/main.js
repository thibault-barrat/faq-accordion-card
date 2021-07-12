//Show and hide answer on click on a question
var questions = document.querySelectorAll('.faq-accordion-card__question');
questions.forEach((item) => {
    item.addEventListener('click', (event) => {
        var itemCible = event.target.parentNode;
        //Delete any other existing active class to not have two open questions
        document.querySelectorAll('.faq-accordion-card__item--active').forEach((item) => {
            if (item != itemCible) {
                item.classList.remove('faq-accordion-card__item--active');
            }
        });
        //Adding active class to the item containing the clicked question
        itemCible.classList.toggle('faq-accordion-card__item--active');
    });
});
