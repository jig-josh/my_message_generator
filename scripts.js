var quotes = [
    'Positive anything is better than negative nothing.    -Elbert Hubbard',
    'Miracles happen to those who believe in them.   -Bernhard Berenson',
    'One small positive thought can change your whole day.   -Zig Ziglar',
    'A positive atmosphere nurtures a positive attitude, which is required to take positive action.   -Richard M. DeVos',
    'Believe that life is worth living and your belief will help create the fact.   -William James',
    'Don\’t focus on negative things; focus on the positive, and you will flourish.   -Alek Wek',
    'Inspiration comes from within yourself. One has to be positive. When you’re positive, good things happen.   -Deep Roy',
    'Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.   -Lou Holtz',
    'It\’s most important that you surround yourself with positivity always, and have it in your mind at all times.   -Tyler Perry',
    'When you are joyful, when you say yes to life and have fun and project positivity all around you, you become a sun in the center of every constellation, and people want to be near you.   -Shannon L. Alder',
    'In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.   -Les Brown',
    'The less you respond to negative people, the more positive your life will become.   -Paolo Coelho',
    'The power for creating a better future is contained in the present moment: You create a good future by creating a good present.   -Eckhart Tolle',
    'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.   -Dale Carnegie',
    'Cultivate an optimistic mind, use your imagination, always consider alternatives, and dare to believe that you can make possible what others think is impossible.   -Rodolfo Costa',
    'Positive thinking is more than just a tagline. It changes the way we behave. And I firmly believe that when I am positive, it not only makes me better, but it also makes those around me better.   -Harvey Mackay',
    'What is the difference between an obstacle and an opportunity? Our attitude toward it. Every opportunity has a difficult, and every difficulty has an opportunity.   -J. Sidlow Baxter',
    'I\’m a very positive thinker, and I think that is what helps me the most in difficult moments.   -Roger Federer',
    'I hate letting my teammates down. I know I’m not going to make every shot. Sometimes I try to make the right play, and if it results in a loss, I feel awful. I don’t feel awful because I have to answer questions about it. I feel awful in that locker room because I could have done something more to help my teammates win.   -LeBron James',
    'People sometimes exaggerate this business of humility. It’s a question simply of knowing who you are, where you are, and that the world will continue exactly as it is without you.   -Rafael Nadal, Rafa'

];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));

    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}