/**
 * @description 인스타그램 안에 쓰이는 좋아요나 저장 기능의 아이콘 상태변화를 토글하기 위해 만든 라이브러리.
 */
class Icon extends Component {
  /**
   * 생성자 함수.
   * @param {*} isActive: 아이콘의 활성화 유무.
   * @param {*} images: 아이콘의 활성화 유무에 따라 달라지는 아이콘 이미지 배열. svg 태그와 image url만 받는다.
   */
  constructor({ isActive, images, unique }) {
    super({ unique });
    this.isActive = isActive;
    this.isSvg = [false, false];
    this.images = images;
    this.images.forEach((img, index) => {
      if (img.slice(1, 4) === "svg") this.isSvg[index] = true;
    });
  }

  _inActiveIcon() {
    return this.isSvg
      ? `<div class="icon-animation">${this.images[0]}</div>`
      : `<img class="icon-animation" src="${this.images[0]}" />`;
  }

  _activeIcon() {
    return this.isSvg
      ? `<div class="icon-active-animation">${this.images[1]}</div>`
      : `<img class="icon-active-animation" src="${this.images[1]}" />`;
  }

  render() {
    return `<div unique-name=${this.unique}>
          ${this.isActive ? this._activeIcon() : this._inActiveIcon()}
      </div>`;
  }
  destroy() {}
}
