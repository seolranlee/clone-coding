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

    this.$likesEl = null;
  }
  mounted() {
    if (!this.isDeleted) {
      this.$el
        .getElementsByClassName("icon__like")[0]
        .addEventListener("click", () => {
          this.isLiked = !this.isLiked;

          // this.reRender(this.$likeEl);
          // this.render(this.$el);
          this.$el.getElementsByClassName(
            "feed__icons"
          )[0].innerHTML = `<div class="icons__left">
          <button class="icon__like">
          ${
            this.isLiked
              ? `<svg aria-label="좋아요 취소" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`
              : `<svg
          aria-label="좋아요"
          class="_8-yf5"
          fill="#262626"
          height="24"
          viewBox="0 0 48 48"
          width="24"
        >
          <path
            d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
          ></path>
        </svg>`
          }
          </button>
          <button class="icon__comment">
            <svg
              aria-label="댓글 달기"
              class="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                clip-rule="evenodd"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button class="icon__share">
            <svg
              aria-label="게시물 공유"
              class="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="icons__right">
          <button class="icon__save">
          ${
            this.isSaved
              ? `<svg aria-label="삭제" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path></svg>`
              : `<svg
          aria-label="저장"
          class="_8-yf5 "
          fill="#262626"
          height="24"
          viewBox="0 0 48 48"
          width="24"
        >
          <path
            d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
          ></path>
        </svg>`
          }  
          </button>
        </div>`;

          // event가 다 날라가니까 mounted를 해줘야함.
          this.mounted();
        });
    }
  }
  render(el) {
    console.log(el);
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
    <div class="feed__icons">
      <div class="icons__left">
        <button class="icon__like">
        ${
          this.isLiked
            ? `<svg aria-label="좋아요 취소" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`
            : `<svg
        aria-label="좋아요"
        class="_8-yf5"
        fill="#262626"
        height="24"
        viewBox="0 0 48 48"
        width="24"
      >
        <path
          d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
        ></path>
      </svg>`
        }
        </button>
        <button class="icon__comment">
          <svg
            aria-label="댓글 달기"
            class="_8-yf5 "
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button class="icon__share">
          <svg
            aria-label="게시물 공유"
            class="_8-yf5 "
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="icons__right">
        <button class="icon__save">
        ${
          this.isSaved
            ? `<svg aria-label="삭제" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path></svg>`
            : `<svg
        aria-label="저장"
        class="_8-yf5 "
        fill="#262626"
        height="24"
        viewBox="0 0 48 48"
        width="24"
      >
        <path
          d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
        ></path>
      </svg>`
        }  
        </button>
      </div>
    </div>
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
  reRender() {}
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
