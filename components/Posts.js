import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "iamtinotaylor",
    userImg:
      "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/57170593_10158662133513438_6158280871016136704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G5b_P34CQ9gAX-8KqLh&_nc_ht=scontent.fsvg1-1.fna&oh=b108c132192654ee7942170b2e1860e7&oe=618CBB6B",
    img: "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/57170593_10158662133513438_6158280871016136704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G5b_P34CQ9gAX-8KqLh&_nc_ht=scontent.fsvg1-1.fna&oh=b108c132192654ee7942170b2e1860e7&oe=618CBB6B",
    caption: "This is dope!",
  },
  {
    id: "123",
    username: "iamtinotaylor",
    userImg:
      "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/57170593_10158662133513438_6158280871016136704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G5b_P34CQ9gAX-8KqLh&_nc_ht=scontent.fsvg1-1.fna&oh=b108c132192654ee7942170b2e1860e7&oe=618CBB6B",
    img: "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/57170593_10158662133513438_6158280871016136704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G5b_P34CQ9gAX-8KqLh&_nc_ht=scontent.fsvg1-1.fna&oh=b108c132192654ee7942170b2e1860e7&oe=618CBB6B",
    caption: "This is dope!",
  },
  {
    id: "123",
    username: "iamtinotaylor",
    userImg:
      "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/57170593_10158662133513438_6158280871016136704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G5b_P34CQ9gAX-8KqLh&_nc_ht=scontent.fsvg1-1.fna&oh=b108c132192654ee7942170b2e1860e7&oe=618CBB6B",
    img: "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/57170593_10158662133513438_6158280871016136704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G5b_P34CQ9gAX-8KqLh&_nc_ht=scontent.fsvg1-1.fna&oh=b108c132192654ee7942170b2e1860e7&oe=618CBB6B",
    caption: "This is dope!",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.img}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
