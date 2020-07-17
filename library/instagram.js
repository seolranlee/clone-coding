/**
 *
 * @description 인스타그램 라이브러리 컴포넌트 클래스들이 공용적으로 쓰는 컴포넌트 클래스
 */

class Component {
  /**
   * 생성자 함수.
   * @param {*} unique: 각 컴포넌트에서 선택을 위해 유니크하게 쓰이는 unique
   * @description: 인스턴스를 만들때 받아오는 unique을 연결시켜준다.
   */
  constructor({ unique }) {
    this.$el = null;
    console.log(unique);
    this.unique = unique;
  }
  render() {}

  /**
   *
   * @description: 인스턴스에서 받아온 유니크네임을 받아 el와 연결시켜준다.
   */
  mounted() {
    this.$el = document.querySelector(`[unique-name="${this.unique}"]`);
    // console.log(this.$el);
  }
  destory() {}
}

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
    this.$el = null;
    this.images.forEach((img, index) => {
      if (img.slice(1, 4) === "svg") this.isSvg[index] = true;
    });
  }

  mounted() {
    super.mounted();
    console.log(this.$el);
    this.$el.addEventListener("click", () => {
      this.isActive = !this.isActive;
      this.$el.outerHTML = this.render();
      this.mounted();
    });
  }

  _inActiveIcon() {
    return this.isSvg[0] ? this.images[0] : `<img src="${this.images[0]}" />`;
  }

  _activeIcon() {
    return this.isSvg[1] ? this.images[1] : `<img src="${this.images[1]}" />`;
  }

  render() {
    console.log(this.isSvg);
    return `<div unique-name=${this.unique}>
        ${this.isActive ? this._activeIcon() : this._inActiveIcon()}
    </div>`;
  }
  destroy() {}
}
