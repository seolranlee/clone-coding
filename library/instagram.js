/**
 *
 * @description 인스타그램 라이브러리 컴포넌트 클래스들이 공용적으로 쓰는 컴포넌트 클래스
 */

class Component {
  /**
   * 생성자 함수.
   * @param {*} unique: 각 컴포넌트 안의 요소들을 선택하기 위해 유니크하게 쓰이는 unique name. 중복되어선 안된다.
   * @description: 인스턴스를 만들때 unique name을 받아 컴포넌트와 DOM을 매칭시켜준다.
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

let iconName = `icon-${Math.round(Math.random() * 100000000)}`;
let iconIdx = 0;

class Icon extends Component {
  /**
   * 생성자 함수.
   * @param {*} isActive: 아이콘의 활성화 유무.
   * @param {*} images: 아이콘의 활성화 유무에 따라 달라지는 아이콘 이미지 배열. svg 태그와 image url만 받는다.
   */
  constructor({ isActive, images }) {
    super({ unique: iconName + ++iconIdx });
    this.isActive = isActive;
    this.isSvg = [false, false];
    this.images = images;
    this.images.forEach((img, index) => {
      if (img.slice(1, 4) === "svg") this.isSvg[index] = true;
    });
  }

  mounted() {
    super.mounted();
    this._addEvent();
  }

  _addEvent() {
    this.$el.addEventListener("click", () => {
      this.isActive = !this.isActive;
      this.$el.outerHTML = this.render();
      this.mounted();
    });
  }

  _inActiveIcon() {
    return this.isSvg
      ? this.images[0]
      : `<img src="${this.images[0]}" />`;
  }

  _activeIcon() {
    return this.isSvg
      ? this.images[1]
      : `<img src="${this.images[1]}" />`;
  }

  render() {
    console.log(this.isSvg);
    return `<div unique-name=${this.unique} class="${this.isActive? "icon active" : "icon"}">
        ${this.isActive ? this._activeIcon() : this._inActiveIcon()}
    </div>`;
  }
  destroy() {}
}

/**
 * @description 인스타그램 슬라이드 영역 컴포넌트를 구현하기 위한 라이브러리.
 */

let sliderName = `slide-${Math.round(Math.random() * 100000000)}`;
let sliderIdx = 0;

// multi
class Slider extends Component {
  /**
   * 생성자 함수.
   * @param {*} unique: 각 컴포넌트 안의 요소들을 선택하기 위해 유니크하게 쓰이는 unique name. 중복되어선 안된다.
   * @param {*} item: 슬라이드를 생성하기 위해 받아오는 아이템들(타입은 확장 가능)
   * @description: 인스턴스를 만들때 unique name을 받아 컴포넌트와 DOM을 매칭시켜준다.
   */

  constructor({ unique, item }) {
    super({ unique: sliderName + ++sliderIdx });
    this.item = item;

    this.count = 0;
    this.eventListener = null;
  }
  mounted() {
    super.mounted();
    this.addEvent();
  }
  navigation() {
    return `
      <ul class="navigation">
        <button class="navPrev"> < </button>
        <button class="navNext"> > </button>
      </ul>
    `;
  }
  goSlide() {
    this.$el.querySelector(".slides-wrapper").style.transform =
      "translate3d(" + -(614 * this.count) + "px, 0, 0)";
  }
  goNext() {
    if (this.count < this.item.length - 1) {
      this.count += 1;

      // slide
      this.goSlide(this.count);
      console.log(this.count);
      if (this.eventListener !== null) this.eventListener(this.count);
    }
  }
  goPrev() {
    if (this.count > 0) {
      this.count -= 1;
      // slide
      this.goSlide(this.count);
      console.log(this.count);
      if (this.eventListener !== null) this.eventListener(this.count);
    }
  }
  addEvent() {
    this.$el.querySelector(".navPrev").addEventListener("click", () => {
      this.goPrev();
    });
    this.$el.querySelector(".navNext").addEventListener("click", () => {
      this.goNext();
    });
  }
  render(children) {
    return `
      <div class="slider" unique-name=${this.unique}>
        <div class="slider-container">
          ${children}
        </div>
        ${this.navigation()}
      </div>
    `;
  }

  onSliderEffect(listener = count => {}) {
    this.eventListener = listener;
  }
}

/**
 * @description 받아오는 아이템의 형식이 복수의 이미지 일 때 이를 슬라이더로 구현하기 위한 라이브러리.
 */

class ImageSlider extends Slider {
  /**
   * 생성자 함수.
   * @param {*} unique: 각 컴포넌트 안의 요소들을 선택하기 위해 유니크하게 쓰이는 unique name. 중복되어선 안된다.
   * @param {*} item: 슬라이드를 생성하기 위해 받아오는 아이템들(타입은 확장 가능)
   * @description: 인스턴스를 만들때 unique name을 받아 컴포넌트와 DOM을 매칭시켜준다.
   */

  constructor({ unique, item }) {
    super({ unique, item });
  }
  render() {
    return super.render(`
      <ul class="slides-wrapper" style="width:${614 * this.item.length + "px"}">
        ${this.item
          .map((image, index) => {
            return `
        <li class="slide-list slide-${index + 1}">
          <img src="${image}" alt="images">
        </li>
        `;
          })
          .join("")}
      </ul>
    `);
  }
}

/**
 * @description 받아오는 아이템이 하나일 때 이를 item-container로 감싸기 위해 구현된 라이브러리.
 */

// single
// class Item extends Component {
//   constructor({ unique, item }){
//     super({ unique })
//     this.item = item
//   }
//   mounted(){
//     super.mounted()
//   }
//   render(children) {
//     return `
//       <div unique-name=${this.unique}>
//         <div class="item-container">
//           ${children}
//         </div>
//       </div>
//     `
//   }
// }

// class Image extends Item {
//   constructor({ unique, item }){
//     super({ unique, item })
//   }
//   render(){
//     return super.render(`<img src=${this.item}>`)
//   }
// }

class Image extends Component {
  constructor({ unique, item }) {
    super({ unique });

    this.item = item;
  }
  mounted() {
    super.mounted();
  }
  render() {
    return `
      <div unique-name=${this.unique}>
        <div class="item-container">
          <img src="${this.item}" alt="image">
        </div>
      </div>
    `;
  }
}

class Video extends Component {
  constructor({ unique, item }) {
    super({ unique });

    this.item = item;
  }
  mounted() {
    super.mounted();
  }
  render() {
    return `
      <div unique-name=${this.unique}>
        <div class="item-container">
          <video class="video-wrapper" muted playsinline autoplay>
            <source type="video/mp4" src="${this.item}">
          </video>
        </div>
      </div>
    `;
  }
}

// 슬라이더의 상태를 해치지 않으면서
// 슬라이더의 상태를 꺼낼 수 있는 방법

let indicatorName = `indicator-${Math.round(Math.random() * 100000000)}`;
let indicatorIdx = 0;

class Indicator extends Component {
  constructor({ count }) {
    super({ unique: indicatorName + ++indicatorIdx });

    this.count = count;
    this.indicatorDots = [];
  }
  mounted() {}
  render() {
    const indicatorArr = [];
    for (let i = 0; i < this.count; i++) {
      indicatorArr.push(
        `<span class="indicator-dot" unique-name="${this.unique}-${i}"></span>`
      );
    }

    return `
    <div class="indicator" unique-name="${this.unique}">
      ${indicatorArr.toString().replace(/,/g, "")}
    </div>
    `;
  }

  moveTo(index) {
    console.log(index + "를 받았습니다!");
  }
}
