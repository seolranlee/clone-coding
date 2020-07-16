import Icons from "./icons.js";
class Feed {
  constructor({
    profile,
    images,
    likes,
    text,
    comments,
    isLiked,
    isDeleted,
    isSaved,
    createdAt
  }) {
    this.profile = profile;
    this.images = images;
    this.likes = likes;
    this.text = text;
    this.comments = comments;
    this.isLiked = isLiked;
    this.isDeleted = isDeleted;
    this.isSaved = isSaved;

    this.createdAt = createdAt;

    this.$el = null;

    this.icons = new Icons({
      isLike: this.isLike,
      isSaved: this.isSaved
    });
  }
  mounted() {
    // if (!this.isDeleted) {
    //   this.$el
    //     .getElementsByClassName("icon__like")[0]
    //     .addEventListener("click", () => {
    //       this.isLiked = !this.isLiked;
    //       // this.reRender(this.$likeEl);
    //       this.render(this.$el);
    //       // event가 다 날라가니까 mounted를 해줘야함.
    //       this.mounted();
    //     });
    // }
    this.icons.mounted();
  }
  render(el) {
    el.innerHTML = `${
      this.isDeleted
        ? ""
        : `<div class="feed">
    <div class="feed__header">
      <div class="header__account-info">
        <div class="user__thumb">
          <img
            src="${this.profile.thumb}"
          />
        </div>
        <a class="user__id" href="">${this.profile.id}</a>
      </div>
      <div class="header__actions">
        <button class="more__actions">
            <svg
            aria-label="옵션 더 보기"
            class="_8-yf5 "
            fill="#262626"
            height="16"
            viewBox="0 0 48 48"
            width="16"
        >
            <circle
            clip-rule="evenodd"
            cx="8"
            cy="24"
            fill-rule="evenodd"
            r="4.5"
            ></circle>
            <circle
            clip-rule="evenodd"
            cx="24"
            cy="24"
            fill-rule="evenodd"
            r="4.5"
            ></circle>
            <circle
            clip-rule="evenodd"
            cx="40"
            cy="24"
            fill-rule="evenodd"
            r="4.5"
            ></circle>
        </svg>
        </button>
      </div>
    </div>
    <div class="feed__images">
      <img
        src="${this.images[0]}"
      />
    </div>
    
    ${this.icons.render(el)}

    <div class="feed__likes">
      <p class="likes__text">좋아요 <em>${this.likes.length}</em>개</p>
    </div>
    <div class="feed__text">
      <p class="text">
        <a href="" class="account__id">${this.profile.id}</a>${this.text}
      </p>
    </div>
    <div class="feed__view-comments">
      <a href="" class="view-comment__all-comment">댓글 <em>${
        this.comments.length
      }</em>개 모두 보기</a>
      <div class="view-comment__comment-list">
      ${this.comments.map(comment => {
        return `
          <div class="comment-list__comment-item">
          <p class="text">
            <a href="" class="account__id">${comment.id}</a>${comment.comment}
          </p>
          <button class="comment-item__like">
            <svg
              aria-label="좋아요"
              class="_8-yf5 "
              fill="#8e8e8e"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
              ></path>
            </svg>
          </button>
        </div>
        `;
      })}
      </div>
    </div>
    <div class="feed__time"><em>${this.createdAt}</em>시간 전</div>
    <div class="feed__write-comments">
      <div class="wirte-comment__input">
        <input
          type="text"
          placeholder="댓글 달기..."
        />
      </div>
      <button class="wirte-comment__button">게시</button>
    </div>
  </div>`
    }`;
    this.$el = el;
    return el;
  }
}
const responseDate = {
  data: [
    {
      profile: {
        thumb:
          "https://pbs.twimg.com/profile_images/923057960577675265/ccdSWBm2_400x400.jpg",
        id: "peppoya"
      },
      images: [
        "https://pbs.twimg.com/media/EAPAJcFU0AAyPnW?format=jpg&name=large"
      ],
      likes: [
        {
          thumb:
            "https://pbs.twimg.com/profile_images/1218201600860160000/Lkzq8rKr_400x400.jpg",
          id: "afternoon"
        }
      ],
      text: "브랜디 페퍼 하이",
      comments: [
        {
          thumb:
            "https://pbs.twimg.com/profile_images/1218201600860160000/Lkzq8rKr_400x400.jpg",
          id: "afternoon",
          comment: "하이 최애 갱얼쥐"
        }
      ],
      isLiked: false,
      isDeleted: false,
      isSaved: false,
      createdAt: 3
    },
    {
      profile: {
        thumb:
          "https://pbs.twimg.com/profile_images/923057960577675265/ccdSWBm2_400x400.jpg",
        id: "peppoya"
      },
      images: [
        "https://pbs.twimg.com/media/EAPAJcFU0AAyPnW?format=jpg&name=large"
      ],
      likes: [
        {
          thumb:
            "https://pbs.twimg.com/profile_images/1218201600860160000/Lkzq8rKr_400x400.jpg",
          id: "afternoon"
        }
      ],
      text: "브랜디 페퍼 하이",
      comments: [
        {
          thumb:
            "https://pbs.twimg.com/profile_images/1218201600860160000/Lkzq8rKr_400x400.jpg",
          id: "afternoon",
          comment: "하이 최애 갱얼쥐"
        }
      ],
      isLiked: false,
      isDeleted: false,
      isSaved: false,
      createdAt: 3
    }
  ]
};
const timeLine = document.getElementById("timeline");
const feedList = [];

responseDate.data.forEach((data, index) => {
  feedList.push(new Feed(data));
  const element = document.createElement("div");
  feedList[index].render(element);
  timeLine.append(element);
  feedList[index].mounted();
});
