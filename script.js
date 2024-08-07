/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */



const predictions = [
    "Все будет супер!",
    "Все будет еще лучше!",
    "Затвра будет лучше, чем вчера!",
    "Вскоре ты встретишь старого друга, и это будет замечательная встреча!",
    "У тебя будет возможность реализовать свою мечту!",
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const forecastBtn = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastParagraph = document.querySelector('.current-forecast p');
const forecastsContainer = document.querySelector('.forecasts');
const forecastTemplate = document.getElementById('forecast-item').content;

forecastBtn.addEventListener('click', () => {
    const predictionIndex = getRandomNumber(0, predictions.length - 1);
    const predictionText = predictions[predictionIndex];
    const successProbability = getRandomNumber(0, 100);

    currentForecastTitle.textContent = predictionText;
    currentForecastParagraph.textContent = `Вероятность: ${successProbability}%`;

    addForecastToList(predictionText, successProbability);
});

function addForecastToList(predictionText, successProbability) {
    const forecastItem = document.importNode(forecastTemplate, true);
    forecastItem.querySelector('h3').textContent = predictionText;
    forecastItem.querySelector('p').textContent = `Вероятность: ${successProbability}%`;

    forecastsContainer.prepend(forecastItem);
}