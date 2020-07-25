/**
 * @description 인스타그램 안에 쓰이는 좋아요나 저장 기능의 아이콘 상태변화를 토글하기 위해 만든 라이브러리.
 */
class Images extends Component {
  /**
   * 생성자 함수.
   * @param {*} images: 이미지 배열(여러개 일 경우 슬라이더로)
   */
  constructor({ images, unique }) {
    super({ unique });
    this.images = images;
    this.$el = null;
  }

  mounted() {
    super.mounted();
    console.log("images", this.$el);
    this._images();
    // this.$el.addEventListener("click", () => {
    //   this.isActive = !this.isActive;
    //   this.$el.outerHTML = this.render();
    //   this.mounted();
    // });
  }

  _images() {
    console.log(this.$el);
    const imagesLayer =
      this.images.length > 1
        ? document.createElement("ul")
        : document.createElement("div");

    this.images.length > 1
      ? `
  ${this.images.forEach((image, index) => {
    imagesLayer.append(
      `<li class="slide-list slide-${index + 1}">
        <img src="${image}" alt="images">
      </li>`
    );
  })}
  `
      : imagesLayer.append(`<img src="${this.images[0]}" alt="image">`);
  }

  // _indicator() {
  //   return this.images.length > 1 ? this.images[0] : "";
  // }

  // _navigation() {
  //   return this.images.length > 1 ? this.images[1] : "";
  // }

  render() {
    return `
    <div unique-name=${this.unique} class="images-wrap">
        ${this._images()}
    </div>`;
  }
  destroy() {}
}
