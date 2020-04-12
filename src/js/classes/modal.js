export default class Modal {
  constructor (data) {
    this.template = `<div class="modal-wrap" id="modalWrap">
      <div class="c-modal">
        <div class="c-modal__header">
          <h3 class="c-modal__header__title">Congrats!!</h3>
          <p>Time: ${data.time}</p>
          <p>Attemps: ${data.game.attemps}</p>
          <p>Level: ${data.game.level}</p>
        </div>
        <div class="c-modal__footer">
          <button class="c-button" id="modalReset">Reset game</button>
        </div>
      </div>
    </div>`
  }
}
