/**
 *
 * @description 인스타그램 라이브러리 컴포넌트 클래스들이 공용적으로 쓰는 컴포넌트 클래스
 */

class Component {
  /**
   * 생성자 함수.
   * @param {*} uniqueName: 각 컴포넌트에서 선택을 위해 유니크하게 쓰이는 uniqueName
   * @description: 인스턴스를 만들때 받아오는 uniqueName을 연결시켜준다.
   */
  constructor({ uniqueName }) {
    this.$el = null;
    console.log(uniqueName);
    this.uniqueName = uniqueName;
  }
  render() {}

  /**
   *
   * @description: 인스턴스에서 받아온 유니크네임을 받아 el와 연결시켜준다.
   */
  mounted() {
    this.$el = document.querySelector(`[unique-name="${this.uniqueName}"]`);
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
  constructor({ isActive, images, uniqueName }) {
    super({ uniqueName });
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
  }

  _inActiveIcon() {
    return this.isSvg ? this.images[0] : `<img src="${this.images[0]}" />`;
  }

  _activeIcon() {
    return this.isSvg ? this.images[1] : `<img src="${this.images[1]}" />`;
  }

  render() {
    return `<div unique-name=${this.uniqueName}>
        ${this.isActive ? this._activeIcon() : this._inActiveIcon()}
    </div>`;
  }
  destroy() {}
}
