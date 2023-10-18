import React, { forwardRef } from "react";
import { View } from "react-native";
import PostCard from "../../components/PostCard";

const PostList = (props, ref: { props: any; ref: any }) => {
  return (
    <View>
      {props.postListData?.map((postList: any) => {
        return (
          <View key={postList._id}>
            <PostCard
              id={postList._id}
              name={postList.user.username}
              profileimage={postList.user.picture}
              date={postList.createdAt}
              postimage={postList.images}
              comment={postList?.comments || []}
              posttitle={postList.text}
              sheetRef={props.sheetRef}
              optionSheet={props.optionSheet}
              hasStory={false}
            />
          </View>
        );
      })}
    </View>
  );
};

export default forwardRef(PostList);
