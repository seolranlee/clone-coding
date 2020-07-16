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
    this.uniqueName = uniqueName;
  }
  render() {}

  /**
   *
   * @description: 인스턴스에서 받아온 유니크네임을 받아 el와 연결시켜준다.
   */
  mounted() {
    this.$el = document.querySelector(`[unique-name="${this.uniqueName}"]`);
    console.log(this.$el);
  }
  destory() {}
}
