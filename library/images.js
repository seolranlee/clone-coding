/**
 * @description 인스타그램 이미지 컴포넌트를 구현하기 위한 라이브러리.
 */
class Images extends Component {
  /**
   * 생성자 함수.
   * @param {*} images: 이미지 배열(여러개 일 경우 슬라이더로 구현된다)
   */
  constructor({ images, unique }) {
    super({ unique });
    this.images = images;
    this.$el = null;

    this.count = 0;
  }

  mounted() {
    super.mounted();
    this._images();
    if (this.images.length > 1) {
      this._indicator();
      this._navigation();
      this._addEvent();
    }
  }

  _addEvent() {
    this.$el.querySelector(".navPrev").addEventListener("click", () => {
      this._goPrev();
    });
    this.$el.querySelector(".navNext").addEventListener("click", () => {
      this._goNext();
    });
  }

  _images() {
    const imagesLayer =
      this.images.length > 1
        ? document.createElement("ul")
        : document.createElement("div");

    imagesLayer.classList.add("images-wrapper");
    imagesLayer.style.width = 614 * this.images.length + "px";
    this.images.length > 1
      ? `
  ${this.images.forEach((image, index) => {
    imagesLayer.innerHTML += `<li class="slide-list slide-${index + 1}">
        <img src="${image}" alt="images">
      </li>`;
  })}
  `
      : (imagesLayer.innerHTML = `<img src="${this.images[0]}" alt="image">`);
    this.$el.querySelector(".images-container").append(imagesLayer);
  }

  _indicator() {
    const indicatorLayer = document.createElement("ul");
    indicatorLayer.classList.add("indicator");
    this.images.forEach((image, index) => {
      indicatorLayer.innerHTML += `<span class="${
        this.count === index ? "bullet on" : "bullet"
      }"></span>`;
    });
    this.$el.append(indicatorLayer);
  }

  _indicatorRerender() {
    this.$el.querySelector(".indicator").innerHTML = "";
    this.images.forEach((image, index) => {
      this.$el.querySelector(".indicator").innerHTML += `<span class="${
        this.count === index ? "bullet on" : "bullet"
      }"></span>`;
    });
  }

  _navigation() {
    const navigationLayer = document.createElement("ul");
    navigationLayer.classList.add("navigation");
    navigationLayer.innerHTML = `    
      <button class="navPrev"> < </button>
      <button class="navNext"> > </button>
    `;
    this.$el.append(navigationLayer);
  }

  _goSlide() {
    this.$el.querySelector(".images-wrapper").style.transform =
      "translate3d(" + -(614 * this.count) + "px, 0, 0)";
  }

  _goNext() {
    if (this.count < this.images.length - 1) {
      this.count += 1;

      // slide
      this._goSlide(this.count);
      console.log(this.count);

      // indicator
      this._indicatorRerender();
    } else return;
  }

  _goPrev() {
    if (this.count > 0) {
      this.count -= 1;
      // slide
      this._goSlide(this.count);
      console.log(this.count);

      // indicator
      this._indicatorRerender();
    } else return;
  }

  render() {
    return `<div unique-name=${this.unique}>
      <div class="images-container"></div>
    </div>`;
  }
  destroy() {}
}
