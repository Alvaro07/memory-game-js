export default class Card {
  constructor (iconName) {
    this.template = `<figure class="card" data-card="${iconName}">
      <div class="card__scene">
        <div class="card__face card__face--front">?</div>
        <div class="card__face card__face--back">
          <i class="fab fa-${iconName}"></i>
        </div>
      </div>
    </figure>`
  }
}
