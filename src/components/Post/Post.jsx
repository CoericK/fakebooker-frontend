import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { withTheme } from "styled-components";
import ReactMarkdown from "react-markdown";
import { Popover, Button, Avatar } from "antd";
import {
  PostContainer,
  PostHeader,
  PostCard,
  ProfileWrapper,
  NameWrapper,
  ProfileName,
  PostCreation,
  PostContent,
  PostFooter,
  LikesWrapper,
  LikesDisplay,
  PopButton,
  LikesCount,
  CommentsWrapper,
  CommentsCount,
  SharesWrapper,
  SharesCount,
  LikesHeading,
  CommentsHeading,
  SharesHeading,
  CommentsContainer,
  PostImage
} from "./Post.styles";
import { ReactComponent as CommentsSVG } from "../../assets/icons/chatbox.svg";
import { ReactComponent as LikesSVG } from "../../assets/icons/thumbs-up.svg";
import { ReactComponent as SharesSVG } from "../../assets/icons/share-social.svg";
import { ReactComponent as ThreeDotsSvg } from "../../assets/icons/ellipsis-horizontal.svg";
import Comment from "../Comment/Comment";
import CreateComment from "../Comment/CreateComment";
import { DELETE_POST, LIKE_POST, GET_POSTS } from "../../utils/queries";

const Post = ({ post, theme, user, readOnly }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && post.likes.find(like => like.userId === user.id)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, post]);

  const [deletePost] = useMutation(DELETE_POST, {
    variables: {
      postId: post.id
    },
    update: proxy => {
      const data = proxy.readQuery({
        query: GET_POSTS
      });

      const newPostList = data.getPosts.filter(p => p.id !== post.id);

      const newData = { getPosts: [...newPostList] };

      proxy.writeQuery({
        query: GET_POSTS,
        data: newData
      });
    }
  });

  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      postId: post.id
    }
  });

  const SettingsPopup = (
    <div>
      <PopButton type="link" onClick={deletePost}>
        Delete Post
      </PopButton>
    </div>
  );
  return (
    <PostContainer>
      <PostCard bodyStyle={{ padding: "0" }} bordered={false}>
        <PostHeader>
          <ProfileWrapper>
            <Avatar size={40} shape="circle" src={post.userId.avatarImage} />
            <NameWrapper>
              <ProfileName>
                {post.userId.firstName} {post.userId.lastName}
              </ProfileName>
              <PostCreation>
                {new Date(Number(post.createdAt)).toLocaleDateString("en-US")}
              </PostCreation>
            </NameWrapper>
          </ProfileWrapper>
          {!readOnly && (
            <Popover content={SettingsPopup} placement="bottomRight">
              <ThreeDotsSvg
                style={{
                  cursor: "pointer",
                  width: "25px",
                  height: "25px",
                  fill: "#65676b"
                }}
              />
            </Popover>
          )}
        </PostHeader>
        <PostContent>
          <ReactMarkdown source={post.body} />
        </PostContent>
        {post.image && <PostImage src={post.image} alt="post graphics" />}
        <PostFooter>
          <LikesWrapper>
            <LikesDisplay>
              {liked ? (
                <Button
                  type="link"
                  onClick={likePost}
                  style={{ padding: 0, display: "flex", alignItems: "center" }}
                >
                  <LikesSVG
                    fill={theme.appTextColor}
                    width="25px"
                    height="25px"
                  />
                  <LikesCount>{post.likes.length}</LikesCount>
                </Button>
              ) : (
                <Button
                  type="link"
                  onClick={likePost}
                  style={{
                    padding: 0,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <LikesSVG
                    fill={theme.tertiaryTextColor}
                    width="25px"
                    height="25px"
                  />
                  <LikesHeading>Like</LikesHeading>
                </Button>
              )}
            </LikesDisplay>
          </LikesWrapper>
          <CommentsWrapper>
            <CommentsSVG
              fill={theme.tertiaryTextColor}
              width="25px"
              height="25px"
            />
            <CommentsCount>
              {post.comments.length === 0 ? (
                <CommentsHeading>Comment</CommentsHeading>
              ) : (
                post.comments.length
              )}
            </CommentsCount>
          </CommentsWrapper>
          <SharesWrapper>
            <SharesSVG
              fill={theme.tertiaryTextColor}
              width="25px"
              height="25px"
            />
            <SharesCount>
              <SharesHeading>Share</SharesHeading>
            </SharesCount>
          </SharesWrapper>
        </PostFooter>
      </PostCard>
      <CommentsContainer>
        {post.comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            postId={post.id}
            urlProfile={readOnly}
          />
        ))}
        <CreateComment user={user} postId={post.id} urlProfile={readOnly} />
      </CommentsContainer>
    </PostContainer>
  );
};

export default withTheme(Post);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.shape({
      avatarImage: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    createdAt: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.array,
    comments: PropTypes.array
  }),
  theme: PropTypes.shape({
    appTextColor: PropTypes.string,
    tertiaryTextColor: PropTypes.string
  }),
  user: PropTypes.shape({
    id: PropTypes.string,
    avatarImage: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string,
    gender: PropTypes.string,
    coverImage: PropTypes.string
  }),
  readOnly: PropTypes.bool
};

Post.defaultProps = {
  post: null,
  theme: null,
  user: null,
  readOnly: null
};
